import "./App.css";

const App = () => {
  let five = 5;
  let ten = 10;

  return (
    <div className="App">
      <h1>JavaScript tutorial, Arithmetic Operators:</h1>
      <h2>five + ten: {five + ten}</h2>
      <h2>five - ten: {five - ten}</h2>
      <h2>five * ten: {five * ten}</h2>
      <h2>five / ten: {five / ten}</h2>
      <h2>Increment five: {--five}</h2>
      <h2>Decrement five: {++five}</h2>
    </div>
  );
};

export default App;
