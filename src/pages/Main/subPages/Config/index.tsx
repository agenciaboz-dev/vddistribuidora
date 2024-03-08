import React from "react"
import { Box } from "@mui/material"
import { ConfigSideMenu } from "./localComponents/ConfigSideMenu"

interface ConfigProps {}

export const Config: React.FC<ConfigProps> = ({}) => {
    return (
        <Box
            sx={{
                height: "100%",
                width: "100%",
            }}
        >
            <ConfigSideMenu />
        </Box>
    )
}
