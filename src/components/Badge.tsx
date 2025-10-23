export function Badge({title} : {title: string}) {
  return (
    <div className="text-xs mb-2 inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-1.5 font-medium text-blue-400 ring-1 ring-inset ring-blue-500/30 backdrop-blur-sm transition hover:bg-blue-600/20">
      <span className="rounded-full bg-blue-400 animate-pulse"></span>
      {title}
    </div>
  )
}