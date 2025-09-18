import { Navbar } from "@/components/layout/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  MapPin, 
  Bell, 
  Database, 
  Palette,
  Key,
  Users,
  Shield
} from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Settings className="h-8 w-8 text-primary" />
            Settings
          </h1>
          <p className="text-muted-foreground mt-2">
            Configure your dashboard preferences and data sources
          </p>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="data">Data Sources</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="access">Access Control</TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Location Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Enter city name" defaultValue="San Francisco" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="region">Region/State</Label>
                    <Input id="region" placeholder="Enter region" defaultValue="California" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="coordinates">Coordinates</Label>
                    <Input id="coordinates" placeholder="Lat, Lng" defaultValue="37.7749, -122.4194" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="pst">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pst">Pacific Standard Time</SelectItem>
                        <SelectItem value="est">Eastern Standard Time</SelectItem>
                        <SelectItem value="cst">Central Standard Time</SelectItem>
                        <SelectItem value="mst">Mountain Standard Time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="auto-location" />
                  <Label htmlFor="auto-location">Auto-detect location</Label>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Dashboard Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="update-frequency">Data Update Frequency</Label>
                  <Select defaultValue="hourly">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="realtime">Real-time</SelectItem>
                      <SelectItem value="hourly">Every Hour</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="temp-unit">Temperature Unit</Label>
                  <Select defaultValue="celsius">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="celsius">Celsius (°C)</SelectItem>
                      <SelectItem value="fahrenheit">Fahrenheit (°F)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="auto-refresh" defaultChecked />
                  <Label htmlFor="auto-refresh">Auto-refresh data</Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Data Sources */}
          <TabsContent value="data" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  NASA Earth Observation Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">MODIS Temperature Data</div>
                      <div className="text-sm text-muted-foreground">Terra/Aqua satellites • 1km resolution</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Active</Badge>
                      <Switch defaultChecked />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">Sentinel-2 NDVI</div>
                      <div className="text-sm text-muted-foreground">ESA satellites • 10m resolution</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Active</Badge>
                      <Switch defaultChecked />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">ECOSTRESS Thermal</div>
                      <div className="text-sm text-muted-foreground">ISS instrument • 70m resolution</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Optional</Badge>
                      <Switch />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">Landsat 8/9</div>
                      <div className="text-sm text-muted-foreground">USGS/NASA • 30m resolution</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Active</Badge>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>API Keys</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="gee-key">Google Earth Engine API Key</Label>
                  <div className="flex gap-2">
                    <Input id="gee-key" type="password" placeholder="Enter API key" />
                    <Button variant="outline">Test</Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nasa-key">NASA EarthData Login</Label>
                  <div className="flex gap-2">
                    <Input id="nasa-key" type="password" placeholder="Enter credentials" />
                    <Button variant="outline">Verify</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Alert Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Heat Wave Alerts</div>
                      <div className="text-sm text-muted-foreground">When temperature exceeds threshold</div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Flood Risk Warnings</div>
                      <div className="text-sm text-muted-foreground">High precipitation or water level alerts</div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Air Quality Updates</div>
                      <div className="text-sm text-muted-foreground">When AQI enters unhealthy range</div>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Data Update Notifications</div>
                      <div className="text-sm text-muted-foreground">When new satellite data is available</div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Notification Channels</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (SMS)</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="webhook">Webhook URL</Label>
                  <Input id="webhook" type="url" placeholder="https://your-webhook.com/alerts" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appearance */}
          <TabsContent value="appearance" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Theme Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Color Theme</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="p-3 border rounded-lg cursor-pointer hover:bg-muted/50">
                      <div className="w-full h-6 bg-gradient-earth rounded mb-2"></div>
                      <div className="text-sm text-center">Earth (Default)</div>
                    </div>
                    <div className="p-3 border rounded-lg cursor-pointer hover:bg-muted/50">
                      <div className="w-full h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded mb-2"></div>
                      <div className="text-sm text-center">Ocean</div>
                    </div>
                    <div className="p-3 border rounded-lg cursor-pointer hover:bg-muted/50">
                      <div className="w-full h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded mb-2"></div>
                      <div className="text-sm text-center">Forest</div>
                    </div>
                    <div className="p-3 border rounded-lg cursor-pointer hover:bg-muted/50">
                      <div className="w-full h-6 bg-gradient-to-r from-gray-500 to-slate-500 rounded mb-2"></div>
                      <div className="text-sm text-center">Minimal</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Dark Mode</div>
                    <div className="text-sm text-muted-foreground">Switch to dark theme</div>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Glassmorphism Effects</div>
                    <div className="text-sm text-muted-foreground">Translucent card backgrounds</div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Animations</div>
                    <div className="text-sm text-muted-foreground">Enable UI animations and transitions</div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Access Control */}
          <TabsContent value="access" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Two-Factor Authentication</div>
                    <div className="text-sm text-muted-foreground">Add extra security to your account</div>
                  </div>
                  <Button variant="outline" size="sm">Setup</Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Session Timeout</div>
                    <div className="text-sm text-muted-foreground">Automatically log out after inactivity</div>
                  </div>
                  <Select defaultValue="30min">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15min">15 minutes</SelectItem>
                      <SelectItem value="30min">30 minutes</SelectItem>
                      <SelectItem value="1hour">1 hour</SelectItem>
                      <SelectItem value="4hours">4 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Team Access
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">admin@byteteam.dev</div>
                      <div className="text-sm text-muted-foreground">Administrator</div>
                    </div>
                    <Badge>Owner</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">planner@city.gov</div>
                      <div className="text-sm text-muted-foreground">Urban Planner</div>
                    </div>
                    <Badge variant="secondary">Editor</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">analyst@env.org</div>
                      <div className="text-sm text-muted-foreground">Environmental Analyst</div>
                    </div>
                    <Badge variant="outline">Viewer</Badge>
                  </div>
                </div>

                <Button className="w-full">Invite Team Member</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Save Changes */}
        <div className="flex justify-end gap-4 pt-6 border-t">
          <Button variant="outline">Reset to Defaults</Button>
          <Button>Save Changes</Button>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;