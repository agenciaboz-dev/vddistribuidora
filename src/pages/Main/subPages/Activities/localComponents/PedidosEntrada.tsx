import React from 'react'
import {Box, IconButton, Paper, TextField} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

interface pedidoEntrada {
    
}

export const PedidosEntrada: React.FC<pedidoEntrada> = ({  }) => {
    
    return (
        <Box sx={{flexDirection:"column", p:"1vw", width:"100%"}}>
            <Box
                sx={{flexDirection:"column", backgroundColor:"#fff", }}
            >
                <Box sx={{fontSize:"2rem"}}>Pedido de Entrada</Box>
                <Box sx={{color:"secondary.main"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure atque consectetur minima maxime ipsum enim aut nobis alias reprehenderit, est illum quos? Minima aperiam reiciendis magnam ut ex maxime laudantium?</Box>
            </Box>
            <Box sx={{Color:"secondary.main"}}>
                <Paper
                    sx={{mt:"2vw", width: "60vw"}}
                >
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Box>

        </Box>
    )
}