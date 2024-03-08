import React from "react"
import { Box } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Sidebar } from "./Sidebar"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    const navigate = useNavigate()

    return (
        <Box
            sx={{
                height: "100%",
                width: "100%",
            }}
        >
            <Sidebar />
        </Box>
    )
}
