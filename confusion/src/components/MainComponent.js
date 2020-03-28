import React,{Component} from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import DishDetails from './DishDetailsComponent'
import Home from './HomeComponent';
import {Switch,Route,Redirect} from 'react-router-dom'

import {DISHES} from '../shared/dishes';

class Main extends Component {
    constructor(props){
      super(props);
      this.state={
         dishes:DISHES,
         selectedDish:null
      };
    }
 
  render() {
       const HomePage=()=>{
           return(
            <Home/>
           );
       }
    console.log(this.state.dishes)
    return (
      
      <div >
        
        <Header/>
           <Switch>
               <Route path='/home' component={HomePage}/>
               <Route exact path='/menu' component={()=><Menu dishes={this.state.dishes}/>}/>
               <Redirect to='/home'/>
           </Switch>
        
        <Footer/>
      </div>
    );
  }
}
 
export default Main;