import styled from 'styled-components'

export const ProductItemBox = styled.li`
  width: 300px;
  height: 350px;
  border: 1px solid ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.white};
  overflow: hidden;
  border-radius: 10px;
  text-align: center;
`

export const ProductPhoto = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`
export const DescrBox = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  color: ${p => p.theme.colors.black};
`

export const Name = styled.p``

export const Price = styled.p``

export const AddButton = styled.button`
  font-weight: ${p => p.theme.fontWeight.semiBold};
  font-family: inherit;
  font-size: ${p => p.theme.fontSize.m};
  color: ${p => p.theme.colors.black};
  text-align: center;
  padding: 5px 20px;
  margin: 5px 0px 5px 0px;
  border: none;
  border-radius: 10px;

  /* background-color: ${p =>
    p.isFollowing ? p.theme.colors.green : p.theme.colors.gray}; */

  :hover {
    background-color: ${p => p.theme.colors.green};
    color: #eee;
  }
`
