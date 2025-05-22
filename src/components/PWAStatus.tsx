import { useState, useEffect } from "react"

const PWAStatus = () => {
  const [showOfflineReady, setShowOfflineReady] = useState(false)
  const [showUpdateAvailable, setShowUpdateAvailable] = useState(false)

  useEffect(() => {
    // Listen for custom events from the service worker
    window.addEventListener("sw-offline-ready", () => {
      setShowOfflineReady(true)
      setTimeout(() => setShowOfflineReady(false), 5000) // Hide after 5 seconds
    })

    window.addEventListener("sw-update-available", () => {
      setShowUpdateAvailable(true)
    })

    return () => {
      window.removeEventListener("sw-offline-ready", () => {})
      window.removeEventListener("sw-update-available", () => {})
    }
  }, [])

  const handleUpdate = () => {
    window.location.reload()
  }

  if (!showOfflineReady && !showUpdateAvailable) {
    return null
  }

  return (
    <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:w-80 bg-gray-900 rounded-lg shadow-lg border border-purple-800 p-4 z-50">
      {showOfflineReady && (
        <div className="flex items-center">
          <i className="bi bi-check-circle-fill text-green-500 text-xl mr-3"></i>
          <div>
            <p className="text-white">App ready to work offline</p>
          </div>
          <button onClick={() => setShowOfflineReady(false)} className="ml-auto text-gray-400 hover:text-white">
            <i className="bi bi-x text-xl"></i>
          </button>
        </div>
      )}

      {showUpdateAvailable && (
        <div>
          <div className="flex items-center">
            <i className="bi bi-arrow-clockwise text-purple-500 text-xl mr-3"></i>
            <div>
              <p className="text-white">Update available</p>
              <p className="text-sm text-gray-300">Reload to update the app</p>
            </div>
            <button onClick={() => setShowUpdateAvailable(false)} className="ml-auto text-gray-400 hover:text-white">
              <i className="bi bi-x text-xl"></i>
            </button>
          </div>
          <div className="mt-3 flex justify-end">
            <button
              onClick={handleUpdate}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Update Now
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PWAStatus
