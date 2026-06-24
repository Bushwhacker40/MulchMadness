import { Outlet } from "react-router";
import NavBar from "./components/NavBar";


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
        <Outlet />
    </>
  );
}

export default App;
