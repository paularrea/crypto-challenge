import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AvgTicker from "./components/Average/AvgTicker";
import TradingPairs from "./components/TradingPairs/TradingPairs";

function App() {
  return (
    <div className="row wrapper m-0">
      <div className="average col-md-6 col-xs-12 p-0">
        <AvgTicker />
      </div>
      <div className="col-md-6 col-xs-12 p-0">
        <TradingPairs />
      </div>
    </div>
  );
}

export default App;
