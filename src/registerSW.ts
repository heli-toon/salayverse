import { registerSW } from "virtual:pwa-register"

// This is the service worker registration function
export function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    // Register the service worker
    const updateSW = registerSW({
      onNeedRefresh() {
        // Show a prompt to the user to refresh the app
        if (confirm("New content available. Reload?")) {
          updateSW(true)
        }
      },
      onOfflineReady() {
        console.log("App ready to work offline")
      },
    })
  }
}
