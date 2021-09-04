import React , {Component }from 'react';
import './App.css';
import  Profile from './components/Profile';
import Skills from './components/skills';
import Props from './components/Props';

class App extends Component {

 
  me = {
    name:"babu ahmed" ,
    title:"Fullstack developer, fb ",
    code: "fullstack " 
};

// state = {
//   Count : 0 
// };


state = {
  count:0
}

incrementCount =() =>{
this.setState({count: this.state.count+1})
}

decrementCount =() =>{
  if (this.state.count>0){
  this.setState({count: this.state.count-1})
  }
};

intervalId= null;

startTimer=() =>{
  if (this.state.count>0 && !this.intervalId){

      this.intervalId=
      setInterval(() =>{
          this.setState({count: this.state.count-1},()=>{
            if (this.state.count===0){
              alert("Timer Finished")
              clearInterval(this.intervalId)
              this.intervalId=null;
            }
          })
      },100)

  }
}


stopTimer=() =>{
if(this.intervalId){
  clearInterval(this.intervalId);
  this.intervalId=null;
}

}

resetTimer =()=>{
  this.setState({count:0});
  clearInterval(this.intervalId);
  this.intervalId=null;
}
  render() {
   
    return (
      <div className="App">

       <h1 className="'Heading">Simple timer</h1>
        <div className="Container">
            <button onClick={(this.decrementCount)} className="Btn"> -</button>

            <span>{this.state.count}</span>

            <button onClick={(this.incrementCount)} className="Btn"> +</button>

        </div>

        <div className="Container">
        <button onClick={(this.startTimer)} className="Btn">Start</button>
          <button onClick={(this.stopTimer)} className="Btn">End</button>
          <button onClick={(this.resetTimer)} className="Btn">Reset</button>
        </div>
































































      
        <Profile name={this.me.name} title={this.me.title} code={this.me.code} />
        
          
        <Skills code ={this.me.code} />

        <h3>Why i need a state</h3>

        <h4>Count={this.state.Count}</h4>

        <button onClick={()=>{
        
            this.setState(
             any =>{

                    return {
                      Count: any.Count +1
                    }
                    
                   
              },
              () => {
                console.log("clil",this.state.Count)
              }
            )
            
      }
        }>
          
          ADD</button>
        
        


        

      </div>


    );
  }
}

export default App;
