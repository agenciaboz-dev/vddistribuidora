import React, { useState } from "react"
import { Box, Button } from "@mui/material"
import { SearchField } from "./ActivitiesSideMenu/SearchField"
import { List } from "../../../../../components/List"
import { AddButton } from "../../../../../components/AddButton"
import { TotalParcial } from "./ActivitiesSideMenu/TotalParcial"
import { useNavigate } from "react-router-dom"
import { ModalAdicionarProdutos } from "./ActivitiesSideMenu/ModalAdicionarProduto"

interface pedidoEntrada {}

export const PedidosEntrada: React.FC<pedidoEntrada> = ({}) => {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }
    
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Box sx={{ flexDirection: "column", p: "2vw", pr: "4vw", width: "100%", gap: "1vw" }}>
            <Box sx={{ flexDirection: "column", backgroundColor: "#fff" }}>
                <Box sx={{ fontSize: "2rem" }}>Pedido de Entrada</Box>
                <Box sx={{ color: "secondary.main" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure atque consectetur minima maxime ipsum enim aut nobis alias
                    reprehenderit, est illum quos? Minima aperiam reiciendis magnam ut ex maxime laudantium?
                </Box>
            </Box>
            <Box sx={{ Color: "secondary", mt: "1.5vw", gap: "1vw", width: "100%" }}>
                <SearchField />
                <AddButton onClick={handleClickOpen} name="pedido" />
            </Box>
            <Box sx={{ width: "95%" }}>
                <List />
            </Box>
            <TotalParcial />
            <ModalAdicionarProdutos close={handleClose} open={open} />
        </Box>
    )
}
