"use client"

import { Badge } from "@/components/ui/badge"

const agents = [
  { name: "Literature Parser", count: 15, status: "active", load: 85 },
  { name: "Knowledge Extractor", count: 12, status: "active", load: 92 },
  { name: "Hypothesis Builder", count: 15, status: "idle", load: 12 },
  { name: "Exp. Designer", count: 10, status: "active", load: 45 },
  { name: "Code Generator", count: 20, status: "active", load: 78 },
  { name: "Data Miner", count: 15, status: "maintenance", load: 0 },
]

export function AgentStatusWidget() {
  return (
    <div className="space-y-6">
      {agents.map((agent) => (
        <div key={agent.name} className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">{agent.name}</p>
            <p className="text-xs text-muted-foreground">{agent.count} Instances</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden dark:bg-slate-800">
              <div
                className={`h-full ${agent.status === "active" ? "bg-indigo-500" : agent.status === "maintenance" ? "bg-yellow-500" : "bg-slate-300"}`}
                style={{ width: `${agent.load}%` }}
              />
            </div>
            <Badge
              variant={agent.status === "active" ? "default" : "secondary"}
              className={agent.status === "active" ? "bg-green-500" : ""}
            >
              {agent.status}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  )
}
