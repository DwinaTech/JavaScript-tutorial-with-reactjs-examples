import "./App.css";

const App = () => {
  const max = 10;
  const min = 0;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  let tutorialName = "JavaScript";
  if (randomNumber % 2 === 0) {
    tutorialName = "HTML";
  }

  // const tutorialName = randomNumber % 2 === 0 ? tutorialName = "HTML" : "JavaScript";

  return (
    <div className="App">
      <h1>{tutorialName}</h1>
      <h2>Random Number: {randomNumber}</h2>
    </div>
  );
};

export default App;
