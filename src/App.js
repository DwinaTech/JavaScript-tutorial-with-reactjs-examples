import "./App.css";

const App = () => {
  const name = "Mo dwina";
  const lastName = "Ahmed";
  // string.replace("partOfTheStringNeedToBeReplaced", "the new value need to be used")
  // string.replaceAll("theStringNeedToBeReplaced", "the new string need to be used")
  // string.slice(startPosition, endPosition)

  return (
    <div className="App">
      <div>
        <h1>JavaScript String Methods</h1>
        <li>
          Name: <strong>{name}</strong>
        </li>
        <li>
          Name length: <strong>{name.length}</strong>
        </li>
        <li>
          Name lowercase: <strong>{name.toLowerCase()}</strong>
        </li>
        <li>
          Name uppercase: <strong>{name.toUpperCase()}</strong>
        </li>
        <li>
          Name first character: <strong>{name.charAt(0)}</strong>
        </li>
        <li>
          Name replace first character:{" "}
          <strong>{name.replace("M", "Y")}</strong>
        </li>
        <li>
          Replace all name: <strong>{name.replaceAll(name, "Mohammed")}</strong>
        </li>
        <li>
          Display part of name: <strong>{name.slice(0, 2)}</strong>
        </li>
        <li>
          Concat names (First option): <strong>{name + " " + lastName}</strong>
        </li>
        <li>
          Concat names (Second option): <strong>{`${name} ${lastName}`}</strong>
        </li>
      </div>
    </div>
  );
};

export default App;
