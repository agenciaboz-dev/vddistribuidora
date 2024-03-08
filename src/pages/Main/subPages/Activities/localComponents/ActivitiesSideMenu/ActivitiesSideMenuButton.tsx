import React, { useState } from "react"
import { MenuItem } from "@mui/material"
import { KeyboardArrowDown } from "@mui/icons-material"
import { useLocation, useNavigate } from "react-router-dom"
import { SideMenuItem } from "../../../../../../types/SideMenuItem"

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
                fontWeight: "bold",
                gap: "1vw",
            }}
            onClick={() => navigate(item.path)}
        >
            {item.label}
            {item.subItems && <KeyboardArrowDown sx={{ marginLeft: "auto", rotate: collapse ? "-180deg" : "", transition: "0.3s" }} />}
        </MenuItem>
    )
}
