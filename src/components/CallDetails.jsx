import Timeline from './Timeline'

function CallDetails({ call, timeline }) {
  return (
    <div className="space-y-4">
      <div className="glass rounded-2xl p-4">
        <h3 className="mb-3 text-sm font-semibold text-zinc-700">Timeline</h3>
        <Timeline timeline={timeline} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          ['From', call.from],
          ['To', call.to],
          ['Direction', call.direction],
          ['Type', call.type],
          ['Call ID', call.id],
          ['Duration', call.duration],
          ['Total Cost', call.cost],
        ].map(([label, value]) => (
          <div key={label} className="glass rounded-2xl p-3">
            <p className="text-xs text-zinc-500">{label}</p>
            <p className="mt-1 text-sm font-medium text-zinc-800">{value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CallDetails
