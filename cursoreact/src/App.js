import "./App.css";
import "./App.css";
import AnotherComponent from "./components/AnotherComponent";
import FirstComponent from "./components/FirstComponent";
import Hooks from "./components/Hooks";
import Images from "./components/Images";
import List from "./components/List";
import Fragment from "./components/Fragment";
import RenderCond from "./components/RenderCond";
import Container from "./Container";

function App() {
  const nome = "Matheus";
  return (
    <div className="App">
      <h2>Hello React</h2>
      <FirstComponent></FirstComponent>
      {2 + 2}
      <p>Nome: {nome}</p>

      <AnotherComponent />

      <Images />

      <Hooks />

      <List />

      <RenderCond x={8} y={10} />

      <Fragment />

      <Container>
        <h1>Este é filho container!</h1>
      </Container>
    </div>
  );
}

export default App;
