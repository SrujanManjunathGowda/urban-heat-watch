import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Leaf, MapPin, BarChart3, Settings, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "Heat Map", href: "/heat-map", icon: MapPin },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const NavLink = ({ href, children, className, ...props }: any) => (
    <Link
      to={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        location.pathname === href ? "text-primary" : "text-muted-foreground",
        className
      )}
      onClick={() => setIsOpen(false)}
      {...props}
    >
      {children}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 glass backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-earth text-white">
            <Leaf className="h-5 w-5" />
          </div>
          <span className="font-bold text-lg bg-gradient-earth bg-clip-text text-transparent">
            Healthy City
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="mx-6 flex items-center space-x-6 lg:space-x-8 hidden md:flex">
          {navigation.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center space-x-4">
          {/* Auth Button */}
          <Button variant="outline" size="sm" className="hidden md:flex">
            <LogIn className="h-4 w-4 mr-2" />
            Sign In
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass-card border-l">
              <div className="flex flex-col space-y-4 mt-6">
                {navigation.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-2 text-base"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </NavLink>
                ))}
                <Button variant="outline" className="mt-4">
                  <LogIn className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}