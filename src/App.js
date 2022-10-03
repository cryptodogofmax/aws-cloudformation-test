import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import MainRouter from "./routes";

function App() {
  return (
    <div className="bg-black">
      <ChakraProvider>
        <MainRouter />
      </ChakraProvider>
    </div>
  );
}

export default App;
