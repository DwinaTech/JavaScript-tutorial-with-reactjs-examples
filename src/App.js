import "./App.css";

const App = () => {
  const max = 10;
  const min = 0;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  let tutorialName = "JavaScript";
  if (randomNumber % 2 === 0) {
    tutorialName = "HTML";
  }

  // switch (randomNumber % 2 === 0) {
  //   case true:
  //     tutorialName = "HTML";
  //     break;
  //   default:
  //     break;
  // }

  // const tutorialName = randomNumber % 2 === 0 ? tutorialName = "HTML" : "JavaScript";

  return (
    <div className="App">
      <h1>{tutorialName}</h1>
      <h2>Random Number: {randomNumber}</h2>
    </div>
  );
};

export default App;
