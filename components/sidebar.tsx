"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Network, Bot, Microscope, Database, BrainCircuit, Wrench } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Insight Engine", href: "/insight-engine", icon: BrainCircuit },
  { name: "Agent Ecosystem", href: "/agents", icon: Bot },
  { name: "Knowledge Network", href: "/knowledge", icon: Network },
  { name: "Research Planner", href: "/research", icon: Microscope },
  { name: "Tool Ecosystem", href: "/tools", icon: Wrench },
  { name: "Data Infrastructure", href: "/data", icon: Database },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-card md:flex md:w-64 md:flex-col">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <BrainCircuit className="h-6 w-6" />
          <span>SciInsight AI</span>
        </Link>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
        <nav className="mt-5 flex-1 space-y-1 px-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  "group flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors",
                )}
              >
                <item.icon
                  className={cn(
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground",
                    "mr-3 h-5 w-5 flex-shrink-0",
                  )}
                />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>
      <div className="border-t p-4">
        <div className="flex items-center gap-3 rounded-lg bg-muted p-3">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
            A
          </div>
          <div className="text-sm">
            <p className="font-medium">Admin User</p>
            <p className="text-muted-foreground text-xs">Lead Scientist</p>
          </div>
        </div>
      </div>
    </div>
  )
}
