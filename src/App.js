import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
      <div className="row wrapper m-0">
        <div className="average col-md-6 col-xs-12 p-0 bg-danger">hello</div>
        <div className="col-md-6 col-xs-12 p-0 bg-success">
          <div className='right'>
            <div className='w-100 h-100 bg-secondary'>Hello</div>
            <div className='w-100 h-100 bg-primary'>Hello</div>
          </div>
        </div>
      </div>
  );
}

export default App;
