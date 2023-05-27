import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateQuantity } from '../../redux/slice'
import { Button, Count, CounterContainer } from './Counter.styled'

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
    <CounterContainer>
      <Button onClick={handleDecrement}>-</Button>
      <Count>{count}</Count>
      <Button onClick={handleIncrement}>+</Button>
    </CounterContainer>
  )
}
