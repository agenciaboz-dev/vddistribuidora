import React from "react"
import { Box, Button, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
    const navigate = useNavigate()
    return (
        <Box
            sx={{
                alignItems: "center",
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
                    flexDirection: "column",
                    gap: "1vw",
                    margin: "auto",
                    width: "100%",
                }}
            >
                <TextField label="Login"></TextField>
                <TextField label="Senha"></TextField>
                <p>Não tem conta?</p>
                <Button variant="contained" onClick={() => navigate("/cadastro")}>
                    Cadastre-se
                </Button>
            </Box>
        </Box>
    )
}
