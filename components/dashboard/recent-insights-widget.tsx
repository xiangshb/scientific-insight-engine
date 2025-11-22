"use client"

import { Lightbulb, ArrowRight } from "lucide-react"

const insights = [
  {
    title: "Novel Protein Folding Pattern",
    domain: "Bio-Chemistry",
    confidence: 0.92,
    type: "Structural",
    desc: "Identified a recurring helical structure in non-coding regions.",
  },
  {
    title: "Quantum Coherence Correlation",
    domain: "Physics",
    confidence: 0.88,
    type: "Causal",
    desc: "Potential causal link between low-temp coherence and lattice vibration.",
  },
  {
    title: "Algorithmic Efficiency Jump",
    domain: "Computer Science",
    confidence: 0.95,
    type: "Functional",
    desc: "New sorting optimization reducing complexity in sparse datasets.",
  },
]

export function RecentInsightsWidget() {
  return (
    <div className="space-y-6 pt-2">
      {insights.map((insight, i) => (
        <div key={i} className="flex gap-4 items-start pb-4 border-b last:border-0">
          <div className="mt-1 bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full">
            <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm">{insight.title}</h4>
              <span className="text-xs font-mono text-slate-500">Conf: {Math.round(insight.confidence * 100)}%</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">{insight.desc}</p>
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">{insight.domain}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                {insight.type}
              </span>
            </div>
          </div>
        </div>
      ))}
      <button className="w-full py-2 text-xs font-medium text-center text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 flex items-center justify-center gap-1">
        View All Insights <ArrowRight className="h-3 w-3" />
      </button>
    </div>
  )
}
