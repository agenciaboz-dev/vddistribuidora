import React from "react"
import { Box } from "@mui/material"
import { Sidebar } from "./localComponents/Sidebar"
import { Route, Routes as ReactRoutes } from "react-router-dom"
import { Config } from "./subPages/Config"
import { Activities } from "./subPages/Activities"

interface MainProps {}

export const Main: React.FC<MainProps> = ({}) => {
    return (
        <Box
            sx={{
                height: "100%",
                width: "100%",
            }}
        >
            <Sidebar />
            <ReactRoutes>
                <Route index element={<Activities />} />
                <Route path="/atividades/*" element={<Activities />} />
                <Route path="/config" element={<Config />} />
            </ReactRoutes>
        </Box>
    )
}
