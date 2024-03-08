import React from "react"
import { Route, Routes as ReactRoutes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"
import { Main } from "./pages/Main"

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    return (
        <ReactRoutes>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Login />} />
            <Route path="/cadastro" element={<Signup />} />
            <Route path="/main/*" element={<Main />} />
        </ReactRoutes>
    )
}
