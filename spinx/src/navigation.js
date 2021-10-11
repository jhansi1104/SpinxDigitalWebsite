import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
return (
<div className="App">
<Router>
<NavigationBar></NavigationBar>
<Route exact path="/" component={Home}></Route>
<Route path="/about" component={About}></Route>
<Route exact path="/contact" component={Contact}></Route>
</Router>
</div>
);
}