import { useEffect, useState } from "react"

export const useSize = (initSize: string) => {
  const [size, setSize] = useState(initSize)
  useEffect(() => {
    const interval = setInterval(() => {
      setSize(JSON.stringify(JSON.parse(size) + 1))
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [size, setSize])
  return { size, setSize }
}
