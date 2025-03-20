import { useSelector } from "react-redux";
import Layout from "./PrivateLayout";
import { RootState } from "../../../redux/store";

function Dashboard() {
  const username = useSelector((state: RootState) => state.auth.user)
  return (
    <Layout>
      <h1 className="mt-6 text-softElectricBlue text-center text-4xl md:text-6xl md:mt-10">¡Bienvenido de vuelta, {username}!</h1>
    </Layout>
  )
}

export default Dashboard