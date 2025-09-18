import { DashboardCard } from "@/components/ui/dashboard-card";
import { HeatMap } from "@/components/ui/heat-map";
import { Navbar } from "@/components/layout/navbar";
import { 
  Thermometer, 
  Trees, 
  Droplets, 
  Wind,
  AlertTriangle,
  TrendingUp,
  MapPin,
  Activity
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">City Health Dashboard</h1>
          <p className="text-muted-foreground">
            Real-time monitoring of urban environmental conditions and health indicators.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="Urban Heat Index"
            value="32.5°C"
            description="Downtown area highest"
            icon={Thermometer}
            trend="up"
            trendValue="+2.1°C from avg"
            variant="heat"
          />
          <DashboardCard
            title="Green Coverage"
            value="65%"
            description="City-wide vegetation"
            icon={Trees}
            trend="up"
            trendValue="+5% this year"
            variant="forest"
          />
          <DashboardCard
            title="Flood Risk"
            value="12%"
            description="Areas at risk"
            icon={Droplets}
            trend="down"
            trendValue="-3% improvement"
            variant="ocean"
          />
          <DashboardCard
            title="Air Quality"
            value="87 AQI"
            description="Moderate levels"
            icon={Wind}
            trend="neutral"
            trendValue="Within normal range"
            variant="warning"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Heat Map - Takes up 2 columns */}
          <div className="xl:col-span-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Interactive Heat Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <HeatMap />
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Risk Alerts */}
            <Card className="glass-card border-warning/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-warning">
                  <AlertTriangle className="h-5 w-5" />
                  Active Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-heat-hot/10 border border-heat-hot/20">
                  <Thermometer className="h-4 w-4 text-heat-hot" />
                  <div className="flex-1">
                    <div className="font-medium text-sm">Extreme Heat Warning</div>
                    <div className="text-xs text-muted-foreground">Downtown District</div>
                  </div>
                  <Badge variant="destructive" className="text-xs">High</Badge>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-ocean/10 border border-ocean/20">
                  <Droplets className="h-4 w-4 text-ocean" />
                  <div className="flex-1">
                    <div className="font-medium text-sm">Flood Risk</div>
                    <div className="text-xs text-muted-foreground">Low-lying areas</div>
                  </div>
                  <Badge variant="secondary" className="text-xs">Medium</Badge>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-forest/10 border border-forest/20">
                  <Trees className="h-4 w-4 text-forest" />
                  <div className="flex-1">
                    <div className="font-medium text-sm">Green Space Gap</div>
                    <div className="text-xs text-muted-foreground">Industrial Zone</div>
                  </div>
                  <Badge variant="outline" className="text-xs">Low</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Sustainability Score */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-success" />
                  Sustainability Score
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-success">78/100</div>
                  <div className="text-sm text-muted-foreground">Overall city health</div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Temperature Control</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Green Infrastructure</span>
                      <span>82%</span>
                    </div>
                    <Progress value={82} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Water Management</span>
                      <span>74%</span>
                    </div>
                    <Progress value={74} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Air Quality</span>
                      <span>91%</span>
                    </div>
                    <Progress value={91} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="p-3 rounded-lg bg-forest/10 border border-forest/20">
                  <div className="font-medium">Add Green Roofs</div>
                  <div className="text-muted-foreground text-xs">
                    Installing green roofs in downtown could reduce temperature by 2°C
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-ocean/10 border border-ocean/20">
                  <div className="font-medium">Improve Drainage</div>
                  <div className="text-muted-foreground text-xs">
                    Enhanced drainage systems for flood-prone areas
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-heat-cool/20 border border-heat-cool/30">
                  <div className="font-medium">Urban Parks</div>
                  <div className="text-muted-foreground text-xs">
                    Create cooling corridors through strategic park placement
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;