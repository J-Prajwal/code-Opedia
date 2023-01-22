import { Button, useColorMode } from "@chakra-ui/react";
import "./App.css";
import AllRoutes from "./pages/AllRoutes";
import { BsMoon, BsSun } from "react-icons/bs";
import { Helmet } from "react-helmet";

function App() {
  let pathname = window.location.pathname;
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Helmet>
        <style>{`body {background-color: ${
          colorMode == "light" ? "white" : "#1a202c"
        } }`}</style>
      </Helmet>
      {pathname !== "/admin/dashboard" && (
        <Button
          variant={"outline"}
          borderRadius={"full"}
          position={"fixed"}
          bottom={"20"}
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? <BsMoon size={20} /> : <BsSun size={20} />}
        </Button>
      )}
      <AllRoutes />
    </div>
  );
}

export default App;
