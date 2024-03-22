import { Button } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList';


export const FilterButton = () => {
  return (
    <Button variant='outlined' color='secondary' sx={{gap: "0.5vw", borderRadius:"0.5vw", }}>
        <FilterListIcon/>
        Filtros
    </Button>
  )
}
