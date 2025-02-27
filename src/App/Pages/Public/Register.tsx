import RegisterForm from "../../../components/organism/Forms/RegisterForm"
import Layout from "./Layout"

function Register() {
  return (
    <Layout>
        <section className="mt-[85px] pt-16">
            <h1 className="text-softElectricBlue text-5xl text-center mb-3 font-bold">Registrate</h1>
            <p className="text-lightGray text-center mb-8 text-lg">Crea una cuenta en GetFit</p>

            <div className="w-full">
                <RegisterForm/>
            </div>
        </section>
       
    </Layout>
  )
}

export default Register