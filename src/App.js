import "./App.css";

const App = () => {
  const name = "Dwinatech channel";
  // String.indexOf("characters need to get its index") will return characters
  // String.lastIndexOf("characters need to get its index") will return characters
  // String.includes("characters looking for") will return a boolean true or false

  return (
    <div className="App">
      <div>
        <h1>JavaScript String Search Method</h1>
        <li>
          Index of a character: <strong>{name.indexOf("a")}</strong>
        </li>
        <li>
          Index of last character: <strong>{name.lastIndexOf("a")}</strong>
        </li>
        <li>
          Does name includes t character:{" "}
          <strong>{`${name.includes("t")}`}</strong>
        </li>
        <li>
          Does name start with D character:{" "}
          <strong>{`${name.startsWith("D")}`}</strong>
        </li>
        <li>
          Does name end with h character:{" "}
          <strong>{`${name.endsWith("l")}`}</strong>
        </li>
      </div>
    </div>
  );
};

export default App;
