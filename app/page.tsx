import { Activity, BrainCircuit, GitBranch, FileText, Zap, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AgentStatusWidget } from "@/components/dashboard/agent-status-widget"
import { RecentInsightsWidget } from "@/components/dashboard/recent-insights-widget"
import { NetworkHealthWidget } from "@/components/dashboard/network-health-widget"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Scientific Insight Platform</h2>
          <p className="text-muted-foreground">AI-driven autonomous research system for breakthrough discoveries</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
            <Activity className="mr-1 h-3 w-3" />
            System Active
          </Badge>
          <span className="text-sm text-muted-foreground">L3 Autonomous</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Agents</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground">+12 from last hour</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Knowledge Nodes</CardTitle>
            <BrainCircuit className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4M</div>
            <p className="text-xs text-muted-foreground">+50k new entities</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hypotheses Generated</CardTitle>
            <GitBranch className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">843</div>
            <p className="text-xs text-muted-foreground">12 awaiting validation</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Papers Analyzed</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15.2k</div>
            <p className="text-xs text-muted-foreground">~1000/hr processing rate</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Research Trajectory (Wisdom Spiral)</CardTitle>
            <CardDescription>Current progress across exploration, verification, and fusion cycles.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <RecentInsightsWidget />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Agent Ecosystem Health</CardTitle>
            <CardDescription>Status and load distribution of intelligent agents.</CardDescription>
          </CardHeader>
          <CardContent>
            <AgentStatusWidget />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Knowledge Network Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <NetworkHealthWidget />
          </CardContent>
        </Card>
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Active Research Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Cross-domain Pattern Mining: Bio-Physics", status: "Running", progress: 68 },
                { title: "Hypothesis Validation: Protein Folding Dynamics", status: "Analyzing", progress: 42 },
                { title: "Literature Synthesis: Quantum Computing Applications", status: "Running", progress: 85 },
              ].map((task, i) => (
                <div key={i} className="flex items-center justify-between p-4 border rounded-lg bg-card">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="bg-primary/10 p-2 rounded">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{task.title}</h4>
                      <div className="flex items-center gap-2 mt-2">
                        <p className="text-xs text-muted-foreground">Started 2h ago • Agent Cluster #{i + 3}</p>
                        <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden max-w-xs">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${task.progress}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {task.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
