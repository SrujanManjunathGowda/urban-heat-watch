import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { NASAGoogleMap } from '@/components/ui/nasa-google-map';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Satellite, Globe, MapPin, Info } from 'lucide-react';

const NASAMapPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Globe className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold tracking-tight">NASA Earth Explorer</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore real-time NASA data for any location on Earth. Click anywhere on the map to discover 
              satellite imagery, natural events, and space weather information.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Satellite className="h-5 w-5" />
                  Earth Imagery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access NASA's collection of satellite images and earth observation data 
                  from the Landsat program and other missions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Natural Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Track natural disasters, wildfires, storms, and other significant 
                  events happening around the world in real-time.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  Space Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Explore additional space data including Mars weather, astronomy 
                  pictures, and other fascinating content from NASA missions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Map Component */}
          <NASAGoogleMap className="w-full" />

          {/* Footer Info */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                  Data provided by NASA's Earth Observing System Data and Information System (EOSDIS)
                </p>
                <p className="text-xs text-muted-foreground">
                  Map functionality powered by Google Maps API • Real-time updates from NASA's satellite network
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default NASAMapPage;