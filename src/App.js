import "./App.css";

const App = () => {
  // string
  const name = "Mo Dwina"; // "Mo Dwina"
  const age = 90; // number
  const x = true; // boolean
  const y = false; // boolean
  let height = undefined; // undefined
  let weight = null; // null

  // Date object
  const date = new Date(); // "2022-03-25";

  // Object
  const person = {
    name: "Mo Dwina",
    age: 90,
    x: true,
    y: false,
    date: new Date(),
  };

  // Array object
  const personsObject = [
    { name: "Mohammed", age: 20 },
    { name: "Adam", age: 30 },
    { name: "Ali", age: 40 },
  ]; // array of objects

  // Array object
  const persons = ["Mohammed", "Adam", "Ali"]; // array of string

  // Array object
  const personsBoolean = [true, false, false]; // array of booleans

  // Array object
  const personsNumber = [1, 2, 3]; // array of objects

  // Array object
  const personsDateOfBirth = [
    new Date("2022-01-01"),
    new Date("2022-01-02"),
    new Date("2022-01-03"),
  ]; // array of dates

  // Array object
  const personsMixedDataType = ["Mo", 90, true, new Date()]; // array of mixed dataType

  // This only for null and undefine explanation
  setTimeout(() => {
    height = 200;
    weight = 90;
  }, 3000);

  return (
    <div className="App">
      <div>
        <h1>JavaScript DataType</h1>
        <h4>Name: {name}</h4>
        <h4>Age: {age}</h4>
        <h4>X: {x}</h4>
        <h4>Y: {y}</h4>
        <h4>DOB: {date.toLocaleString()}</h4>
        <h4>Height: {height}</h4>
        <h4>Weight: {weight}</h4>
      </div>
    </div>
  );
};

export default App;
