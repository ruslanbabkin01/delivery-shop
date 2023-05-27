import { useSelector } from 'react-redux'
import { selectOrder } from '../../redux/selectors'
import OrderItem from '../OrderItem/OrderItem'
import {
  EmptyMessage,
  Order,
  OrderGallery,
  OrderListContainer,
} from './OrderList.styled'

export const OrderList = () => {
  const order = useSelector(selectOrder)

  return (
    <OrderListContainer>
      {order.length !== 0 && (
        <OrderGallery>
          {order.map(({ photoUrl, price, quantity, name, _id }) => (
            <Order key={_id}>
              <OrderItem
                id={_id}
                photoUrl={photoUrl}
                price={price}
                name={name}
                quantity={quantity}
              />
            </Order>
          ))}
        </OrderGallery>
      )}
      {order.length === 0 && <EmptyMessage>Order is empty</EmptyMessage>}
    </OrderListContainer>
  )
}
