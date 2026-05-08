function Timeline({ timeline }) {
  return (
    <div className="space-y-4">
      {timeline.map((item, index) => (
        <div key={item.key} className="flex gap-3">
          <div className="flex flex-col items-center">
            <span className="h-3 w-3 rounded-full bg-orange-500" />
            {index < timeline.length - 1 && <span className="mt-1 h-8 w-px bg-orange-200" />}
          </div>
          <div>
            <p className="text-sm font-medium text-zinc-700">{item.label}</p>
            <p className="text-xs text-zinc-500">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline
