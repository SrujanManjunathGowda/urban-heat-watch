import { HeroSection } from "@/components/layout/hero-section";
import { Navbar } from "@/components/layout/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Thermometer, 
  Trees, 
  Droplets, 
  BarChart3,
  Users,
  Globe,
  Zap,
  ArrowRight,
  Github,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Thermometer,
      title: "Heat Island Analysis",
      description: "Real-time temperature mapping using NASA MODIS and Landsat data to identify urban heat hotspots.",
      color: "text-heat-hot"
    },
    {
      icon: Trees,
      title: "Green Space Planning", 
      description: "NDVI analysis from Sentinel-2 satellite data to optimize vegetation and park placement.",
      color: "text-forest"
    },
    {
      icon: Droplets,
      title: "Flood Risk Assessment",
      description: "Topographic analysis and precipitation data to identify vulnerable low-lying areas.",
      color: "text-ocean"
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Interactive dashboards with layer toggles and simulation tools for urban planning.",
      color: "text-primary"
    }
  ];

  const techStack = [
    "React.js + TypeScript",
    "NASA Earth Engine API",
    "Leaflet.js Mapping",
    "MODIS Satellite Data",
    "Sentinel-2 Imagery",
    "OpenStreetMap Integration"
  ];

  const impact = [
    { icon: Users, value: "10M+", label: "Citizens Benefited" },
    { icon: MapPin, value: "250+", label: "Cities Analyzed" },
    { icon: Globe, value: "15", label: "Countries Supported" },
    { icon: Zap, value: "24/7", label: "Real-time Monitoring" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Core Features</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Comprehensive Urban Health Analysis
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powered by NASA Earth Observation Data and cutting-edge geospatial analysis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <feature.icon className={`h-8 w-8 ${feature.color} mb-2`} />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Technology</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Built with Modern Web Technologies
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our platform leverages the latest in web development and satellite data processing 
                to deliver real-time insights for urban planners and city officials.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {techStack.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="glass">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4">
                <Button asChild className="gap-2">
                  <Link to="/dashboard">
                    <BarChart3 className="h-4 w-4" />
                    View Dashboard
                  </Link>
                </Button>
                <Button variant="outline" className="gap-2">
                  <Github className="h-4 w-4" />
                  Source Code
                </Button>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-6">Data Sources</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-heat-warm/10">
                  <div className="w-3 h-3 bg-heat-warm rounded-full" />
                  <div>
                    <div className="font-medium">MODIS Temperature Data</div>
                    <div className="text-sm text-muted-foreground">1km daily resolution</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-forest/10">
                  <div className="w-3 h-3 bg-forest rounded-full" />
                  <div>
                    <div className="font-medium">Sentinel-2 NDVI</div>
                    <div className="text-sm text-muted-foreground">10m vegetation index</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-ocean/10">
                  <div className="w-3 h-3 bg-ocean rounded-full" />
                  <div>
                    <div className="font-medium">ECOSTRESS Thermal</div>
                    <div className="text-sm text-muted-foreground">70m ISS data</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white">Impact</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Making Cities Healthier Worldwide
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
            Our platform is helping urban planners and officials make data-driven decisions 
            for cooler, healthier, and more sustainable cities.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {impact.map((stat, index) => (
              <div key={index} className="glass text-center p-6 rounded-xl bg-white/10">
                <stat.icon className="h-8 w-8 text-white mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto glass-card p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start visualizing your city's environmental health with our interactive dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/dashboard">
                  <MapPin className="h-5 w-5" />
                  Launch Dashboard
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-earth text-white">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">Healthy City Dashboard</div>
                <div className="text-sm text-muted-foreground">Team Byte Force • NASA Space Apps 2025</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Built with 💚 for sustainable urban development
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
