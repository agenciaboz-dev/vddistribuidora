import React from "react"
import { Box } from "@mui/material"
import { ActivitiesSideMenu } from "./localComponents/ActivitiesSideMenu"
import { Route, Routes } from "react-router-dom"
import { PedidosEntrada } from "./localComponents/PedidosEntrada"
interface ActivitiesProps {}

export const Activities: React.FC<ActivitiesProps> = ({ }) => {
    
    return (
        <Box
            sx={{
                height: "100%",
                width: "97.5%",
            }}
        >   
            <ActivitiesSideMenu />
            <Routes>
                <Route path="/pedidoEntrada" element={< PedidosEntrada />}></Route>
            </Routes>
        </Box>

    )
}
