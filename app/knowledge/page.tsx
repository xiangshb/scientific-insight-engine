import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Share2, Layers, ZoomIn } from "lucide-react"

export default function KnowledgePage() {
  return (
    <div className="p-8 h-full flex flex-col">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Knowledge Network</h2>
          <p className="text-slate-500">
            Interactive visualization of the Relational Knowledge Graph and Concept Maps.
          </p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="flex gap-1 items-center">
            <Layers className="h-3 w-3" /> 5 Layers
          </Badge>
          <Badge variant="outline" className="flex gap-1 items-center">
            <Share2 className="h-3 w-3" /> 2.4M Nodes
          </Badge>
        </div>
      </div>

      <Card className="flex-1 overflow-hidden border-slate-200 dark:border-slate-800 flex flex-col">
        <CardHeader className="border-b bg-slate-50 dark:bg-slate-900 py-3">
          <div className="flex justify-between items-center">
            <CardTitle className="text-sm">Global Graph View</CardTitle>
            <div className="flex gap-2">
              <button className="p-1.5 hover:bg-white rounded shadow-sm transition-all">
                <ZoomIn className="h-4 w-4 text-slate-500" />
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1 relative bg-slate-950 p-0 overflow-hidden group cursor-move">
          {/* Simulation of a knowledge graph background */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-slate-950 to-slate-950"></div>

          {/* CSS Nodes */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]">
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] z-10"></div>
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-indigo-400 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-80 animate-pulse delay-75"></div>
            <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-emerald-400 rounded-full opacity-60"></div>

            {/* Connecting lines SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="75%" y2="66%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="25%" y1="25%" x2="33%" y2="75%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            </svg>
          </div>

          <div className="absolute bottom-4 left-4 p-4 bg-black/50 backdrop-blur rounded-lg border border-white/10 text-white max-w-xs">
            <h5 className="font-bold text-sm mb-1">Selected: Protein Folding</h5>
            <p className="text-xs text-slate-300">
              Connected to 14,203 entities across Biology, Chemistry, and Computer Science.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
