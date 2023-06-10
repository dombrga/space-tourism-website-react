import { debounce } from "@/utils/utils"
import { useState, useEffect } from "react"

function useWindowSize(): [number, number] {
  const [windowSize, setWindowWidth] = useState<[number, number]>([window.innerWidth, window.innerHeight])

  useEffect(() => {
    function updateWindowWidth() {
      setWindowWidth([window.innerWidth, window.innerHeight])
    }

    const debUpdateWinSize = debounce(updateWindowWidth, 200)
    window.addEventListener('resize', debUpdateWinSize)

    return () => {
      window.removeEventListener('resize', debUpdateWinSize)
    }
  }, [])

  return windowSize
}


export {
  useWindowSize
}