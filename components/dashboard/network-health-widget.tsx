"use client"

export function NetworkHealthWidget() {
  return (
    <div className="flex flex-col items-center justify-center h-[200px] text-center space-y-4">
      <div className="relative h-32 w-32 flex items-center justify-center">
        {/* Simple CSS illustration of a network */}
        <div className="absolute inset-0 rounded-full border-4 border-slate-100 dark:border-slate-800"></div>
        <div className="absolute inset-0 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
        <div className="flex flex-col">
          <span className="text-2xl font-bold">98.5%</span>
          <span className="text-[10px] text-slate-400">Consistency</span>
        </div>
      </div>
      <p className="text-xs text-slate-500">15 Conflicts Resolved in last 24h</p>
    </div>
  )
}
