import "./App.css";

const App = () => {
  let defaultValue = "";
  // Callback function
  const handleChange = (event) => {
    defaultValue = event.target.value;
  };

  // Callback function
  const handleClick = (event) => {
    alert(defaultValue);
  };

  return (
    <div className="App">
      <div>
        <h1>JavaScript events:</h1>
        <input
          // onChange={(event) => {
          //   handleChange(event)
          // }}
          onChange={handleChange}
        />
        <button
          // onClick={(event) => {
          //   handleClick(event)
          // }}
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
