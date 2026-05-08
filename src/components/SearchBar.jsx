import { Filter, Search } from 'lucide-react'

function SearchBar({ query, setQuery }) {
  return (
    <div className="flex gap-2">
      <div className="focus-ring flex flex-1 items-center rounded-2xl border border-orange-100 bg-white px-3">
        <Search size={16} className="text-orange-500" />
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by caller, receiver or call ID..." className="w-full bg-transparent px-3 py-3 text-sm text-zinc-700 outline-none" />
      </div>
      <button className="rounded-2xl border border-orange-200 bg-white px-4 text-orange-500 transition hover:scale-105 hover:bg-orange-50">
        <Filter size={18} />
      </button>
    </div>
  )
}

export default SearchBar
