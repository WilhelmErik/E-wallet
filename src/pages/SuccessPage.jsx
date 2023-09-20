import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SuccessPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/"), 2000);
  }, []);

  return (
    <div id="error-page">
      <h1>Success!</h1>
      <p>Your card has been added</p>
      <p></p>
    </div>
  );
}
