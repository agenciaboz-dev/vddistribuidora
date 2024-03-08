import { Box, MenuItem } from "@mui/material"
import React from "react"

interface ProdutosItemsProps {}

const ProdutosItems: React.FC<ProdutosItemsProps> = () => {
    return (
        <Box
            sx={{
                flexDirection: "column",
                gap: "0.5vw",
            }}
        >
            <MenuItem>Todos</MenuItem>
            <MenuItem>Embalagem</MenuItem>
            <MenuItem>Estoque</MenuItem>
            <MenuItem>Locais de Estoque</MenuItem>
        </Box>
    )
}

export default ProdutosItems
