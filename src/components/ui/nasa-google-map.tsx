import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
/// <reference types="google.maps" />
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { Badge } from './badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Satellite, MapPin, AlertTriangle, Camera, Thermometer } from 'lucide-react';

interface NASAData {
  earth?: any;
  events?: any[];
  apod?: any;
  mars?: any;
}

interface MapProps {
  className?: string;
}

export const NASAGoogleMap: React.FC<MapProps> = ({ className }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [nasaData, setNasaData] = useState<NASAData | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const { toast } = useToast();

  // Initialize Google Maps
  useEffect(() => {
    const initMap = async () => {
      if (!apiKey) {
        // Try to get API key from edge function
        try {
          const { data, error } = await supabase.functions.invoke('get-google-maps-key');
          if (data?.apiKey) {
            setApiKey(data.apiKey);
            return;
          }
        } catch (error) {
          console.log('Could not fetch API key from edge function');
        }
        
        // For now, show input for API key
        toast({
          title: "Google Maps API Key Required",
          description: "Please add your Google Maps API key to continue.",
          variant: "destructive",
        });
        return;
      }

      if (!mapRef.current) return;

      try {
        const loader = new Loader({
          apiKey: apiKey,
          version: 'weekly',
          libraries: ['places']
        });

        const google = await loader.load();
        
        const mapInstance = new google.maps.Map(mapRef.current, {
          center: { lat: 40.7128, lng: -74.0060 }, // New York City default
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.HYBRID,
        });

        // Add click listener to fetch NASA data for clicked location
        mapInstance.addListener('click', (event: google.maps.MapMouseEvent) => {
          if (event.latLng) {
            const lat = event.latLng.lat();
            const lng = event.latLng.lng();
            setSelectedLocation({ lat, lng });
            fetchNASAData(lat, lng);
            
            // Add marker at clicked location
            new google.maps.Marker({
              position: { lat, lng },
              map: mapInstance,
              title: 'Selected Location',
              icon: {
                url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                `),
                scaledSize: new google.maps.Size(32, 32),
              }
            });
          }
        });

        setMap(mapInstance);
      } catch (error) {
        console.error('Error loading Google Maps:', error);
        toast({
          title: "Map Loading Error",
          description: "Failed to load Google Maps. Please check your API key.",
          variant: "destructive",
        });
      }
    };

    initMap();
  }, [apiKey, toast]);

  const fetchNASAData = async (lat: number, lng: number) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('fetch-nasa-data', {
        body: {
          lat,
          lon: lng,
          dataType: 'all'
        }
      });

      if (error) throw error;

      if (data.success) {
        setNasaData(data.data);
        toast({
          title: "NASA Data Loaded",
          description: `Fetched data for coordinates: ${lat.toFixed(4)}, ${lng.toFixed(4)}`,
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Error fetching NASA data:', error);
      toast({
        title: "Error",
        description: "Failed to fetch NASA data for this location.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!apiKey) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            NASA Earth Data Explorer
          </CardTitle>
          <CardDescription>
            Enter your Google Maps API key to explore NASA data for any location
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="apiKey" className="text-sm font-medium">Google Maps API Key</label>
            <input
              id="apiKey"
              type="password"
              placeholder="Enter your Google Maps API key"
              className="w-full px-3 py-2 border border-input rounded-md bg-background"
              onChange={(e) => setApiKey(e.target.value)}
            />
          </div>
          <Button 
            onClick={() => {
              if (apiKey) {
                window.location.reload();
              }
            }}
            disabled={!apiKey}
            className="w-full"
          >
            Load Map
          </Button>
          <p className="text-sm text-muted-foreground">
            Get your API key from the <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Google Cloud Console</a>
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Satellite className="h-5 w-5" />
            NASA Earth Data Explorer
          </CardTitle>
          <CardDescription>
            Click anywhere on the map to fetch NASA data for that location
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div 
            ref={mapRef} 
            className="w-full h-96 rounded-lg border"
            style={{ minHeight: '400px' }}
          />
          {selectedLocation && (
            <div className="mt-4 p-3 bg-muted rounded-lg">
              <p className="text-sm">
                <MapPin className="inline h-4 w-4 mr-1" />
                Selected: {selectedLocation.lat.toFixed(4)}, {selectedLocation.lng.toFixed(4)}
              </p>
              {loading && <p className="text-sm text-muted-foreground">Loading NASA data...</p>}
            </div>
          )}
        </CardContent>
      </Card>

      {nasaData && (
        <div className="grid gap-4 md:grid-cols-2">
          {/* Natural Events */}
          {nasaData.events && nasaData.events.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Natural Events Nearby
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {nasaData.events.slice(0, 3).map((event: any, index: number) => (
                  <div key={index} className="border-l-4 border-orange-500 pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline">{event.categories[0]?.title || 'Natural Event'}</Badge>
                    </div>
                    <h4 className="font-semibold text-sm">{event.title}</h4>
                    <p className="text-xs text-muted-foreground">
                      {event.description || 'Natural event detected in this region'}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Astronomy Picture of the Day */}
          {nasaData.apod && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  NASA Picture of the Day
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">{nasaData.apod.title}</h4>
                  {nasaData.apod.url && (
                    <img 
                      src={nasaData.apod.url} 
                      alt={nasaData.apod.title}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  )}
                  <p className="text-xs text-muted-foreground line-clamp-3">
                    {nasaData.apod.explanation}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Mars Weather */}
          {nasaData.mars && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5" />
                  Mars Weather Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm">Latest weather data from Mars</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-muted p-2 rounded">
                      <span className="font-medium">Sol (Mars day)</span>
                      <p>{Object.keys(nasaData.mars).find(key => !isNaN(Number(key))) || 'N/A'}</p>
                    </div>
                    <div className="bg-muted p-2 rounded">
                      <span className="font-medium">Status</span>
                      <p>Active</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Data from NASA's InSight Mars lander
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Earth Imagery Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Satellite className="h-5 w-5" />
                Earth Observation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm">NASA Earth imagery and satellite data</p>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    Earth observation data from NASA's satellite network provides 
                    real-time monitoring of environmental changes, weather patterns, 
                    and natural phenomena across the globe.
                  </p>
                </div>
                {selectedLocation && (
                  <div className="text-xs space-y-1">
                    <p><strong>Coordinates:</strong> {selectedLocation.lat.toFixed(4)}, {selectedLocation.lng.toFixed(4)}</p>
                    <p><strong>Data Source:</strong> NASA Earth Observation</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};