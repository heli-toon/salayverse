import type React from "react"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface SearchBarProps {
  onSearch: (query: string) => void
  initialQuery?: string
}

const SearchBar = ({ onSearch, initialQuery = "" }: SearchBarProps) => {
  const [query, setQuery] = useState(initialQuery)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
    navigate("/search")
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search apps..."
          className="w-full bg-gray-800 text-white border border-purple-700 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        />
        <button type="submit" className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
          <i className="bi bi-search"></i>
        </button>
        {query && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
            onClick={() => setQuery("")}
          >
            <i className="bi bi-x-circle"></i>
          </button>
        )}
      </div>
    </form>
  )
}

export default SearchBar
