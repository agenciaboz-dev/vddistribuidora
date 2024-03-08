import React from "react"
import { Box } from "@mui/material"
import { ActivitiesSideMenu } from "./localComponents/ActivitiesSideMenu"

interface ActivitiesProps {}

export const Activities: React.FC<ActivitiesProps> = ({}) => {
    return (
        <Box
            sx={{
                height: "100%",
                width: "100%",
            }}
        >
            <ActivitiesSideMenu />
        </Box>
    )
}
