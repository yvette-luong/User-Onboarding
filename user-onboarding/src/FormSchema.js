import * as yup from 'yup'

const formSchema =yup.object().shape({
    email: yup
        .string()
        .email("Email must be valid")
        .required("Email is required"),
    first_name: yup   
        .string()
        .min(3, "Name must be required 3 character long.")
        .required("Name is required"),
    password: yup
        .string()
        .required('Password is required')
        .min(8,"Passwords need 8 characters"),
   
    })
export default formSchema