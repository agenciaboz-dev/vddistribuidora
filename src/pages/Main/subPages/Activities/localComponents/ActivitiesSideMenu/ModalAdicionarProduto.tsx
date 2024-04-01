import React, { useState } from "react"
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"
import { useFormik } from "formik"

interface ModalAdicionarProdutosProps {
    close: () => void
    open: boolean
}

export const ModalAdicionarProdutos: React.FC<ModalAdicionarProdutosProps> = ({ open, close }) => {
    const formik = useFormik({
        initialValues: {
            suplier: "",
            seller: "",
            registrationDate: "",
            deadline: "",
            moeda: "",
            transportMethod: "",
            transportedBy: "",
            contract: "",
        },
        onSubmit: (values) => {
            console.log(values)
        },
    })

    return (
        <Box>
            <Dialog
                open={open}
                onClose={close}
                PaperProps={{
                    component: "form",
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault()
                        const formData = new FormData(event.currentTarget)
                        const formJson = Object.fromEntries((formData as any).entries())
                        const email = formJson.email
                        console.log(email)
                        close()
                    },
                }}
            >
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates occasionally.
                    </DialogContentText>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            name="suplier"
                            label="Fornecedor"
                            placeholder="Fornecedor "
                            value={formik.values.suplier}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            name="seller"
                            label="Vendedor"
                            placeholder="Vendedor"
                            value={formik.values.seller}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            name="registrationDate"
                            label="Data de cadastro"
                            placeholder="Data de cadastro"
                            value={formik.values.registrationDate}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            name="deadline"
                            label="Data de Prazo"
                            placeholder="Data de Prazo"
                            value={formik.values.deadline}
                            onChange={formik.handleChange}
                        />
                        <TextField name="moeda" label="Moeda" placeholder="Moeda" value={formik.values.moeda} onChange={formik.handleChange} />
                        <TextField
                            name="value1"
                            label="suplier"
                            placeholder="Fornecedor "
                            value={formik.values.suplier}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            name="transportMethod"
                            label="Meio de Transporte"
                            placeholder="meio de Transporte "
                            value={formik.values.transportMethod}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            name="transportedBy"
                            label="Transportado por:"
                            placeholder="transportado por"
                            value={formik.values.transportedBy}
                            onChange={formik.handleChange}
                        />
                        <Button type="submit"> enviar </Button>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={close}>Cancel</Button>
                    <Button type="submit">Subscribe</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}
