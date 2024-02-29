import React from "react"
import { Box, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
    return (
        <Box
            sx={{
                justifyContent: "space-around",
                height: "100%",
                width: "100%",
            }}
        >
            <Box>
                <img src="/vdlogo.png" alt="" />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "white",
                    margin: "auto",
                    gap: "1vw",
                }}
            >
                <TextField label="Login"></TextField>
                <TextField label="Senha"></TextField>
            </Box>
        </Box>
    )
}
