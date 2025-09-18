import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Thermometer, Droplets, Trees, Building2 } from "lucide-react";

interface HeatMapProps {
  className?: string;
}

const mockHeatData = [
  { id: 1, zone: "Downtown", temp: 32.5, risk: "extreme", x: 40, y: 30 },
  { id: 2, zone: "Industrial", temp: 30.2, risk: "high", x: 70, y: 20 },
  { id: 3, zone: "Residential", temp: 27.8, risk: "moderate", x: 30, y: 60 },
  { id: 4, zone: "Park Area", temp: 24.1, risk: "low", x: 60, y: 70 },
  { id: 5, zone: "Waterfront", temp: 22.3, risk: "low", x: 80, y: 50 },
];

const layers = [
  { id: "heat", label: "Heat Map", icon: Thermometer, active: true },
  { id: "green", label: "Green Cover", icon: Trees, active: false },
  { id: "flood", label: "Flood Risk", icon: Droplets, active: false },
  { id: "buildings", label: "Buildings", icon: Building2, active: false },
];

export function HeatMap({ className }: HeatMapProps) {
  const [activeLayers, setActiveLayers] = useState(["heat"]);
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  const toggleLayer = (layerId: string) => {
    setActiveLayers(prev => 
      prev.includes(layerId) 
        ? prev.filter(id => id !== layerId)
        : [...prev, layerId]
    );
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "extreme": return "bg-heat-extreme";
      case "high": return "bg-heat-hot";
      case "moderate": return "bg-heat-warm";
      case "low": return "bg-heat-cool";
      default: return "bg-muted";
    }
  };

  const getRiskBadgeVariant = (risk: string) => {
    switch (risk) {
      case "extreme": return "destructive";
      case "high": return "destructive";
      case "moderate": return "secondary";
      case "low": return "secondary";
      default: return "outline";
    }
  };

  return (
    <div className={cn("space-y-4", className)}>
      {/* Layer Controls */}
      <div className="flex flex-wrap gap-2">
        {layers.map((layer) => (
          <Button
            key={layer.id}
            variant={activeLayers.includes(layer.id) ? "default" : "outline"}
            size="sm"
            onClick={() => toggleLayer(layer.id)}
            className="gap-2"
          >
            <layer.icon className="h-4 w-4" />
            {layer.label}
          </Button>
        ))}
      </div>

      {/* Interactive Map */}
      <div className="relative h-96 glass-card rounded-xl overflow-hidden">
        {/* Background Map */}
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-light to-forest-light opacity-20" />
        
        {/* Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="border border-muted-foreground/20" />
            ))}
          </div>
        </div>

        {/* Heat Zones */}
        {activeLayers.includes("heat") && mockHeatData.map((zone) => (
          <div
            key={zone.id}
            className={cn(
              "absolute w-16 h-16 rounded-full cursor-pointer transition-all duration-300 hover:scale-110",
              getRiskColor(zone.risk),
              "opacity-70 hover:opacity-90 animate-pulse-green"
            )}
            style={{
              left: `${zone.x}%`,
              top: `${zone.y}%`,
              transform: "translate(-50%, -50%)"
            }}
            onClick={() => setSelectedZone(zone.zone)}
          >
            <div className="flex items-center justify-center h-full">
              <span className="text-xs font-bold text-white">
                {zone.temp}°C
              </span>
            </div>
          </div>
        ))}

        {/* Green Cover Overlay */}
        {activeLayers.includes("green") && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-forest rounded-full opacity-60" />
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-forest rounded-full opacity-60" />
            <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-forest rounded-full opacity-60" />
          </div>
        )}

        {/* Building Density */}
        {activeLayers.includes("buildings") && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-2/5 w-12 h-8 bg-muted rounded opacity-70" />
            <div className="absolute top-1/4 left-1/2 w-8 h-12 bg-muted rounded opacity-70" />
            <div className="absolute bottom-1/3 left-1/3 w-10 h-6 bg-muted rounded opacity-70" />
          </div>
        )}

        {/* Legend */}
        <div className="absolute bottom-4 left-4 glass p-3 rounded-lg">
          <div className="text-xs font-medium mb-2">Temperature Risk</div>
          <div className="flex gap-2 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-heat-cool rounded-full" />
              <span>Low</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-heat-warm rounded-full" />
              <span>Moderate</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-heat-hot rounded-full" />
              <span>High</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-heat-extreme rounded-full" />
              <span>Extreme</span>
            </div>
          </div>
        </div>
      </div>

      {/* Zone Details */}
      {selectedZone && (
        <div className="glass-card p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold">{selectedZone} Zone</h3>
            <Badge variant={getRiskBadgeVariant(
              mockHeatData.find(z => z.zone === selectedZone)?.risk || "low"
            )}>
              {mockHeatData.find(z => z.zone === selectedZone)?.risk || "Low"} Risk
            </Badge>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Temperature:</span>
              <span className="ml-2 font-medium">
                {mockHeatData.find(z => z.zone === selectedZone)?.temp}°C
              </span>
            </div>
            <div>
              <span className="text-muted-foreground">Green Coverage:</span>
              <span className="ml-2 font-medium">
                {selectedZone === "Park Area" ? "85%" : selectedZone === "Residential" ? "45%" : "15%"}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}