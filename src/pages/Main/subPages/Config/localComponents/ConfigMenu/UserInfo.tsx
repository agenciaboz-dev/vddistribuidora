import React from "react"
import { Avatar, Box, IconButton } from "@mui/material"
import { VerticalDotsIcon } from "../../../../../../components/VerticalDotsIcon"
import { iconButtonStyle } from "../../../../../../styles/iconButtonStyle"

interface UserInfoProps {}

export const UserInfo: React.FC<UserInfoProps> = ({}) => {
    return (
        <Box
            sx={{
                height: "5vw",
                width: "100%",
                alignItems: "center",
                padding: "1vw 0",
                gap: "1vw",
            }}
        >
            <Avatar />
            <Box
                sx={{
                    flexDirection: "column",
                }}
            >
                <p>Nome Sobrenome</p>
                <p style={{ fontSize: "90%" }}>Cargo</p>
            </Box>
            <IconButton sx={{ ...iconButtonStyle, marginLeft: "auto" }}>
                <VerticalDotsIcon />
            </IconButton>
        </Box>
    )
}
