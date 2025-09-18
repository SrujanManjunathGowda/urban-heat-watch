import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { lat, lon, dataType = 'earth' } = await req.json();
    const nasaApiKey = Deno.env.get('NASA_API_KEY');

    if (!nasaApiKey) {
      throw new Error('NASA API key not configured');
    }

    console.log(`Fetching NASA data for coordinates: ${lat}, ${lon}`);

    let nasaResponse;
    let data = {};

    // Fetch NASA Earth Imagery data
    if (dataType === 'earth' || dataType === 'all') {
      try {
        const earthResponse = await fetch(
          `https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=2023-01-01&dim=0.5&api_key=${nasaApiKey}`
        );
        
        if (earthResponse.ok) {
          const earthData = await earthResponse.json();
          data.earth = earthData;
        }
      } catch (error) {
        console.log('Earth imagery not available for this location');
      }
    }

    // Fetch NASA EONET natural events data
    if (dataType === 'events' || dataType === 'all') {
      try {
        const eventsResponse = await fetch(
          `https://eonet.gsfc.nasa.gov/api/v2.1/events?limit=20&days=30`
        );
        
        if (eventsResponse.ok) {
          const eventsData = await eventsResponse.json();
          // Filter events near the requested coordinates (within 5 degrees)
          const nearbyEvents = eventsData.events.filter((event: any) => {
            if (event.geometries && event.geometries.length > 0) {
              const coords = event.geometries[0].coordinates;
              const eventLat = coords[1];
              const eventLon = coords[0];
              
              return Math.abs(eventLat - lat) <= 5 && Math.abs(eventLon - lon) <= 5;
            }
            return false;
          });
          
          data.events = nearbyEvents;
        }
      } catch (error) {
        console.log('Natural events data not available');
      }
    }

    // Fetch NASA APOD (Astronomy Picture of the Day) as additional context
    if (dataType === 'apod' || dataType === 'all') {
      try {
        const apodResponse = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`
        );
        
        if (apodResponse.ok) {
          const apodData = await apodResponse.json();
          data.apod = apodData;
        }
      } catch (error) {
        console.log('APOD data not available');
      }
    }

    // Fetch NASA Mars Weather data as additional interesting data
    if (dataType === 'mars' || dataType === 'all') {
      try {
        const marsResponse = await fetch(
          `https://api.nasa.gov/insight_weather/?api_key=${nasaApiKey}&feedtype=json&ver=1.0`
        );
        
        if (marsResponse.ok) {
          const marsData = await marsResponse.json();
          data.mars = marsData;
        }
      } catch (error) {
        console.log('Mars weather data not available');
      }
    }

    console.log('NASA data fetched successfully:', Object.keys(data));

    return new Response(
      JSON.stringify({
        success: true,
        coordinates: { lat, lon },
        data,
        timestamp: new Date().toISOString()
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error in fetch-nasa-data function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});