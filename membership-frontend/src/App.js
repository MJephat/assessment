import { Route } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import HomePage from "./pages/homepage";
import Members from "./pages/members";


// import Chatpage from "./pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage}/>
      <Route path="/members" component={Members}/>
    </div>
  );
}

export default App;
