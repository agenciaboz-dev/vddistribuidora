import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface ListProps {}

const columns: GridColDef<(typeof rows)[number]>[] = [
    {
        field: "supplier",
        headerName: "Fornecedor",
        width: 150,
    },
    {
        field: "doc",
        headerName: "CNPJ / CPF",
        type: "number",
        width: 150,
    },
    {
        field: "city",
        headerName: "Cidade / UF",
        width: 150,
    },
    {
        field: "valProd",
        headerName: "Valor do Produto",
        type: "number",
        width: 150,
    },
    {
        field: "valServ",
        headerName: "Valor do Serviço",
        type: "number",
        width: 150,
    },
    {
        field: "total",
        headerName: "Total",
        type: "number",
        width: 150,
    },
    {
        field: "register",
        headerName: "Cadastro",
        type: "number",
        width: 150,
    },
    {
        field: "prazo",
        headerName: "Prazo",
        type: "number",
        width: 150,
    },
    {
        field: "active",
        headerName: "Ativo",
        type: "boolean",
        width: 50,
    },
    {
        field: "actions",
        headerName: "Ações",
        width: 50,
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
        active: true,
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
]

export const List: React.FC<ListProps> = ({}) => {
    return (
        <Box sx={{ width: 1 }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    )
}
