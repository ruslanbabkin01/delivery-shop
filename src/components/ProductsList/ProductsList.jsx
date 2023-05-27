import { useDispatch } from 'react-redux'
import { ProductsGallery } from './ProductsList.styled'
import { deleteFromOrder, setInOrder } from '../../redux/slice'
import ProductItem from '../ProductItem/ProductItem'

export default function ProductsList({ products }) {
  const dispatch = useDispatch()

  function addToOrder(productId) {
    dispatch(setInOrder(productId))
  }

  function delFromOrder(productId) {
    dispatch(deleteFromOrder(productId))
  }

  return (
    <ProductsGallery>
      {products.map(({ name, photoUrl, _id, price }) => (
        <ProductItem
          name={name}
          key={_id}
          _id={_id}
          photoUrl={photoUrl}
          price={price}
          delFromOrder={delFromOrder}
          addToOrder={addToOrder}
        />
      ))}
    </ProductsGallery>
  )
}
