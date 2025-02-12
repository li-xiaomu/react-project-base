import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function useRouteChange(callback: any) {
  const location = useLocation()

  useEffect(() => {
    callback(location)
  }, [location, callback])
}

export default useRouteChange
