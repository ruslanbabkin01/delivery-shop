import { useSelector } from 'react-redux'
import { selectOrder } from '../../redux/selectors'
import OrderItem from '../OrderItem/OrderItem'

export const OrderList = () => {
  const order = useSelector(selectOrder)

  return (
    <>
      {order.length !== 0 && (
        <ul>
          {order.map(({ photoUrl, price, quantity, name, _id }) => (
            <li key={_id}>
              <OrderItem
                id={_id}
                photoUrl={photoUrl}
                price={price}
                name={name}
                quantity={quantity}
              />
            </li>
          ))}
        </ul>
      )}
      {order.length === 0 && <p>Order is empty</p>}
    </>
  )
}
