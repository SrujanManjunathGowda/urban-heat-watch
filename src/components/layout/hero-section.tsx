import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  MapPin, 
  Thermometer, 
  Trees, 
  Droplets,
  Play
} from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    { value: "32.5°C", label: "Urban Heat Island", icon: Thermometer, color: "text-heat-hot" },
    { value: "65%", label: "Green Cover", icon: Trees, color: "text-forest" },
    { value: "12%", label: "Flood Risk Areas", icon: Droplets, color: "text-ocean" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-forest rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-ocean rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-heat-warm rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge variant="secondary" className="glass px-4 py-2 text-sm">
              🚀 NASA Space Apps Challenge 2025
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-earth bg-clip-text text-transparent">
                  Healthy City
                </span>
                <br />
                <span className="text-foreground">Dashboard</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Visualize urban heat islands, flood risks, and green spaces using NASA Earth Observation Data. 
                Make data-driven decisions for healthier, more sustainable cities.
              </p>
            </div>

            {/* Key Features */}
            <div className="flex flex-wrap gap-3">
              {[
                "🌡️ Heat Island Mapping",
                "🌊 Flood Risk Analysis", 
                "🌱 Green Space Planning",
                "🌬️ Air Quality Monitoring"
              ].map((feature, index) => (
                <Badge key={index} variant="outline" className="glass text-sm">
                  {feature}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="gap-2 bg-gradient-earth hover:opacity-90">
                <Link to="/dashboard">
                  <MapPin className="h-5 w-5" />
                  Explore Dashboard
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 glass">
                <Play className="h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Team Credit */}
            <div className="text-sm text-muted-foreground">
              Built by <span className="font-semibold text-primary">Team Byte Force</span> • 
              Powered by NASA Earth Observation Data
            </div>
          </div>

          {/* Right Column - Interactive Visualization */}
          <div className="relative">
            {/* Main Dashboard Preview */}
            <div className="glass-card p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Live City Data</h3>
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="text-xs text-muted-foreground">Real-time</span>
                </div>
              </div>

              {/* Animated Stats */}
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg transition-all duration-500 ${
                      currentStat === index
                        ? "glass border-primary/30 scale-105"
                        : "bg-muted/20"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <stat.icon className={`h-5 w-5 ${stat.color}`} />
                        <span className="font-medium">{stat.label}</span>
                      </div>
                      <span className="text-xl font-bold">{stat.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini Heat Map */}
              <div className="relative h-32 bg-gradient-to-r from-heat-cool via-heat-warm to-heat-hot rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/10" />
                <div className="absolute top-2 left-2 text-xs text-white/80">Temperature Distribution</div>
                <div className="absolute bottom-2 right-2 flex gap-1">
                  {[1, 2, 3, 4].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-white/60 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.5}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-forest rounded-full opacity-60 animate-float" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-ocean rounded-full opacity-60 animate-float" style={{ animationDelay: "1.5s" }} />
          </div>
        </div>
      </div>
    </div>
  );
}