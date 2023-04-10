import "./App.css";

const App = () => {
  const age = 58;
  let message = "";

  if (age === 55) {
    message = "Mohammed is 55 years old";
  } else if (age < 50) {
    message = "Mohammed is younger then 50 years old";
  } else if (age > 60) {
    message = "Mohammed is older then 60 years old";
  } else if (age <= 54) {
    message = "Mohammed age is 54 years old or less";
  } else if (age >= 59) {
    message = "Mohammed age is 59 years old or more";
  } else if (age !== 20) {
    // 58 - 56
    message = `Mohammed age is not equal to 20 years, it is ${age}`;
  } else {
    message = "";
  }

  return (
    <div className="App">
      <h1>JavaScript tutorial, Arithmetic Operators:</h1>
      <p>{message}</p>
    </div>
  );
};

export default App;
