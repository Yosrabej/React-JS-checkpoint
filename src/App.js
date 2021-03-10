import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Contact from "./Components/Contact/Contact";
import Pics from "./Components/Pics/Pics";
import Body from "./Components/Body/Body";
function App() {
    return (
        <div className="App">
            <NavBar />
            <br />
            <Pics />
            <br />
            <Body />
            <br />
            <Contact />
        </div>
    );
}

export default App;
