import { Outlet } from "react-router";
import NavBar from "./components/NavBar";
import "./styles.css";
import { Container } from "@mui/material";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Container maxWidth="xl" sx={{mt:10}}>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
