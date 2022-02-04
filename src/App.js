import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./actions";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.isLoggedReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(7))}>+</button>
      <button onClick={() => dispatch(decrement(3))}>-</button>

      {isLogged ? (
        <h3>Valuable information I shouldn't see</h3>
      ) : (
        <h3>You're not logged in, so you cannot see the info</h3>
      )}
    </div>
  );
}

export default App;
