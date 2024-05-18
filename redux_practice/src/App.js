import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { ADD } from "./store/actions";
import { MINUS } from "./store/actions";
function App() {
  const countData = useSelector((state) => state.countReducer.count);
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Count</h1>
      <h2>Count Data: {countData}</h2>
      <button onClick={() => dispatch(ADD())}>ADD 10</button>
      <button
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        onClick={() => dispatch(MINUS())}
      >
        MINUS 10
      </button>
    </div>
  );
}

export default App;
