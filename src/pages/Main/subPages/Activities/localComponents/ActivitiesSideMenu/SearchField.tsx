import React, { useEffect, useState } from "react"
import { Box, Button, IconButton, TextField } from "@mui/material"
import { Cancel, Search } from "@mui/icons-material"
import normalize from "../../../../../../tools/normalize"
import FilterListIcon from '@mui/icons-material/FilterList';
import { FilterButton } from "../../../../../../components/FilterButton";

//interface SearchFieldProps {
//    list: any[]
//    setList: (value: any[]) => void
//    search_key: any
//}

export const SearchField/*: React.FC<SearchFieldProps>*/ = ({ /* list, setList, search_key */}) => {
    const [text, setText] = useState("")

    //const handleSearch = (value: string) => {
    //    const result = list.filter((item) => normalize(item[search_key]).includes(normalize(value)))
    //    setList(result)
    //}

    //useEffect(() => {
    //    handleSearch(text)
    //}, [text])

    return (
      <Box sx={{ gap: "1vw", width:1}}>
        <TextField
          fullWidth
          label="Buscar"
          placeholder="Procurar em Pedidos de Entrada"
          value={text}
          InputProps={{
            startAdornment: <Search color="secondary" />,
            sx: { gap: "1vw" },
            endAdornment: (
              <IconButton color="secondary" onClick={() => setText("")}>
                <Cancel />
              </IconButton>
            ),
          }}
          onChange={(event) => setText(event.target.value)}
        />
        <FilterButton/>
      </Box>
    );
}
