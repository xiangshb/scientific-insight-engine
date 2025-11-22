import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot } from "lucide-react"

// Based on the spec table
const agentTypes = [
  { name: "Literature Parser", count: 15, role: "Extract info from scientific texts", kpi: "1000 papers/hr" },
  { name: "Knowledge Extractor", count: 12, role: "Extract entities & relations", kpi: "95% accuracy" },
  { name: "Hypothesis Builder", count: 15, role: "Generate scientific hypotheses", kpi: "100+ hypotheses/hr" },
  { name: "Experiment Designer", count: 10, role: "Design verification experiments", kpi: "DAG modeling" },
  { name: "Code Writer", count: 20, role: "Auto-generate research code", kpi: "10k LOC/hr" },
  { name: "Data Miner", count: 15, role: "Discover hidden patterns", kpi: "Multi-dim analysis" },
]

export default function AgentsPage() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Agent Ecosystem</h2>
        <p className="text-slate-500">Manage and monitor the multi-agent collaboration network.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {agentTypes.map((agent) => (
          <Card key={agent.name} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-base font-bold">{agent.name}</CardTitle>
              <Bot className="h-5 w-5 text-indigo-500" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-slate-500">Role</span>
                <span className="text-xs font-medium text-right">{agent.role}</span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Load</span>
                    <span>{Math.floor(Math.random() * 40) + 40}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-500 rounded-full"
                      style={{ width: `${Math.floor(Math.random() * 40) + 40}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs">
                    {agent.count} Nodes
                  </Badge>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">{agent.kpi}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
