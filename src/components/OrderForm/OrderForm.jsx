import { useForm } from 'react-hook-form'
import { validationSchema } from './validationSchema.js'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import { selectTotalPrice, selectUserData } from '../../redux/selectors'
import { createOrder } from '../../redux/operations.js'
import { checkTotalPrice, setUserData } from '../../redux/slice.js'

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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {inputs.map(({ name, label, defaultValue, placeholder }) => (
          <li key={name}>
            <label>
              {label}
              <p>{errors[name]?.message}</p>
              <input
                required
                placeholder={placeholder}
                defaultValue={defaultValue}
                {...register(name)}
              />
            </label>
          </li>
        ))}

        <div>
          <button type='submit'>Create order</button>
          <p> Total Price: {totalPrice.toFixed(2)}</p>
        </div>
      </form>
    </>
  )
}
