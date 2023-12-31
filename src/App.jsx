import "./App.css";
import Root from "./Layouts/Root";
import Cards from "./pages/Cards";
import AddCard from "./pages/AddCard";
import ErrorPage from "./pages/ErrorPage";
import SuccessPage from "./pages/SuccessPage";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route index element={<Cards />} />
        <Route path="/newCard" element={<AddCard />} />
        <Route path="/success" element={<SuccessPage />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
