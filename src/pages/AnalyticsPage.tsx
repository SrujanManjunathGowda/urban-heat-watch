import { Navbar } from "@/components/layout/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Activity,
  Calendar,
  Download,
  Filter
} from "lucide-react";

const AnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
              <BarChart3 className="h-8 w-8 text-primary" />
              City Analytics
            </h1>
            <p className="text-muted-foreground mt-2">
              Comprehensive analysis and trends for urban environmental health
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Calendar className="h-4 w-4" />
              Time Range
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-muted-foreground">Avg Temperature</div>
                <TrendingUp className="h-4 w-4 text-heat-hot" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28.4°C</div>
              <div className="flex items-center text-sm">
                <span className="text-heat-hot">+1.2°C</span>
                <span className="text-muted-foreground ml-1">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-muted-foreground">Green Cover</div>
                <TrendingUp className="h-4 w-4 text-forest" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">67.2%</div>
              <div className="flex items-center text-sm">
                <span className="text-forest">+2.8%</span>
                <span className="text-muted-foreground ml-1">improvement</span>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-muted-foreground">Air Quality</div>
                <TrendingDown className="h-4 w-4 text-success" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">82 AQI</div>
              <div className="flex items-center text-sm">
                <span className="text-success">-5 points</span>
                <span className="text-muted-foreground ml-1">better</span>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-muted-foreground">Sustainability Score</div>
                <Activity className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78/100</div>
              <div className="flex items-center text-sm">
                <span className="text-primary">+3 points</span>
                <span className="text-muted-foreground ml-1">this quarter</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Analysis */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Temperature Trends */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Temperature Trends (6 Months)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-r from-heat-cool via-heat-warm to-heat-hot rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/10" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between text-white text-xs">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4 text-white text-sm">
                  <div>Peak: 34.2°C</div>
                  <div>Average: 28.4°C</div>
                  <div>Low: 22.1°C</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Green Space Analysis */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Green Space Distribution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Parks & Recreation</span>
                  <span>42%</span>
                </div>
                <Progress value={42} className="h-3" />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Street Trees</span>
                  <span>28%</span>
                </div>
                <Progress value={28} className="h-3" />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Green Roofs</span>
                  <span>15%</span>
                </div>
                <Progress value={15} className="h-3" />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Urban Gardens</span>
                  <span>15%</span>
                </div>
                <Progress value={15} className="h-3" />
              </div>

              <div className="pt-4 border-t">
                <div className="text-lg font-semibold text-forest">67.2% Total Coverage</div>
                <div className="text-sm text-muted-foreground">Above city planning target of 60%</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analysis Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Heat Island Impact */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Heat Island Impact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-4 bg-heat-extreme/10 rounded-lg">
                <div className="text-2xl font-bold text-heat-extreme">+4.8°C</div>
                <div className="text-sm text-muted-foreground">Peak heat island effect</div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Downtown Core</span>
                  <Badge variant="destructive">+4.8°C</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Commercial Areas</span>
                  <Badge variant="secondary">+3.2°C</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Residential</span>
                  <Badge variant="outline">+1.8°C</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Parks & Water</span>
                  <Badge variant="secondary" className="bg-forest/20 text-forest">-0.5°C</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Flood Risk Assessment */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Flood Risk Assessment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-ocean/10 rounded-lg">
                  <div className="text-xl font-bold text-ocean">12%</div>
                  <div className="text-xs text-muted-foreground">High Risk Areas</div>
                </div>
                <div className="text-center p-3 bg-warning/10 rounded-lg">
                  <div className="text-xl font-bold text-warning">28%</div>
                  <div className="text-xs text-muted-foreground">Moderate Risk</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium">Risk Factors:</div>
                <div className="text-xs space-y-1">
                  <div>• Low elevation areas near waterways</div>
                  <div>• Poor drainage infrastructure</div>
                  <div>• High impervious surface coverage</div>
                  <div>• Historical flooding patterns</div>
                </div>
              </div>

              <div className="p-3 bg-success/10 rounded-lg">
                <div className="text-sm font-medium text-success">Improvement Plan</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Enhanced drainage systems planned for Q3 2025
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Items */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Recommended Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-forest/10 border border-forest/20">
                  <div className="font-medium text-sm">Expand Green Corridors</div>
                  <div className="text-xs text-muted-foreground">Connect existing parks through tree-lined streets</div>
                  <Badge variant="secondary" className="mt-2 text-xs">High Priority</Badge>
                </div>

                <div className="p-3 rounded-lg bg-ocean/10 border border-ocean/20">
                  <div className="font-medium text-sm">Improve Drainage</div>
                  <div className="text-xs text-muted-foreground">Upgrade storm water management systems</div>
                  <Badge variant="outline" className="mt-2 text-xs">Medium Priority</Badge>
                </div>

                <div className="p-3 rounded-lg bg-earth/10 border border-earth/20">
                  <div className="font-medium text-sm">Cool Roof Initiative</div>
                  <div className="text-xs text-muted-foreground">Incentivize reflective roofing materials</div>
                  <Badge variant="outline" className="mt-2 text-xs">Planning Phase</Badge>
                </div>
              </div>

              <Button className="w-full" size="sm">
                Generate Full Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AnalyticsPage;