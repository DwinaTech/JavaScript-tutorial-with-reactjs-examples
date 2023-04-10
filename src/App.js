import "./App.css";

const App = () => {
  // Variable name = dataType
  const tutorialName = "JavaScript tutorial";
  /* const boolean = true; // false;
  const number = 1;
  const object = { key: "Object value" };
  const array = [];
  const fun = () => {};
  const classVariable = class {
    constructor(item1, item2) {}
  };*/

  // const max = 10;
  // const min = 0;
  // const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // let tutorialName = "JavaScript tutorial";
  // if (randomNumber % 2 === 0) {
  //   tutorialName = "HTML";
  // }

  return (
    <div className="App">
      <h1>{tutorialName}</h1>
      {/* <h2>Random Number: {randomNumber}</h2> */}
    </div>
  );
};

export default App;
