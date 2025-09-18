import { Navbar } from "@/components/layout/navbar";
import { HeatMap } from "@/components/ui/heat-map";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Download, 
  Share2, 
  Settings,
  Thermometer,
  TrendingUp,
  AlertTriangle
} from "lucide-react";

const HeatMapPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
              <MapPin className="h-8 w-8 text-primary" />
              Urban Heat Map
            </h1>
            <p className="text-muted-foreground mt-2">
              Interactive visualization of urban heat islands and temperature distribution
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>

        {/* Status Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="glass-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-heat-extreme">34.2°C</div>
                  <div className="text-sm text-muted-foreground">Peak Temperature</div>
                </div>
                <Thermometer className="h-8 w-8 text-heat-extreme" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-heat-cool">21.8°C</div>
                  <div className="text-sm text-muted-foreground">Coolest Zone</div>
                </div>
                <TrendingUp className="h-8 w-8 text-heat-cool" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">12.4°C</div>
                  <div className="text-sm text-muted-foreground">Temperature Range</div>
                </div>
                <Badge variant="secondary">Range</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-warning/30">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-warning">3</div>
                  <div className="text-sm text-muted-foreground">Heat Alerts</div>
                </div>
                <AlertTriangle className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Heat Map */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Interactive Temperature Map
              <Badge variant="outline" className="ml-auto">Live Data</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <HeatMap />
          </CardContent>
        </Card>

        {/* Analysis Section */}
        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Temperature Trends</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Morning (6-10 AM)</span>
                  <span className="font-medium">24.5°C avg</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-heat-cool h-2 rounded-full" style={{ width: "45%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Afternoon (12-4 PM)</span>
                  <span className="font-medium">31.2°C avg</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-heat-hot h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Evening (6-10 PM)</span>
                  <span className="font-medium">27.8°C avg</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-heat-warm h-2 rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Hot Zones Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 rounded-lg bg-heat-extreme/10 border border-heat-extreme/20">
                <div className="font-medium text-sm">Downtown Business District</div>
                <div className="text-xs text-muted-foreground">32.5°C • High building density</div>
                <Badge variant="destructive" className="mt-1 text-xs">Extreme Risk</Badge>
              </div>

              <div className="p-3 rounded-lg bg-heat-hot/10 border border-heat-hot/20">
                <div className="font-medium text-sm">Industrial Zone</div>
                <div className="text-xs text-muted-foreground">30.8°C • Low vegetation</div>
                <Badge variant="secondary" className="mt-1 text-xs">High Risk</Badge>
              </div>

              <div className="p-3 rounded-lg bg-heat-warm/10 border border-heat-warm/20">
                <div className="font-medium text-sm">Residential Suburbs</div>
                <div className="text-xs text-muted-foreground">28.1°C • Mixed development</div>
                <Badge variant="outline" className="mt-1 text-xs">Moderate Risk</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Cooling Strategies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 rounded-lg bg-forest/10 border border-forest/20">
                <div className="font-medium text-sm">Green Roof Initiative</div>
                <div className="text-xs text-muted-foreground">-2.3°C potential cooling</div>
                <div className="text-xs text-success mt-1">Recommended for downtown</div>
              </div>

              <div className="p-3 rounded-lg bg-ocean/10 border border-ocean/20">
                <div className="font-medium text-sm">Water Features</div>
                <div className="text-xs text-muted-foreground">-1.8°C cooling effect</div>
                <div className="text-xs text-ocean mt-1">Public fountains & ponds</div>
              </div>

              <div className="p-3 rounded-lg bg-earth/10 border border-earth/20">
                <div className="font-medium text-sm">Light-Colored Surfaces</div>
                <div className="text-xs text-muted-foreground">-1.2°C reflective cooling</div>
                <div className="text-xs text-muted-foreground mt-1">Roads & building materials</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default HeatMapPage;