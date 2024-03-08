import { Box, MenuItem } from "@mui/material"
import React from "react"

interface CadastroItemsProps {}

const CadastroItems: React.FC<CadastroItemsProps> = () => {
    return (
        <Box
            sx={{
                flexDirection: "column",
                gap: "0.5vw",
            }}
        >
            <MenuItem>Todos</MenuItem>
            <MenuItem>Consumidor Final</MenuItem>
            <MenuItem>Cliente</MenuItem>
            <MenuItem>Fornecedores</MenuItem>
            <MenuItem>Transportadora</MenuItem>
            <MenuItem>Funcionário</MenuItem>
            <MenuItem>Vendedor</MenuItem>
            <MenuItem>Intermediador</MenuItem>
        </Box>
    )
}

export default CadastroItems
