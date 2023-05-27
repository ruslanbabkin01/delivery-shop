import { useEffect } from 'react'
import {
  BtnShops,
  ShopItem,
  ShopsGallery,
  Title,
  Wrapper,
} from './ShopsList.styled'
import { useDispatch, useSelector } from 'react-redux'
import { selectShops } from '../../redux/selectors'
import { fetchShops } from '../../redux/operations'
import { setActiveShop } from '../../redux/slice'

export default function ShopsList({ showProducts }) {
  const dispatch = useDispatch()
  const shops = useSelector(selectShops)

  useEffect(() => {
    dispatch(fetchShops(''))
  }, [dispatch])

  function handleShowProducts(shopId) {
    showProducts(shopId)
    dispatch(setActiveShop(shopId))
  }

  return (
    <Wrapper>
      <Title>Shops:</Title>
      <ShopsGallery>
        {shops.map(shop => (
          <ShopItem key={shop._id}>
            <BtnShops onClick={() => handleShowProducts(shop._id)}>
              <p>{shop.name}</p>
            </BtnShops>
          </ShopItem>
        ))}
      </ShopsGallery>
    </Wrapper>
  )
}
