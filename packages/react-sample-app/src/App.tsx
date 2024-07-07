import { MyComponent, defineCustomElements } from "react-library";

defineCustomElements();

function App() {
  return (
    <>
      <MyComponent first="Your" last="Name" />
    </>
  );
}

export default App;
