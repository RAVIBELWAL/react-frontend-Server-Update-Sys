import React,{Component} from "react";

class Login extends Component{

constructor(props)
{
    super(props);
    this.state={

    }
}



render(){
    return(
    <div className="form">
    
    <div className="login">Login </div>

    <form>
      <div className="input-container">
        <label>Username : </label>
        <input type="text" name="uname" placeholder="Username" required />
        
      </div>
      <div className="input-container">
        <label>Password : </label>
        <input type="password" name="pass" placeholder="password" required />
        
      </div>
      <div className="button-container">
        <input type="submit" />
      </div>
    </form>
  </div>
  )}
}

export default Login;