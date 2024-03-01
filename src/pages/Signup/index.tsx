import React, { useEffect, useState } from "react"
import { Box, Button, CircularProgress, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { UserForm } from "../../types/server/class/User"
import { useFormik } from "formik"
import { useIo } from "../../hooks/useIo"
import { useSnackbar } from "burgos-snackbar"

interface SignupProps {}

export const Signup: React.FC<SignupProps> = ({}) => {
    const navigate = useNavigate()
    const io = useIo()
    const { snackbar } = useSnackbar()

    const initialValues: UserForm = {
        email: "",
        password: "",
        name: "",
        cpf: "",
        phone: "",
    }

    const formik = useFormik({ initialValues, onSubmit: (values) => handleSignup(values) })

    const [loading, setLoading] = useState(false)

    const handleSignup = (values: UserForm) => {
        io.emit("user:signup", values)
        setLoading(true)
    }

    useEffect(() => {
        io.on("user:signup:success", () => {
            setLoading(false)
            console.log("Usuário cadastrado com sucesso!")
            snackbar({ severity: "success", text: "Usuário cadastrado com sucesso!" })
        })

        io.on("user:signup:failure", (error) => {
            setLoading(false)
            console.log("Erro ao cadastrar usuário: ", error)
            snackbar({ severity: "error", text: "Erro ao cadastrar usuário." })
        })

        return () => {
            io.off("user:signup:success")
            io.off("user:signup:failure")
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
                    }}
                >
                    <TextField label="E-mail" name="email" value={formik.values.email} onChange={formik.handleChange} />
                    <TextField label="Senha" name="password" type="password" value={formik.values.password} onChange={formik.handleChange} />
                    <TextField label="Nome" name="name" value={formik.values.name} onChange={formik.handleChange} />
                    <TextField label="CPF" name="cpf" value={formik.values.cpf} onChange={formik.handleChange} />
                    <TextField label="Telefone" name="phone" value={formik.values.phone} onChange={formik.handleChange} />
                    <Button variant="contained" type="submit">
                        {loading ? <CircularProgress size={"1.5rem"} sx={{ color: "#fff" }} /> : "Enviar"}
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={() => navigate("/login")}>
                        Voltar
                    </Button>
                </Box>
            </form>
        </Box>
    )
}
