import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { checkAuth } from './features/auth/store/authSlice'
import Loader from './components/common/Loader'

function App() {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.auth)

  useEffect(() => {
    // Check if user is authenticated on app load
    dispatch(checkAuth())
  }, [dispatch])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-dark-900">
        <Loader size="lg" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <AppRoutes />
    </div>
  )
}

export default App
