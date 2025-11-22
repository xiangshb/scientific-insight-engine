import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, FileText, Code, BarChart3, Boxes } from "lucide-react"
import { Button } from "@/components/ui/button"

const dataResources = [
  {
    name: "Scientific Literature Database",
    type: "PostgreSQL",
    records: "15.2M papers",
    size: "2.4 TB",
    status: "Healthy",
    icon: FileText,
  },
  {
    name: "Code Repository",
    type: "Git + Object Storage",
    records: "45k repositories",
    size: "890 GB",
    status: "Healthy",
    icon: Code,
  },
  {
    name: "Experimental Data Lake",
    type: "Distributed FS",
    records: "1.2M datasets",
    size: "15.7 TB",
    status: "Healthy",
    icon: BarChart3,
  },
  {
    name: "Algorithm Model Registry",
    type: "Model Store",
    records: "3.5k models",
    size: "450 GB",
    status: "Healthy",
    icon: Boxes,
  },
]

export default function DataPage() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Data Infrastructure</h2>
        <p className="text-muted-foreground">Foundation layer for scientific knowledge and research assets</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Storage</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">19.4 TB</div>
            <p className="text-xs text-muted-foreground">+2.1 TB this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Query Throughput</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15k/s</div>
            <p className="text-xs text-muted-foreground">Avg queries per second</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Connections</CardTitle>
            <Boxes className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground">From 180 agents</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Quality</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.7%</div>
            <p className="text-xs text-muted-foreground">Validated records</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {dataResources.map((resource) => {
          const Icon = resource.icon
          return (
            <Card key={resource.name}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{resource.name}</CardTitle>
                      <CardDescription className="text-xs mt-1">{resource.type}</CardDescription>
                    </div>
                  </div>
                  <Badge variant={resource.status === "Healthy" ? "default" : "destructive"} className="text-xs">
                    {resource.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Records</p>
                    <p className="font-semibold">{resource.records}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Storage Size</p>
                    <p className="font-semibold">{resource.size}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    View Details
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    Optimize
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
