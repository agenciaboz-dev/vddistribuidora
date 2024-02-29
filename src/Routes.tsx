import React from "react"
import { Route, Routes as ReactRoutes } from "react-router-dom"
import { Login } from "./pages/Login"

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    return (
        <ReactRoutes>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Login />} />
        </ReactRoutes>
    )
}
