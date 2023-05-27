import Container from '../components/Container/Container'
import { OrderForm } from '../components/OrderForm/OrderForm'
import { OrderList } from '../components/OrderList/OrderList'

export default function OrderPage() {
  return (
    <Container>
      <OrderForm />

      <OrderList />
    </Container>
  )
}
