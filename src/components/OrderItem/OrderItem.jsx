import { useDispatch } from 'react-redux'
import { deleteFromOrder } from '../../redux/slice'
import Counter from '../Counter/Counter'
import { AiFillDelete } from 'react-icons/ai'

export default function OrderItem({ price, photoUrl, quantity, name, id }) {
  const dispatch = useDispatch()

  return (
    <section>
      <img src={photoUrl} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <Counter quantity={quantity} productId={id} />
      </div>
      <button onClick={() => dispatch(deleteFromOrder(id))}>
        <AiFillDelete />
      </button>
    </section>
  )
}
