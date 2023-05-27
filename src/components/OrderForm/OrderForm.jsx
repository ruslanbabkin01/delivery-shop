import { useForm } from 'react-hook-form'
import { validationSchema } from './validationSchema.js'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import { selectTotalPrice, selectUserData } from '../../redux/selectors'
import { createOrder } from '../../redux/operations.js'
import { checkTotalPrice, setUserData } from '../../redux/slice.js'
import {
  Box,
  BtnBox,
  ErrorMessage,
  InputBox,
  InputItem,
  InputList,
  Label,
  Submit,
  TotalPrice,
} from './OrderForm.styled.jsx'

export const OrderForm = () => {
  const dispatch = useDispatch()
  const totalPrice = useSelector(selectTotalPrice)
  const { email, phone, address, name } = useSelector(selectUserData)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) })

  const inputs = [
    {
      label: 'Name',
      name: 'name',
      defaultValue: name,
      placeholder: 'Enter your name',
    },
    {
      label: 'Phone',
      name: 'phone',
      defaultValue: phone,
      placeholder: '+380111111111',
    },
    {
      label: 'Email',
      name: 'email',
      defaultValue: email,
      placeholder: 'example@gmail.com',
    },
    {
      label: 'Address',
      name: 'address',
      defaultValue: address,
      placeholder: 'Enter your address',
    },
  ]

  const onSubmit = data => {
    dispatch(checkTotalPrice())
    dispatch(setUserData(data))
    dispatch(createOrder(''))
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputList>
          {inputs.map(({ name, label, defaultValue, placeholder }) => (
            <InputItem key={name}>
              <Label>
                {label}
                <ErrorMessage>{errors[name]?.message}</ErrorMessage>
                <InputBox
                  required
                  placeholder={placeholder}
                  defaultValue={defaultValue}
                  Input
                  {...register(name)}
                />
              </Label>
            </InputItem>
          ))}
        </InputList>

        <BtnBox>
          <Submit type='submit'>Create order</Submit>
          <TotalPrice>Total Price: {totalPrice.toFixed(2)}</TotalPrice>
        </BtnBox>
      </form>
    </Box>
  )
}
