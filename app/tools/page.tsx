import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Wrench,
  Search,
  TrendingUp,
  Zap,
  Database,
  BarChart3,
  Code,
  Microscope,
  Palette,
  GitBranch,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const toolCategories = [
  {
    name: "Compute Engines",
    count: 50,
    icon: Zap,
    tools: ["Numerical Computing", "Symbolic Computing", "GPU Acceleration"],
  },
  {
    name: "Literature Tools",
    count: 30,
    icon: Search,
    tools: ["Literature Search", "Citation Analysis", "PDF Processing"],
  },
  { name: "Machine Learning", count: 100, icon: TrendingUp, tools: ["Training", "Inference", "Evaluation", "AutoML"] },
  {
    name: "Data Processing",
    count: 80,
    icon: Database,
    tools: ["Data Cleaning", "Transformation", "Feature Engineering"],
  },
  {
    name: "Visualization",
    count: 40,
    icon: Palette,
    tools: ["2D/3D Charts", "Interactive Graphs", "Network Visualization"],
  },
  {
    name: "Experiment Automation",
    count: 20,
    icon: Microscope,
    tools: ["Experiment Control", "Data Acquisition", "Logging"],
  },
  { name: "Simulation", count: 30, icon: GitBranch, tools: ["Physics Simulation", "Bio Modeling", "Monte Carlo"] },
  { name: "Programming", count: 60, icon: Code, tools: ["Code Generation", "Debugging", "Profiling", "Testing"] },
  { name: "Data Analysis", count: 50, icon: BarChart3, tools: ["Statistical Analysis", "Time Series", "Clustering"] },
]

export default function ToolsPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Intelligent Tool Ecosystem</h2>
          <p className="text-muted-foreground">470+ integrated tools for automated scientific research</p>
        </div>
        <Button variant="outline">
          <Wrench className="mr-2 h-4 w-4" />
          Discover Tools
        </Button>
      </div>

      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 block">Search Tools by Function</label>
              <div className="flex gap-2">
                <Input
                  placeholder="e.g. 'protein structure visualization' or 'quantum chemistry calculation'"
                  className="bg-background"
                />
                <Button>
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                AI-powered tool discovery will find the optimal tool chain for your task
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {toolCategories.map((category) => {
          const Icon = category.icon
          return (
            <Card key={category.name} className="hover:shadow-md transition-shadow cursor-pointer group">
              <CardHeader className="flex flex-row items-center justify-between pb-3 space-y-0">
                <CardTitle className="text-base font-bold group-hover:text-primary transition-colors">
                  {category.name}
                </CardTitle>
                <Icon className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="secondary" className="text-xs">
                    {category.count} Tools
                  </Badge>

                  <div className="space-y-1">
                    {category.tools.map((tool) => (
                      <div
                        key={tool}
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors py-1"
                      >
                        • {tool}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Tool Usage</CardTitle>
          <CardDescription>Most frequently used tools in active research tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "PyTorch Training Pipeline", category: "Machine Learning", usage: 245, trend: "+12%" },
              { name: "NetworkX Graph Analysis", category: "Data Analysis", usage: 189, trend: "+8%" },
              { name: "Matplotlib Visualization", category: "Visualization", usage: 156, trend: "+5%" },
              { name: "Semantic Scholar API", category: "Literature Tools", usage: 143, trend: "+18%" },
            ].map((tool) => (
              <div key={tool.name} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-4 flex-1">
                  <Wrench className="h-4 w-4 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{tool.name}</p>
                    <p className="text-xs text-muted-foreground">{tool.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="text-xs">
                    {tool.usage} uses
                  </Badge>
                  <span className="text-xs text-green-600 font-medium">{tool.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
