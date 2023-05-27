import { Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'
import SharedLayout from './components/SharedLayout/SharedLayout'
import ShopsPage from './pages/ShopsPage'
import HistoryPage from './pages/HistoryPage'
import OrderPage from './pages/OrderPage'
// import { lazy } from 'react'

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
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
