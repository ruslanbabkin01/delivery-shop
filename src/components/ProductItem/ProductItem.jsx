import { useSelector } from 'react-redux'
import {
  AddButton,
  DescrBox,
  Name,
  Price,
  ProductItemBox,
  ProductPhoto,
} from './ProductItem.styled'
import { selectOrder } from '../../redux/selectors'

export default function ProductItem({
  photoUrl,
  name,
  price,
  _id,
  addToOrder,
  delFromOrder,
}) {
  const order = useSelector(selectOrder)
  const isInOrder = order.find(product => _id === product._id)

  function handleClick(id) {
    isInOrder ? delFromOrder(id) : addToOrder(id)
  }

  return (
    <ProductItemBox>
      <ProductPhoto src={photoUrl} alt='Product' />
      <DescrBox>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </DescrBox>

      <AddButton onClick={() => handleClick(_id)}>
        {isInOrder ? ' remove from cart' : 'add to Cart'}
      </AddButton>
    </ProductItemBox>
  )
}
