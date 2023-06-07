import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import { useAppDispatch } from "../../../redux-toolkit/hooks";
import { createLeaveCategoryThunk } from "../../../redux-toolkit/leave-category/leave-category-thunk";

export default function DManageLeaveCreate() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const schema = yup.object().shape({
    detail: yup.string().required("ป้อนข้อมูลประเภทการลาด้วย"),
  });

  type FormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = async (data: FormData) => {
    try {
      
      dispatch(createLeaveCategoryThunk(data.detail));   

      toast.success("บันทึกข้อมูลสำเร็จ");

      navigate("../manage-leave"); // กลับหน้าหลักของประเภทการลา
    } catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <>
      <Container component="main" sx={{m: 0}}>
        <Box
          sx={{
            marginTop: 2,
          }}
        >
          <Typography component="h1" variant="h5">
            เพิ่มข้อมูล
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  {...register("detail")}
                  error={errors.detail ? true : false}
                  helperText={errors.detail && errors.detail.message}
                  fullWidth
                  label="ประเภทการลา"
                />
                <LoadingButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  loading={isSubmitting}
                  loadingIndicator="กำลังเพิ่มข้อมูล รอสักครู่..."
                >
                  บันทึก
                </LoadingButton>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
