import { Box, MenuItem } from "@mui/material"
import React from "react"

interface RotasItemsProps {}

const RotasItems: React.FC<RotasItemsProps> = () => {
    return (
        <Box
            sx={{
                flexDirection: "column",
                gap: "0.5vw",
            }}
        >
            <MenuItem>Detalhes</MenuItem>
        </Box>
    )
}

export default RotasItems
