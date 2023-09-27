import { useRouteError, useNavigate } from "react-router-dom";
import { useEffect } from "react";
//
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
//
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/"), 2000);
  }, []);

  return (
    <div id="error-page">
      <Stack sx={{ width: "100%" }} spacing={2}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <Alert variant="filled" severity="error">
          <i>{error.statusText || error.message}</i>
        </Alert>
      </Stack>
      <p></p>
    </div>
  );
}
