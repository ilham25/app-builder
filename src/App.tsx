import "./App.css";

import { CircularProgress } from "@chakra-ui/react";
import React from "react";

import Logo from "@/assets/react.svg";

function App() {
  const aw = React.useMemo(
    () => ({
      awe: "we"
    }),
    []
  );

  React.useEffect(() => {
    console.log(aw, "aw");
  }, [aw]);

  return (
    <div className="App">
      <img src={Logo} />
      <CircularProgress isIndeterminate value={80} />
    </div>
  );
}

export default App;
