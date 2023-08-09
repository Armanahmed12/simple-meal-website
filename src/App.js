import './App.css';
import Header from './components/Header/Header';
import Meal from './components/Meal/Meal';
// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
function App() {
  return (
    <div className="App">
       
       <Header></Header>
        <Meal></Meal>
    </div>
  );
}

export default App;
