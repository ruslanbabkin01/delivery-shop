import styled from 'styled-components'

export const OrderListContainer = styled.section``

export const OrderGallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export const Order = styled.li`
  width: 200px;
  height: 300px;
  border: 1px solid ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.white};
  overflow: hidden;
  border-radius: 10px;
  text-align: center;
`

export const EmptyMessage = styled.p`
  font-size: ${p => p.theme.fontSize.m};
  font-weight: ${p => p.theme.fontWeight.semiBold};
  margin-top: 20px;
  text-align: center;
`
