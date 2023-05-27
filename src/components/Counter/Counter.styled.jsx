import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Button = styled.button`
  padding: 10px;
  font-size: ${p => p.theme.fontSize.m};
  background-color: #f5f5f5;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: ${p => p.theme.colors.darkgrey};
  }
`

export const Count = styled.span`
  margin: 0 10px;
  font-size: ${p => p.theme.fontSize.m};
  font-weight: ${p => p.theme.fontWeight.semiBold};
`
