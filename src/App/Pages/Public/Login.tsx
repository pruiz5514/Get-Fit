import LoginForm from "../../../components/organism/Forms/LoginForm";
import Layout from "./Layout";

export default function Login() {
  return (
    <Layout>
        <section className="mt-[85px] pt-12 pb-8 w-full flex flex-col items-center">
            <h1 className="text-softElectricBlue text-5xl mb-8 font-bold">Iniciar sesión</h1>

            <div className="w-full max-w-[800px] flex ">
                <LoginForm/>
            </div>
        </section>
    </Layout>
  )
}
