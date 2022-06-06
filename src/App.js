import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Header from "./components/Header";
import Para from "./components/Para";
import img from "./images/img1.jpg";

function App() {
  return (
    <div className="App">
      <Card>
        <img src={img} alt="images" style={{ margin: "0 auto " }} />
        <Header>Storybook Header</Header>
        <Para>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Para>
        <Button>Hello, storybook</Button>
      </Card>
    </div>
  );
}

export default App;
