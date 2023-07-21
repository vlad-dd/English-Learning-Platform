import { IDataGrid } from "../types";
import { StyledDataGrid } from "../styled";

const ReportsGrid = ({ reports, columns }: IDataGrid) => {
    return (
        <StyledDataGrid
            rows={reports}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
        />
    )
}

export default ReportsGrid;