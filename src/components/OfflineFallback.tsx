import type React from "react"

const OfflineFallback: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <div className="text-center max-w-md">
        <i className="bi bi-wifi-off text-6xl text-purple-500 mb-4"></i>
        <h1 className="text-2xl font-bold mb-2">You're offline</h1>
        <p className="text-gray-400 mb-6">
          It looks like you're not connected to the internet. Check your connection and try again.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}

export default OfflineFallback
