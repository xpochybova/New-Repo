import React from 'react';
import '../../App.css';

import NavBar from '../nav/NavBar';
import RecipeDetail from '../component/recipeDetail';

const App = () => (

     <div className="App">
       <div className="App-header">
           <h2> CookBook {/*Šéfkuchára Jakuba Říčařa*/}</h2>
       </div>
       <NavBar />
       <RecipeDetail />
     </div>

);

export default App;
