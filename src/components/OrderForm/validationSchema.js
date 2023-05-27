import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup
    .string()
    .matches(/^\+380\d{9}$/, 'Invalid phone number')
    .required('Phone number is required'),
  address: yup.string().required('Address is required'),
})
