import Form from "../../atoms/Form"
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from "react-router-dom";
import * as yup from 'yup'
import FormField from "../../molecules/FormField"
import { IUserPost } from "../../../App/core/application/dto/register/post-user.dto"
import { useForm } from "react-hook-form"
import Button from "../../atoms/Button"
import { Link } from "react-router-dom"
import { RegisterService } from "../../../App/infrastructure/services/register.service"

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

const useRegisterService = new RegisterService()

const RegisterForm = () => {
  const navigate = useNavigate()
  
  const {
    control, 
    handleSubmit,
    formState: {errors}
  } = useForm<IUserPost>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(registerSchema)
    
  })

   
   const handleRegister = async(data: IUserPost)=>{
    const newUser = {
        email: data.email,
        username: data.username,
        password: data.password
    }
    console.log(newUser)
    await useRegisterService.postUser('auth/register', newUser);
    navigate("/iniciar-sesion");
   }

  return (
    <Form onSubmit={handleSubmit(handleRegister)}>
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
        <div>
            <p className="text-lightGray text-center">¿Tienes una cuenta?</p>
            <p className="text-softElectricBlue text-center"><Link to='/iniciar-sesion'>Iniciar sesión</Link></p>
        </div>
        
    </Form>
  )
}

export default RegisterForm