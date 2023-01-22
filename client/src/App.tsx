import { Button, useColorMode, ColorMode } from "@chakra-ui/react";
import "./App.css";
import AllRoutes from "./pages/AllRoutes";
import { BsMoon, BsSun } from "react-icons/bs";
import { Helmet } from "react-helmet";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Helmet>
        <style>{`body {background-color: ${
          colorMode == "light" ? "white" : "#1a202c"
        } }`}</style>
      </Helmet>
      <Button
        variant={"ghost"}
        _hover={{ variant: "ghost" }}
        _focus={{ variant: "ghost" }}
        position={"fixed"}
        bottom={"20"}
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? (
          <BsMoon size={20} />
        ) : (
          <BsSun size={20}  />
        )}
      </Button>
      <AllRoutes />
    </div>
  );
}

export default App;
