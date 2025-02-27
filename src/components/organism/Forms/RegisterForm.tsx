import Form from "../../atoms/Form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import FormField from "../../molecules/FormField"
import { IUserPost } from "../../../App/core/application/dto/register/post-user.dto"
import { useForm } from "react-hook-form"
import Button from "../../atoms/Button"

const registerSchema = yup.object()
    .shape({
        email: yup
            .string().email('Debe ser un correo valido')
            .required('El correo electronico es requerido'),
        username: yup
            .string()
            .min(3, 'El nombre del usuario debe tener al menos 3 caracteres')
            .required('El nombre de usuario es requerido'),
        password: yup 
            .string()
            .min(3, 'La contraseña debe tener minimo 3 caracteres')
            .required('La constraseña es requerida'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password")], "Las contraseñas deben coincidir")
            .required("Debes confirmar la contraseña"),
    })

const RegisterForm = () => {
  
  const {
    control, 
    handleSubmit,
    formState: {errors}
  } = useForm<IUserPost>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(registerSchema)
  })

  return (
    <Form onSubmit={()=>console.log('oee')}>
        <FormField<IUserPost>
            type="email"
            label="Correo electronico" 
            name="email"
            placeholder="juan@getfit.com"
            error={errors.email}
            control={control}
        />
        <FormField<IUserPost>
            type="username"
            label="Nombre de usuario" 
            name="username"
            placeholder="juangetfit"
            error={errors.username}
            control={control}
        />
        <FormField<IUserPost>
            type="password"
            label="Contraseña" 
            name="password"
            placeholder="********"
            error={errors.password}
            control={control}
        />
        <FormField<IUserPost>
            type="password"
            label="Confirmar contraseña" 
            name="confirmPassword"
            placeholder="********"
            error={errors.confirmPassword}
            control={control}
        />


        <Button>Crear cuenta</Button>
    </Form>
  )
}

export default RegisterForm