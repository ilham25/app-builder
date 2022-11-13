import "./App.css";

import React from "react";

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
      <img />
    </div>
  );
}

export default App;
