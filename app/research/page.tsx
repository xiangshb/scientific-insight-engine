import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GitBranch, Target, TrendingUp, CheckCircle2, Clock, Zap } from "lucide-react"

export default function ResearchPlannerPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Autonomous Research Planner</h2>
          <p className="text-muted-foreground">Generate and optimize research pathways for breakthrough discoveries</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Target className="mr-2 h-4 w-4" />
          New Research Plan
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Plans</CardTitle>
            <GitBranch className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">3 completed this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Discovery Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2 days</div>
            <p className="text-xs text-muted-foreground">-18% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">Hypothesis validation rate</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Research Path Optimization</CardTitle>
          <CardDescription>AI-generated pathways for current research objectives</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {[
            {
              title: "Novel Superconductor Material Discovery",
              strategy: "Breadth-First Exploration",
              phases: [
                "Literature Survey",
                "Pattern Analysis",
                "Hypothesis Generation",
                "Experimental Design",
                "Validation",
              ],
              currentPhase: 2,
              expectedValue: 0.82,
              risk: "Medium",
            },
            {
              title: "Protein Folding Prediction Enhancement",
              strategy: "Depth-First with Backtracking",
              phases: ["Domain Analysis", "Algorithm Design", "Model Training", "Benchmark Testing", "Optimization"],
              currentPhase: 3,
              expectedValue: 0.75,
              risk: "Low",
            },
          ].map((plan, idx) => (
            <div key={idx} className="p-6 border rounded-lg bg-card space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">{plan.title}</h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      <Zap className="mr-1 h-3 w-3" />
                      {plan.strategy}
                    </Badge>
                    <Badge variant={plan.risk === "Low" ? "default" : "secondary"} className="text-xs">
                      {plan.risk} Risk
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      Expected Discovery Value: {(plan.expectedValue * 100).toFixed(0)}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs text-muted-foreground mb-2">Research Phases</div>
                <div className="flex items-center gap-2">
                  {plan.phases.map((phase, phaseIdx) => (
                    <div key={phaseIdx} className="flex items-center flex-1">
                      <div
                        className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg flex-1 ${
                          phaseIdx < plan.currentPhase
                            ? "bg-primary/10 text-primary"
                            : phaseIdx === plan.currentPhase
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {phaseIdx < plan.currentPhase && <CheckCircle2 className="h-3 w-3" />}
                        <span className="text-xs font-medium">{phase}</span>
                      </div>
                      {phaseIdx < plan.phases.length - 1 && <div className="w-4 h-0.5 bg-border mx-1"></div>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button variant="ghost" size="sm">
                  Adjust Strategy
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
