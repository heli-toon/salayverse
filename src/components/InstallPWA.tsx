import type React from "react"

import { useState, useEffect } from "react"

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false)
  const [promptInstall, setPromptInstall] = useState<any>(null)
  const [isInstalled, setIsInstalled] = useState(false)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault()
      setSupportsPWA(true)
      setPromptInstall(e)
      setShowPrompt(true)
    }

    window.addEventListener("beforeinstallprompt", handler)

    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true)
    }

    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  const handleInstallClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!promptInstall) {
      return
    }
    promptInstall.prompt()
    promptInstall.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === "accepted") {
        setIsInstalled(true)
      }
      setPromptInstall(null)
      setShowPrompt(false)
    })
  }

  const handleClose = () => {
    setShowPrompt(false)
  }

  if (!supportsPWA || isInstalled || !showPrompt) {
    return null
  }

  return (
    <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:w-80 bg-gray-900 rounded-lg shadow-lg border border-purple-800 p-4 z-50">
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <i className="bi bi-rocket text-2xl text-purple-500 mr-3"></i>
          <div>
            <h3 className="font-medium text-white">Install Salayverse</h3>
            <p className="text-sm text-gray-300">Add to home screen for quick access</p>
          </div>
        </div>
        <button onClick={handleClose} className="text-gray-400 hover:text-white">
          <i className="bi bi-x text-xl"></i>
        </button>
      </div>
      <div className="mt-3 flex justify-end">
        <button
          onClick={handleInstallClick}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Install App
        </button>
      </div>
    </div>
  )
}

export default InstallPWA
