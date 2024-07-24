import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItmes from "../components/fetchItems";
import { useSelector } from "react-redux";
import LoadingPage from "../components/LoadingPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItmes />
      {fetchStatus.currentlyFetching ? <LoadingPage /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
