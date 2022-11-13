import "./App.css";

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
    </div>
  );
}

export default App;
