import { Navigate, Route, Routes } from 'react-router-dom'
import SharedLayout from './components/SharedLayout/SharedLayout'
// import { lazy } from 'react'
import ShopsPage from './pages/ShopsPage'
import HistoryPage from './pages/HistoryPage'
import OrderPage from './pages/OrderPage'

// const ShopsPage = lazy(() => import('./pages/ShopsPage'))
// const OrderPage = lazy(() => import('./pages/OrderPage'))
// const HistoryPage = lazy(() => import('./pages/HistoryPage'))

function App() {
  return (
    <>
      <SharedLayout />
      <Routes>
        <Route path='/' index element={<ShopsPage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/history' element={<HistoryPage />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default App
