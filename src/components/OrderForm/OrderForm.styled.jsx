import styled from 'styled-components'

export const Box = styled.div`
  margin: 0 50px;
`

export const InputList = styled.ul``

export const InputItem = styled.li`
  margin-bottom: 5px;
`

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  font-size: ${p => p.theme.fontSize.s};
`
export const InputBox = styled.input`
  border: 1px 1px solid ${p => p.theme.colors.black};
  border-radius: 5px;
  margin: 5px 0px;
  padding: 5px;
`

export const ErrorMessage = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  color: #dc143c;
`

export const Submit = styled.button`
  font-family: inherit;
  font-size: ${p => p.theme.fontSize.s};
  color: ${p => p.theme.colors.black};
  text-align: center;
  padding: 5px 20px;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: 10px;
  margin-bottom: 10px;

  :hover {
    background-color: ${p => p.theme.colors.green};
    color: #eee;
  }
`

export const BtnBox = styled.div``

export const TotalPrice = styled.div``
