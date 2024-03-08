import React from "react"
import { Box } from "@mui/material"
import { ActivitiesSideMenuList } from "./ActivitiesSideMenuList"
import { ActivitiesSideMenuButton } from "./ActivitiesSideMenuButton"
import { SideMenuUserInfo } from "../../../../../../components/SideMenuUserInfo"

interface ActivitiesSideMenuProps {}

export const ActivitiesSideMenu: React.FC<ActivitiesSideMenuProps> = ({}) => {
    return (
        <Box
            sx={{
                height: "100%",
                width: "15vw",
                flexDirection: "column",
                padding: "1vw",
            }}
        >
            <SideMenuUserInfo />

            <h2 style={{ margin: "1vw 0" }}>Atividades</h2>
            <Box sx={{ flexDirection: "column", width: 1, flex: 1 }}>
                {ActivitiesSideMenuList.map((item) => (
                    <ActivitiesSideMenuButton key={item.label} item={item} />
                ))}
            </Box>
        </Box>
    )
}
