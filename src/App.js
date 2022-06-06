import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Card>
        <Header>Storybook Header</Header>
        <Button>Hello, storybook</Button>
      </Card>
    </div>
  );
}

export default App;
