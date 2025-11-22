import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sparkles, ArrowRight, Search } from "lucide-react"

export default function InsightEnginePage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Scientific Insight Engine</h2>
          <p className="text-slate-500">Generate cross-domain insights and novel hypotheses.</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700">
          <Sparkles className="mr-2 h-4 w-4" />
          New Discovery Session
        </Button>
      </div>

      <Card className="bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/20 dark:to-slate-900 border-indigo-100 dark:border-indigo-900">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 block">Research Domain / Query</label>
              <div className="flex gap-2">
                <Input
                  placeholder="e.g. 'Application of transformer models in genomics' or 'Room temperature superconductivity materials'"
                  className="bg-white dark:bg-slate-950"
                />
                <Button variant="outline">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="patterns" className="space-y-4">
        <TabsList>
          <TabsTrigger value="patterns">Pattern Mining</TabsTrigger>
          <TabsTrigger value="analogies">Analogical Reasoning</TabsTrigger>
          <TabsTrigger value="hypotheses">Generated Hypotheses</TabsTrigger>
          <TabsTrigger value="validation">Validation Status</TabsTrigger>
        </TabsList>

        <TabsContent value="patterns" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Cross-Domain Patterns</CardTitle>
              <CardDescription>Recurring structures and functional similarities found across domains.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-indigo-600 group-hover:underline">Inverse-Square Law Variants</h4>
                    <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded">Structural</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Detected mathematical similarity between electrostatic force distribution and localized economic
                    influence models.
                  </p>
                  <div className="mt-3 flex gap-2 text-xs text-slate-400">
                    <span>Source: Physics</span>
                    <ArrowRight className="h-3 w-3" />
                    <span>Target: Economics</span>
                  </div>
                </div>

                <div className="p-4 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-indigo-600 group-hover:underline">Self-Organizing Criticality</h4>
                    <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded">Behavioral</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Avalanche dynamics in neural firing patterns match tectonic shift predictions.
                  </p>
                  <div className="mt-3 flex gap-2 text-xs text-slate-400">
                    <span>Source: Neuroscience</span>
                    <ArrowRight className="h-3 w-3" />
                    <span>Target: Geophysics</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
