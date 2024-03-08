import React from "react"
import { Box } from "@mui/material"
import { ConfigSideMenuList } from "./ConfigSideMenuList"
import { ConfigSideMenuButton } from "./ConfigSideMenuButton"
import { SideMenuUserInfo } from "../../../../../../components/SideMenuUserInfo"

interface ConfigSideMenuProps {}

export const ConfigSideMenu: React.FC<ConfigSideMenuProps> = ({}) => {
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

            <h2 style={{ margin: "1vw 0" }}>Configurações</h2>
            <Box sx={{ flexDirection: "column", width: 1, flex: 1 }}>
                {ConfigSideMenuList.map((item) => (
                    <ConfigSideMenuButton key={item.label} item={item} />
                ))}
            </Box>
        </Box>
    )
}
