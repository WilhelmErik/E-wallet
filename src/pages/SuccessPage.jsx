import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
//
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
//
export default function SuccessPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/"), 2000);
  }, []);

  return (
    <div id="error-page">
      <h1>Success!</h1>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert variant="filled" severity="success">
          Your card has been added
        </Alert>
      </Stack>
    </div>
  );
}
