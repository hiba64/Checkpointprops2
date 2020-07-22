import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileComponent from './Profile/ProfileComponent';
import Whit from "./Whitney.jpg"
const clickHandler=(Name)=>{
  alert(Name)
}
function App() {

    return (
    <div className="App">
     <ProfileComponent fullName="Whitney Houston" 
      Bio="born in August 9, 1963 " 
      profession="Singer"
      clickHandler={clickHandler} >
      <div>
          <img  className="image" src={Whit} alt=""  />
      </div>
      </ProfileComponent>
    </div>
  );
}
export default App;
