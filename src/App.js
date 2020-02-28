import React, {Component} from 'react'
import data from './data.js'
import Card from './Components/Card'
import Clicker from './Components/Clicker'
import './reset.css'
import './index.css'
class App extends Component{
    constructor(){
        super()
        this.state={
             data: data,
             theNum: 0

        }
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }
    handleNext(){
      this.setState({theNum: this.state.theNum+1})
      if(this.state.theNum >= 24){
        this.setState({theNum: 0})
      }
    }
    handlePrev(){
      this.setState({theNum: this.state.theNum-1})
      if(this.state.theNum <= 1){
        this.setState({theNum: 24})
      }
    }
    
    render(){
        console.log(this.state.data)
        return(
            <div className='app'>
              <div className='header'>
                <span className='home'>Home</span>
              </div>
              <Card 
              theData={this.state.data}
              Num={this.state.theNum}
              />
              <Clicker 
              clickNext={this.handleNext}
              clickPrev={this.handlePrev}
              />
            </div>
        )
    }
}
export default App