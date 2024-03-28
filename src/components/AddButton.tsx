import { Box, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

interface IButtonAdd {
    name: string
    onClick: () => void
}

export const AddButton: React.FC<IButtonAdd> = ({ onClick, name }) => {
    return (
        <Box>
            <Button
                variant="contained"
                startIcon={<AddIcon />}
                sx={{
                    borderRadius: "2vw",
                    whiteSpace: "nowrap",
                    p: "0 1vw",
                    color: "primary.white",
                }}
                onClick={onClick}
            >
                Adicionar {name}
            </Button>
        </Box>
    )
}
