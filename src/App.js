import "./App.css";

const App = () => {
  // A JavaScript function is a block of code designed to perform a particular task.
  // A JavaScript function is executed when "something" invokes it (calls it).

  // Function will help you to avid duplication code repetition, define the code once and reuse it with different parameters

  // Function Invocation
  // 1- When do an action the function wil be called .eg click on a button
  // 2- When call the function directly by call its name with parentheses on the end and semi-colon
  // 3- Automatically by calling itself .eg (divider())()

  // ES6 function syntax
  const divider = (paramA, paramB) => {
    const zero = 0; // local variable can not be used outside the function scope

    // Before return
    return paramA / paramB - zero;
    // After return
  };

  // ES5 function syntax
  function dividerFun(paramA, paramB) {
    const zero = 0; // local variable can not be used outside the function scope

    // Before return
    return paramA / paramB - zero;
    // After return
  }

  // Assigned to variable
  const result = divider(20, 2);

  // Function does not return a value
  const displayAlert = () => {
    alert("Hi, student, hope you're enjoying the tutorial!");
  };

  displayAlert();

  return (
    <div className="App">
      <div>
        <h1>JavaScript Functions</h1>
        <h2>Divide 10 by 5 = {divider(10, 5)}</h2>
        <h2>Divide 5 by 10 = {divider(5, 10)}</h2>
        <h2>Divide 20 by 2 = {result}</h2>
      </div>
    </div>
  );
};

export default App;
