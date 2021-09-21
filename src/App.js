import React , {Component }from 'react';
import './App.css';
import  Profile from './components/Profile';
import Skills from './components/skills';
import Props from './components/Props';
import Form from './components/form/Form';
import Input from './components/Input';
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {

 
  me = {
    name:"babbbyrhrhtyrt" ,
    title:"Fullstack developer, fb ",
    code: "fullstack " 
};

// state = {
//   Count : 0 
// };


state = {
  name:"",
  count:0,


  
  country:'',
  bio: '',
  birthday: '',
};



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
handleButtonClick =(event)=>{

console.log("handleButton",event.target)

}
handleChange=(event)=>{
   this.setState({name:event.target.value})
  console.log(event.target.value)
}

handleFocus=(event)=>{

  console.log("i am focus")
}


handleBlur=(event)=>{

    if (! this.state.name){
      alert("please eneter name")
    }
    console.log("i am blur")

}

handleChange = (event) => {

   this.setState({
     
    [event.target.name]:event.target.value
  })
    
}

formHandler = event =>{
  event.preventDefault();
  const  data ={};

  data.name = event.target.name.value
  // data.email=event.target.email.value
  // data.password = event.target.password.value
   console.log(data);
  event.target.reset();
  
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

        <div className="">
        <button  onClick={(this.handleButtonClick)} className=""> Click me 
        </button>


        <br />

        <input
        type="text"
         placeholder="Enter your name" 
         className="" 
         value={(this.state.name)}
        onChange={(this.handleChange)}
        onFocus={(this.handleFocus)}
        onBlur={(this.handleBlur)}
        ></input>
<br />
<br />
        {this.state.name &&  <h3>Welcome, {(this.state.name)}</h3>}


        </div>

       
<div  >
<h1>Working with the forms</h1>
        <br />
   <Form />

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
        
        
<div>

<input onChange={this.handleChange}
       class="form-control "
        type='text'
        value={this.state.name} 
        name='name'
         placeholder='Tafghr'
         ></input>
        <select 
        value={this.state.country}
        onChange={this.handleChange} class="form-control  my-2 border-3  " name="country"
        
        >
        <option value="Bangladesh"> Bangladesh</option>
        <option value="Ban"> Ban</option>  
        <option value="Bangla"> Bangla</option>
        <option value="Bdesh"> Bdesh</option>
        <option value="Ba"> Ba</option>
        </select>
        <textarea 
        value={this.state.bio}
        onChange={this.handleChange}
        class="form-control " name="bio"
        placeholder="Tell me about urself"
        ></textarea>
<input
value={this.state.birthday}
onChange={this.handleChange}  type="date" name="birthday"></input>




</div>

        
<div>
<form>
               <input onChange={this.formHandler} className="form-control" type="text" name="name" placeholder="tanbir">

               </input>
               <input onChange={this.formHandler} type="email" name="email"
               placeholder="mymail!@hmail.com"
               className="form-control"></input>
                  <input onChange={this.formHandler} type="password" name="password"
               placeholder="*****"
               className="form-control"></input>
               <button onChange={this.formHandler} className="form-control my-2" type="submit">SUBMIT</button>
           </form>
</div>
      </div>


    );
  }
}

export default App;
