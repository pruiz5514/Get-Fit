import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { ILogin } from '../../../App/core/application/dto/login/login.dto'
import Form from '../../atoms/Form'
import FormField from '../../molecules/FormField'
import Button from '../../atoms/Button'
import { LoginService } from '../../../App/infrastructure/services/login.service'
import { useDispatch } from 'react-redux'
import { login } from '../../../redux/features/authSlice'

const LoginSchema = yup.object()
    .shape({
        email: yup
            .string().email('Debe ser un correo valido')
            .required('El correo electronico es requerido'),
        password: yup 
            .string()
            .required('La constraseña es requerida'),
    })

const useLoginService = new LoginService()

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (data:ILogin) => {
        try{
            const response = await useLoginService.login('auth/login', data);
            dispatch(login({user: response.user.username, token: response.token}))
            navigate('/dashboard')
        } catch(error){
            reset({ email: "", password: "" })
        }
        
    }

    const {
        control, 
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<ILogin>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(LoginSchema)
    })

  return (
    <Form onSubmit={handleSubmit(handleLogin)}>
        <FormField<ILogin>
            type="email"
            label="Correo electronico" 
            name="email"
            placeholder="juan@getfit.com"
            error={errors.email}
            control={control}
        />
        <FormField<ILogin>
            type="password"
            label="Contraseña" 
            name="password"
            placeholder="********"
            error={errors.password}
            control={control}
        />

        <Button>Iniciar sesión</Button>

        <div>
            <p className="text-lightGray text-center">¿Nuevo en GetFit?</p>
            <p className="text-softElectricBlue text-center"><Link to='/registro'>Crear una cuenta</Link></p>
        </div>
    </Form>
  )
}

export default LoginForm