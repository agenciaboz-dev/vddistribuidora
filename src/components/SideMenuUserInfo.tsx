import React from "react"
import { Avatar, Box, IconButton } from "@mui/material"
import { VerticalDotsIcon } from "./VerticalDotsIcon"
import { iconButtonStyle } from "../styles/iconButtonStyle"

interface SideMenuUserInfoProps {}

export const SideMenuUserInfo: React.FC<SideMenuUserInfoProps> = ({}) => {
    return (
        <Box
            sx={{
                height: "5vw",
                width: "100%",
                alignItems: "center",
                padding: "1vw 0",
                gap: "0.5vw",
            }}
        >
            <Avatar sx={{ width: "2.5vw", height: "2.5vw" }} />
            <Box
                sx={{
                    flexDirection: "column",
                }}
            >
                <p style={{ fontSize: "0.9rem" }}>Nome Sobrenome</p>
                <p style={{ fontSize: "0.8rem" }}>Cargo</p>
            </Box>
            <IconButton sx={{ ...iconButtonStyle, marginLeft: "auto" }}>
                <VerticalDotsIcon />
            </IconButton>
        </Box>
    )
}
