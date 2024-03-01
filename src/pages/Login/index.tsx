import React, { useEffect, useState } from "react"
import { Box, Button, CircularProgress, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { LoginForm } from "../../types/server/user/login"
import { useFormik } from "formik"
import { useIo } from "../../hooks/useIo"
import { useSnackbar } from "burgos-snackbar"

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
    const navigate = useNavigate()
    const io = useIo()
    const { snackbar } = useSnackbar()

    const initialValues: LoginForm = {
        login: "",
        password: "",
    }

    const formik = useFormik({ initialValues, onSubmit: (values) => handleLogin(values) })

    const [loading, setLoading] = useState(false)

    const handleLogin = (values: LoginForm) => {
        io.emit("user:login", values)
        setLoading(true)
    }

    useEffect(() => {
        io.on("user:login:success", () => {
            setLoading(false)
            console.log("Login feito com sucesso!")
            snackbar({ severity: "success", text: "Login feito com sucesso!" })
        })

        io.on("user:login:failure", (error) => {
            setLoading(false)
            console.log("Erro ao fazer login: ", error)
            snackbar({ severity: "error", text: "Erro ao fazer login." })
        })

        return () => {
            io.off("user:login:success")
            io.off("user:login:failure")
        }
    }, [])

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
            <form onSubmit={formik.handleSubmit} style={{ margin: "auto", width: "100%" }}>
                <Box
                    sx={{
                        flexDirection: "column",
                        gap: "1vw",
                        margin: "auto",
                        width: "100%",
                    }}
                >
                    <TextField label="Login" name="login" value={formik.values.login} onChange={formik.handleChange} />
                    <TextField label="Senha" name="password" value={formik.values.password} onChange={formik.handleChange} />
                    <Button variant="contained" type="submit">
                        {loading ? <CircularProgress size={"1.5rem"} sx={{ color: "#fff" }} /> : "Entrar"}
                    </Button>
                    <p>Não tem conta?</p>
                    <Button variant="outlined" onClick={() => navigate("/cadastro")}>
                        Cadastre-se
                    </Button>
                </Box>
            </form>
        </Box>
    )
}
