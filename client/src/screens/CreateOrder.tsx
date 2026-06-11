import { Box, Container, Divider, TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import OrderTable from "../components/OrderTable";
import UploadFile from "../components/UploadFile";

export default function CreateOrder() {
  return (
    <Box component="form">
      <Paper elevation={3}>
        <Typography variant="h3">Create Order</Typography>
        <Container maxWidth={false} sx={{ pb: 4 }}>
          <Typography variant="h5">Contact Information</Typography>
          <TextField label="First Name"></TextField>
          <TextField label="Last Name"></TextField>
          <TextField label="Address"></TextField>
          <TextField label="City"></TextField>
          <TextField label="Zip Code"></TextField>
          <TextField label="Phone Number"></TextField>
          <TextField label="Email"></TextField>
        </Container>
        <Divider />
        <Container maxWidth={false} sx={{ pt: 4, pb: 4 }}>
          <Typography variant="h5">Order Information</Typography>
          <OrderTable />
        </Container>
        <Container maxWidth={false} sx={{ pb: 4 }}>
          <TextField sx={{width:'75%'}} label="Delivery Instructions" multiline fullWidth rows={4} placeholder=" e.g. Leave next to garage."></TextField>
          <UploadFile />
        </Container>
      </Paper>
    </Box>
  );
}
