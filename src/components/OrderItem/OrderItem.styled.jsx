import styled from 'styled-components'
import { AiFillDelete } from 'react-icons/ai'

export const ItemContainer = styled.div``

export const ProductPhoto = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`

export const InfoBox = styled.div`
  padding: 5px;
`

export const Name = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 5px;
`

export const Price = styled.p`
  font-size: 1rem;
  margin-bottom: 5px;
`

export const Icon = styled(AiFillDelete)`
  width: 25px;
  height: 25px;
`

export const DelButton = styled.button`
  background-color: none;
  border: none;
  color: #333;

  &:hover {
    color: #e63946;
  }
`
