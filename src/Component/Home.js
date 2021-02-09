import React,{Component} from 'react';
import Header from './Header.js';
import NewsList from './NewsDisplay.js';
import JSON from '../db.json';
class Home extends Component{
constructor(){
    super()
    this.state={
        title:'This is a Home Page',
        news:JSON,
        filtered:JSON
    }
}
userInput(keyword){
        const output = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })
        this.setState({news:output})
    }

    filterNews(keyword){
        const output = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })
        this.setState({filtered:output})
    }

    render(){
        return(
            <div>
              <Header userText={(useinput) => {this.filterNews(useinput)}} />
                 <h1>{this.state.title}</h1>
               <NewsList datalist={this.state.filtered } />
            </div>
            
        )
    }
}
    
    

export default Home;
