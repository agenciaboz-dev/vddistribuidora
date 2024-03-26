import React, { useState } from "react"
import { Box, MenuItem } from "@mui/material"
import { KeyboardArrowDown } from "@mui/icons-material"
import { useLocation, useNavigate } from "react-router-dom"
import { SideMenuItem } from "../../../../../../types/SideMenuItem"
import { ActivitiesSideMenuList } from "./ActivitiesSideMenuList"

interface ActivitiesSideMenuButtonProps {
    item: SideMenuItem
}

export const ActivitiesSideMenuButton: React.FC<ActivitiesSideMenuButtonProps> = ({ item }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const active = location.pathname.split("/")[1] == item.path.split("/")[1]

    const [collapse, setCollapse] = useState(active)

    return (
        <MenuItem
            sx={{
                // backgroundColor: active ? (item.subItems ? "" : "background.default") : "primary.main",
                // color: active ? (item.subItems ? "secondary.main" : "primary.main") : "background.default",
                pointerEvents: active ? (item.subItems ? "auto" : "none") : "auto",
                gap: "1vw",
                fontSize: "1.1rem",
            }}
            onClick={() => navigate(item.path)}
        >
            {item.label}
            {item.subItems && (
                <KeyboardArrowDown sx={{ marginLeft: "auto", rotate: collapse ? "-180deg" : "", transition: "0.3s" }} />
            )}
            {/* <Box sx={{}}>
                {item.subItems?.map((item) => (
                    <p>{item.label}</p>
                ))}
            </Box> */}
        </MenuItem>
    )
}
