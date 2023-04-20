import "./App.css";

const App = () => {
  const names = ["Mohammed", "Ali", "John"];
  //Convert an array to string
  // names.toString();

  // Add a new item to end of an array
  // names.push("Akey");
  // Remove last item on an array
  // names.pop();
  // const removedName = names.pop();

  // Add a new item to beginning of an array
  // names.unshift("Ahmed");

  // Remove first item on an array
  // names.shift();
  // const removedName = names.shift();

  // Accessing and changing an array items using indexes
  // names[0] = "Hassan";

  // Concat two arrays or more
  // const namesList = ["Khaled", "Nassir"];
  // const allNames = names.concat(namesList);

  // Get a slice of an array names.slice(startPosition, endPosition) will not include the endPosition item
  // const getFirstTwoNames = names.slice(0, 2);

  return (
    <div className="App">
      <div>
        <h1>Array methods in JavaScript</h1>
        <p>
          Names to string: <strong>{names}</strong>
        </p>
        <p>
          Join Names: <strong>{names.join(" - ")}</strong>
        </p>
        <p>
          Names length: <strong>{names.length}</strong>
        </p>
        <p>{/* Removed Names: <strong>{removedName}</strong> */}</p>
        <p>{/* All Names: <strong>{allNames.join(" * ")}</strong> */}</p>
        <p>
          {/* All Names: <strong>{getFirstTwoNames.join(" - ")}</strong> */}
        </p>
      </div>
    </div>
  );
};

export default App;
