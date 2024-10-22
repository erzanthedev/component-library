import Card from "./components/cards/card";
import { FaComputer } from "react-icons/fa6";

function App() {
  return (
    <main>
      <Card
        icon={<FaComputer />}
        title="Clean Development"
        description="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
      />
    </main>
  );
}

export default App;
