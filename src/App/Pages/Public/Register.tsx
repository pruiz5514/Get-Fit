import RegisterForm from "../../../components/organism/Forms/RegisterForm"
import Layout from "./Layout"

function Register() {
  return (
    <Layout>
        <section className="mt-[85px] pt-12 pb-8 w-full flex flex-col items-center">
            <h1 className="text-softElectricBlue text-5xl  mb-3 font-bold">Registrate</h1>
            <p className="text-lightGray  mb-8 text-lg">Crea una cuenta en GetFit</p>

            <div className="w-full max-w-[800px] flex ">
                <RegisterForm/>
            </div>
        </section>
       
    </Layout>
  )
}

export default Register