import React, { useState, useEffect } from 'react'
import AppRoutes from './routes'
import SplashScreen from '@/shared/components/SplashScreen.jsx'

function App() {
  const [showSplash, setShowSplash] = useState(() => {
    // Check if splash was already shown (persistent)
    const splashShown = localStorage.getItem('Tiffinji_splash_shown')
    return !splashShown
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSplashFinish = () => {
    localStorage.setItem('Tiffinji_splash_shown', 'true')
    setShowSplash(false)
  }

  // Normal Loading Spinner (if needed in future)
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white dark:bg-[#0a0a0a]">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 border-4 border-[#D51F10]/10 rounded-full" />
          <div className="absolute inset-0 border-4 border-t-[#D51F10] rounded-full animate-spin" />
        </div>
        <h1 className="text-2xl font-black text-[#D51F10] italic uppercase tracking-tighter mt-6">Tiffinji</h1>
      </div>
    )
  }

  return (
    <>
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <AppRoutes />
    </>
  )
}

export default App
