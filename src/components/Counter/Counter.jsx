import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateQuantity } from '../../redux/slice'

export default function Counter({ quantity, productId }) {
  const [count, setCount] = useState(1)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateQuantity({ id: productId, totalQuantity: count }))
  }, [count])

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1)
  }

  const handleDecrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1)
    }
  }

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}
