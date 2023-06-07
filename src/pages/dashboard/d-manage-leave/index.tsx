import React, { useEffect } from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import {
  DataGrid,
  GridActionsCellItem,
  GridRowId,
  GridColDef,
} from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { withAdminGuard } from "../../../hocs/with-admin-guard";
import { Button, Divider } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux-toolkit/hooks";
import { deleteLeaveCategoryThunk, getLeaveCategoryThunk } from "../../../redux-toolkit/leave-category/leave-category-thunk";
import { selectLeaveCategoryState } from "../../../redux-toolkit/leave-category/leave-category-slice";
import { LeaveCategory } from "../../../app-types/leave-category.type";

const DManageLeaveIndex = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector(selectLeaveCategoryState);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getLeaveCategoryThunk());
  }, []);

  const deleteLeaveCategory = React.useCallback(
    (id: GridRowId) => async () => {
      if (confirm("แน่ใจว่าต้องการลบข้อมูลนี้?")) {
        await dispatch(deleteLeaveCategoryThunk(id.toString()));
        dispatch(getLeaveCategoryThunk());
      }
    },
    []
  );

  const editLeaveCategory = React.useCallback(
    (id: GridRowId) => () => {
      // open edit form
      // console.log(id);
      navigate("./" + id + "/edit");
    },
    []
  );

  const columns = React.useMemo<GridColDef<LeaveCategory>[]>(
    () => [
      { field: "id", headerName: "ID", width: 300 },
      { field: "detail", headerName: "ประเภทการลา", width: 500 },
      {
        field: "actions",
        type: "actions",
        width: 120,
        headerName: "เครื่องมือ",
        getActions: (params) => [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={editLeaveCategory(params.id)}
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteLeaveCategory(params.id)}
          />,
        ],
      },
    ],
    [deleteLeaveCategory, editLeaveCategory]
  );

  return (
    <>
      <Button
        variant="contained"
        component={RouterLink}
        to="/dashboard/manage-leave/create"
      >
        เพิ่มข้อมูล
      </Button>

      <Divider sx={{ my: 2 }} />

      <TableContainer component={Paper}>
        {data && (
          <DataGrid
            columns={columns}
            rows={data!}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 4,
                },
              },
            }}
            pageSizeOptions={[4]}
            loading={isLoading}
          />
        )}
      </TableContainer>
    </>
  );
};

export default withAdminGuard(DManageLeaveIndex);
