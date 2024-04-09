import { Box, FormControlLabel, FormGroup, Switch, SwitchProps, styled } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"

interface ListProps {}
const IOSSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: 2,
        transitionDuration: "300ms",
        "&.Mui-checked": {
            transform: "translateX(16px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
                backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
                opacity: 1,
                border: 0,
            },
            "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5,
            },
        },
        "&.Mui-focusVisible .MuiSwitch-thumb": {
            color: "#33cf4d",
            border: "6px solid #fff",
        },
        "&.Mui-disabled .MuiSwitch-thumb": {
            color: theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600],
        },
        "&.Mui-disabled + .MuiSwitch-track": {
            opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
        },
    },
    "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: 22,
        height: 22,
    },
    "& .MuiSwitch-track": {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
        opacity: 1,
        transition: theme.transitions.create(["background-color"], {
            duration: 500,
        }),
    },
}))

const columns: GridColDef<(typeof rows)[number]>[] = [
    {
        field: "supplier",
        headerName: "Fornecedor",
        width: 160,
    },
    {
        field: "doc",
        headerName: "CNPJ / CPF",
        type: "number",
        width: 150,
        align: "center",
        headerAlign: "center",
    },
    {
        field: "city",
        headerName: "Cidade / UF",
        width: 160,
    },
    {
        field: "valProd",
        headerName: "Valor do Produto",
        type: "number",
        width: 150,
        align: "center",
        headerAlign: "center",
    },
    {
        field: "valServ",
        headerName: "Valor do Serviço",
        type: "number",
        width: 150,
        align: "center",
        headerAlign: "center",
    },
    {
        field: "total",
        headerName: "Total",
        type: "number",
        width: 130,
        align: "center",
        headerAlign: "center",
    },
    {
        field: "register",
        headerName: "Cadastro",
        type: "number",
        width: 150,
        align: "center",
        headerAlign: "center",
    },
    {
        field: "prazo",
        headerName: "Prazo",
        type: "number",
        width: 150,
        align: "center",
        headerAlign: "center",
    },
    {
        field: "active",
        headerName: "Ativo",
        type: "boolean",
        width: 100,
        align: "center",
        headerAlign: "left",
        editable: true,
        renderCell: (params: any) => (
            <FormGroup>
                <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} label="" />
            </FormGroup>
        ),
    },
    {
        field: "actions",
        headerName: "Ações",
        width: 70,
        align: "center",
        headerAlign: "center",
    },

    //{
    //  field: "valServ",
    //headerName: "Full name",
    //description: "This column has a value getter and is not sortable.",
    //sortable: false,
    //width: 160,
    //valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
    //},
]

const rows = [
    {
        id: 1,
        supplier: "Papel&CIA",
        doc: 12345678,
        city: "Altamira - PA",
        valProd: 14,
        valServ: 154,
        total: 1578,
        register: 111221,
        prazo: 151418,
        active: true,
        actions: ">>>",
    },
    {
        id: 2,
        supplier: "Amazon",
        doc: 5157546,
        city: "Curitiba - PR",
        valProd: 157,
        valServ: 250,
        total: 2154,
        register: 111221,
        prazo: 151418,
        active: true,
        actions: ">>>",
    },
    {
        id: 3,
        supplier: "GrastroBar",
        doc: 15487623,
        city: "São Paulo - SP",
        valProd: 75,
        valServ: 125,
        total: 1578,
        register: 111221,
        prazo: 151418,
        active: false,
        actions: ">>>",
    },
    {
        id: 4,
        supplier: "Papel&CIA",
        doc: 12345678,
        city: "Altamira - PA",
        valProd: 14,
        valServ: 154,
        total: 1578,
        register: 111221,
        prazo: 151418,
        active: false,
        actions: ">>>",
    },
    {
        id: 5,
        supplier: "Amazon",
        doc: 5157546,
        city: "Curitiba - PR",
        valProd: 157,
        valServ: 250,
        total: 2154,
        register: 111221,
        prazo: 151418,
        active: true,
        actions: ">>>",
    },
    {
        id: 6,
        supplier: "GrastroBar",
        doc: 15487623,
        city: "São Paulo - SP",
        valProd: 75,
        valServ: 125,
        total: 1578,
        register: 111221,
        prazo: 151418,
        active: true,
        actions: ">>>",
    },
    {
        id: 7,
        supplier: "GrastroBar",
        doc: 15487623,
        city: "São Paulo - SP",
        valProd: 75,
        valServ: 125,
        total: 1578,
        register: 111221,
        prazo: 151418,
        active: true,
        actions: ">>>",
    },
    {
        id: 8,
        supplier: "GrastroBar",
        doc: 15487623,
        city: "São Paulo - SP",
        valProd: 75,
        valServ: 125,
        total: 1578,
        register: 111221,
        prazo: 151418,
        active: true,
        actions: ">>>",
    },
    {
        id: 9,
        supplier: "GrastroBar",
        doc: 15487623,
        city: "São Paulo - SP",
        valProd: 75,
        valServ: 125,
        total: 1578,
        register: 111221,
        prazo: 151418,
        active: true,
        actions: ">>>",
    },
    {
        id: 10,
        supplier: "GrastroBar",
        doc: 15487623,
        city: "São Paulo - SP",
        valProd: 75,
        valServ: 125,
        total: 1578,
        register: 111221,
        prazo: 151418,
        active: true,
        actions: ">>>",
    },
    {
        id: 11,
        supplier: "GrastroBar",
        doc: 15487623,
        city: "São Paulo - SP",
        valProd: 75,
        valServ: 125,
        total: 1578,
        register: 111221,
        prazo: 151418,
        active: true,
        actions: ">>>",
    },
]

export const List: React.FC<ListProps> = ({}) => {
    return (
        <Box sx={{ width: "100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                autoHeight
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                checkboxSelection
                disableRowSelectionOnClick
                sx={{
                    border: "none",
                    overflow: "hidden",

                    ".MuiDataGrid-columnHeaders": {
                        borderColor: "transparent",
                    },
                    ".MuiDataGrid-cell": {
                        width: 1,
                        borderColor: "transparent",
                        borderBottom: "none",
                    },
                    ".MuiDataGrid-filler": {
                        height: "auto !important", // Ou height: 0 !important; dependendo do resultado desejado
                    },
                    ".MuiDataGrid-virtualScrollerContent": {},
                }}
            />
        </Box>
    )
}
