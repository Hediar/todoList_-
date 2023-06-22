import MainPage from "./Pages/MainPage.js";
import './App.css'
import Header from "./components/Header.js";
import Router from "./shared/Router.js";
function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>
    </div>
  );
}

export default App;
