import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  variant?: "default" | "heat" | "forest" | "ocean" | "warning";
  className?: string;
}

export function DashboardCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  trendValue,
  variant = "default",
  className,
}: DashboardCardProps) {
  const variantStyles = {
    default: "glass-card",
    heat: "glass-card border-heat-hot/30 bg-gradient-to-br from-heat-warm/10 to-heat-hot/10",
    forest: "glass-card border-forest/30 bg-gradient-to-br from-forest-light/50 to-forest/20",
    ocean: "glass-card border-ocean/30 bg-gradient-to-br from-ocean-light/50 to-ocean/20",
    warning: "glass-card border-warning/30 bg-gradient-to-br from-warning/10 to-destructive/10",
  };

  const iconStyles = {
    default: "text-muted-foreground",
    heat: "text-heat-hot",
    forest: "text-forest",
    ocean: "text-ocean",
    warning: "text-warning",
  };

  const trendStyles = {
    up: "text-success",
    down: "text-destructive",
    neutral: "text-muted-foreground",
  };

  return (
    <Card className={cn(variantStyles[variant], className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className={cn("h-4 w-4", iconStyles[variant])} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
        {trend && trendValue && (
          <div className="flex items-center pt-1">
            <span className={cn("text-xs font-medium", trendStyles[trend])}>
              {trend === "up" ? "↗" : trend === "down" ? "↘" : "→"} {trendValue}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}