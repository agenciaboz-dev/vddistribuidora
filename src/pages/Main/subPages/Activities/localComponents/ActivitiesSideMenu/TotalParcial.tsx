import React from "react"
import { Box } from "@mui/material"

interface TotalParcialProps {}

export const TotalParcial: React.FC<TotalParcialProps> = ({}) => {
    return (
        <Box sx={{ gap: "5vw", justifyContent: "center" }}>
            <Box>Total Parcial:</Box>
            <Box>00,00</Box>
            <Box>00,00</Box>
            <Box>00,00</Box>
        </Box>
    )
}
