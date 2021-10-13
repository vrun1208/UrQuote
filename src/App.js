import './App.css';
import Quote from './Quote';

function App() {
  return (
    <div className="App">
      <h1>Quote of the day.</h1>
      <Quote />
    <div className="footer">
    <p className="this">Made with ❤ by Varun</p>
    <a href="https://github.com/vrun1208">
    <i className="fab fa-github fa-lg"> </i> 
    </a>
    <a href="https://www.facebook.com/varun.patodia.372">
    <i className="fab fa-facebook fa-lg"> </i> 
    </a>
    <a href="https://twitter.com/extinctT_T">
    <i className="fab fa-twitter fa-lg"> </i> 
    </a>
  </div>
    </div>
  );
}

export default App;
