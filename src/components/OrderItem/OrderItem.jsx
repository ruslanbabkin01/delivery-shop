import { useDispatch } from 'react-redux'
import { deleteFromOrder } from '../../redux/slice'
import Counter from '../Counter/Counter'

import {
  DelButton,
  Icon,
  InfoBox,
  ItemContainer,
  Name,
  Price,
  ProductPhoto,
} from './OrderItem.styled'

export default function OrderItem({ price, photoUrl, quantity, name, id }) {
  const dispatch = useDispatch()

  return (
    <ItemContainer>
      <ProductPhoto src={photoUrl} alt={name} />
      <InfoBox>
        <Name>{name}</Name>
        <Price>Price: {price}</Price>
        <Counter quantity={quantity} productId={id} />
      </InfoBox>
      <DelButton onClick={() => dispatch(deleteFromOrder(id))}>
        <Icon />
      </DelButton>
    </ItemContainer>
  )
}
