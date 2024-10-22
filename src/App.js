import Card from "./components/cards/index.js";
import { FaCloudArrowUp } from "react-icons/fa6";

function App() {
  return (
    <main>
      <Card icon={<FaCloudArrowUp />} iconBgColor="indigo">
        <Card.Title>Clean Development</Card.Title>
        <Card.Description>
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
          magna sit morbi Ac tincidunt sapien vehicula erat auctor pellentesque
          rhoncus.
        </Card.Description>
      </Card>
    </main>
  );
}

export default App;
