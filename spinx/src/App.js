import './App.css';
import Images from './image';
import Navigation from './navbar';
import BootstrapCarousel from './carousel'

function App() {
  return (
    <div className="App">
        <div>
           <Navigation/>
          <Images/>
        </div>
         <BootstrapCarousel/>
    </div>
  );
}

export default App;
