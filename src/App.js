import Card from "./components/cards/index.js";
import uploadCloud from "./components/cards/cloud-upload.svg";

function App() {
  return (
    <main>
      <Card icon={<img src={uploadCloud} alt="Upload cloud icon" />}>
        <Card.Title>Clean Development</Card.Title>
        <Card.Description>
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
          magna sit morbi Ac tincidunt sapien vehicula erat auctor pellentesque
          rhoncus. Et magna sit morb Ac tincidunt sapien vehicula erat auctor
          pellentesque rhoncus. Et magna sit morbi lobortis. i lobortis.
          lobortis.
        </Card.Description>
      </Card>
    </main>
  );
}

export default App;
