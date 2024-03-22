import { Box, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'

export const AddButton = () => {
  return (
    <Box>
        <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              borderRadius: "2vw",
              whiteSpace: "nowrap",
              p: "0 1vw",
              color:"primary.white"
            }}
          >
            Adicionar Pedido
          </Button>
    </Box>
  )
}
