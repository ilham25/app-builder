import { Layout } from "./components";
import { Editor } from "./features/editor";
import { Properties } from "./features/properties";
import { Toolbar } from "./features/toolbar";

function App() {
  return (
    <Layout>
      <Toolbar />
      <Editor />
      <Properties />
    </Layout>
  );
}

export default App;
