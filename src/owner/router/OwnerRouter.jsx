import { Routes,Route } from "react-router-dom"
import { OwnerLayout } from "../layout/OwnerLayout"
import { CreateBusiness } from "../pages/CreateBusiness"
import { CreateUser } from "../pages/CreateUser"

export const OwnerRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={<OwnerLayout />} >
            <Route index path="crear-negocio" element={<CreateBusiness />} />
            <Route path="crear-usuario" element={<CreateUser />} />
        </Route>
    </Routes>
  )
}