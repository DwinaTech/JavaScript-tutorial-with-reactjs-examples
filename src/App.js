import "./App.css";

const App = () => {
  const max = 10;
  const min = 0;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  let tutorialName = "JavaScript: Conditions";

  /*if (randomNumber % 2 === 0) {
    tutorialName = "HTML";
  }*/

  // tutorialName = randomNumber % 2 === 0 ? "HTML" : tutorialName;

  switch (randomNumber % 2 === 0) {
    case true:
      tutorialName = "CSS";
      break;
    case false:
      tutorialName = "HTML";
      break;
    default:
      break;
  }

  return (
    <div className="App">
      <h1>{tutorialName}</h1>
      <h2>Random number: {randomNumber}</h2>
    </div>
  );
};

export default App;
