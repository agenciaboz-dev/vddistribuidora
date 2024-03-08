import { Box, MenuItem } from "@mui/material"
import React from "react"

interface ContabilItemsProps {}

const ContabilItems: React.FC<ContabilItemsProps> = () => {
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

export default ContabilItems
