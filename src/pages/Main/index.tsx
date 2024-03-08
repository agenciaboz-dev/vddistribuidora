import React from "react"
import { Box } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Sidebar } from "./localComponents/Sidebar"
import { Route, Routes as ReactRoutes } from "react-router-dom"

interface MainProps {}

export const Main: React.FC<MainProps> = ({}) => {
    const navigate = useNavigate()

    return (
        <Box
            sx={{
                height: "100%",
                width: "100%",
            }}
        >
            <Sidebar />
            {/* <ReactRoutes>
                <Route index element={<Login />} />
            </ReactRoutes> */}
        </Box>
    )
}
