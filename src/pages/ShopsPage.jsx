import Container from '../components/Container/Container'
import ShopsList from '../components/ShopsList/ShopsList'
import ProductsList from '../components/ProductsList/ProductsList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchShopsProducts } from '../redux/operations'
import { selectActiveProducts } from '../redux/selectors'

export default function ShopsPage() {
  const dispatch = useDispatch()
  const products = useSelector(selectActiveProducts)

  function showProducts(shopId) {
    dispatch(fetchShopsProducts(shopId))
  }

  return (
    <main>
      <Container>
        <ShopsList showProducts={showProducts} />

        {products && <ProductsList products={products} />}
      </Container>
    </main>
  )
}
