import React from "react"
import { Box, IconButton } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Icon1 } from "./Icon1"
import { Icon2 } from "./Icon2"
import { Icon3 } from "./Icon3"
import { Icon4 } from "./Icon4"
import { Icon5 } from "./Icon5"
import { Icon6 } from "./Icon6"
import { iconButtonStyle } from "../../../../styles/iconButtonStyle"

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = ({}) => {
    const navigate = useNavigate()

    return (
        <Box
            sx={{
                height: "100%",
                width: "5vw",
                flexDirection: "column",
                boxShadow: "0 0 1vw rgba(100, 100, 111, 0.2)",
                alignItems: "center",
                padding: "1vw",
            }}
        >
            <IconButton
                sx={{
                    height: "3vw",
                    width: "3vw",
                }}
            >
                <img src="/vdlogo.png" alt="" style={{ height: "100%", width: "100%" }} />
            </IconButton>
            <Box
                sx={{
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "3vw 0",
                }}
            >
                <IconButton sx={iconButtonStyle} onClick={() => navigate("/main/atividades")}>
                    <Icon1 />
                </IconButton>
                <IconButton sx={iconButtonStyle}>
                    <Icon2 />
                </IconButton>
                <IconButton sx={iconButtonStyle}>
                    <Icon3 />
                </IconButton>
                <IconButton sx={iconButtonStyle}>
                    <Icon4 />
                </IconButton>
                <IconButton sx={iconButtonStyle}>
                    <Icon5 />
                </IconButton>
                <IconButton sx={iconButtonStyle} onClick={() => navigate("/main/config")}>
                    <Icon6 />
                </IconButton>
            </Box>
        </Box>
    )
}
