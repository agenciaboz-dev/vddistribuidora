import { createTheme } from "@mui/material"
import { colors } from "../styles/colors"

export const useMuiTheme = () => {
    const THEME = createTheme({
        typography: {
            fontSize: 14,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 600,
        },
        palette: {
            primary: {
                main: colors.primary,
                
            },
            secondary: {
                main: colors.secondary,
            },

            text: {
                primary: colors.black,
            },
        },
    })

    return THEME
}
