import React from "react"
import { Box, IconButton } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { UserInfo } from "./UserInfo"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { accordionStyle } from "../../../../../../styles/accordionStyle"
import CadastroItems from "./subItems/CadastroItems"
import ProdutosItems from "./subItems/ProdutosItems"
import ContabilItems from "./subItems/ContabilItems"
import RotasItems from "./subItems/RotasItems"

interface ConfigMenuProps {}

export const ConfigMenu: React.FC<ConfigMenuProps> = ({}) => {
    const navigate = useNavigate()

    const [expanded, setExpanded] = React.useState<string | false>(false)

    const handleExpand = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <Box
            sx={{
                height: "100%",
                width: "15vw",
                flexDirection: "column",
                padding: "1vw",
            }}
        >
            <UserInfo />

            <h2 style={{ margin: "1vw 0" }}>Configurações</h2>

            <Accordion variant="outlined" expanded={expanded === "panel1"} onChange={handleExpand("panel1")} sx={accordionStyle}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <h3>Cadastro</h3>
                </AccordionSummary>
                <AccordionDetails>
                    <CadastroItems />
                </AccordionDetails>
            </Accordion>
            <Accordion variant="outlined" expanded={expanded === "panel2"} onChange={handleExpand("panel2")} sx={accordionStyle}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <h3>Produtos</h3>
                </AccordionSummary>
                <AccordionDetails>
                    <ProdutosItems />
                </AccordionDetails>
            </Accordion>
            <Accordion variant="outlined" expanded={expanded === "panel3"} onChange={handleExpand("panel3")} sx={accordionStyle}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <h3>Contábil</h3>
                </AccordionSummary>
                <AccordionDetails>
                    <ContabilItems />
                </AccordionDetails>
            </Accordion>
            <Accordion variant="outlined" expanded={expanded === "panel4"} onChange={handleExpand("panel4")} sx={accordionStyle}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <h3>Rotas</h3>
                </AccordionSummary>
                <AccordionDetails>
                    <RotasItems />
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}
