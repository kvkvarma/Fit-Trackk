import Login from "./components/Login";
import Bmi from "./components/Bmi";
import Dashboard from "./components/Dashboard";
import Goal from "./components/Goal";
function App() {
  return (
    <div className="App">
      <Login />
      <Bmi />
      <Dashboard />
      <Goal/>
    </div>
  );
}
export default App;