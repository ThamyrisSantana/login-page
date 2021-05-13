import "./App.css";
import Login from "./components/Login/login";
import Retangle from "./components/retangle/retangle";

function App() {
  return (
    <div className="App">
      <div className="wrap-t">
        <div className="re">
          <Retangle />
        </div>
        <div className="lo">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;
