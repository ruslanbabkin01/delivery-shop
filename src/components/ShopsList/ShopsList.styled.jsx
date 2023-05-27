import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 100px;
  margin-left: 50px;
`

export const Title = styled.h2`
  font-weight: ${p => p.theme.fontWeight.semiBold};
  font-size: ${p => p.theme.fontSize.xl};
  margin-bottom: 20px;
`

export const ShopsGallery = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`

export const ShopItem = styled.li``

export const BtnShops = styled.button`
  font-weight: ${p => p.theme.fontWeight.semiBold};
  font-family: inherit;
  font-size: ${p => p.theme.fontSize.m};

  color: ${p => p.theme.colors.black};
  text-transform: uppercase;
  background-color: ${p => p.theme.colors.gray};

  width: 200px;
  height: 70px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 15px 50px;
  margin: 0 auto;

  :hover {
    background-color: ${p => p.theme.colors.green};
    color: #eee;
  }
`
