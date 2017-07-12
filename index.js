import React from 'react';
import ReactDOM from 'react-dom';
import './signin.css';
import $ from 'jquery';

var SignIn = React.createClass({

getInitialState: function(){
        return {
          data :[]
        };
  },

ApiCall () {
  var url = this.props.url;
      $.ajax({
      url: url,
      dataType: 'json',
      cache:false,
      success: function(data) {
        this.setState({data: data});
        console.log('success');
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
        console.log('fail to get');
      }.bind(this)
    });
  },

componentDidMount : function(){

  this.ApiCall();

},

  render() {
    return (
     
      /*<div className="SignIn">
 		     <div className="imgcontainer">
         <img src="http://lorempixel.com/200/200/" alt="Avatar" className="avatar"/>
         </div>

         <div class="container">
         <label><b>Username</b></label>
         <br />
         <input type="text" placeholder="Enter Username" name="uname" required />
         <br />
         <label><b>Password</b></label>
         <br />
         <input type="password" placeholder="Enter Password" name="psw" required />
         <br />
         <button type="submit" className="SubmitBtn">Login</button>
         <br />
         <input type="checkbox" /> Remember me
         </div>
      
  		  <div className="newcontainer" >
         <button  className="cancelbtn">Cancel</button>
         <br />
         <span class="psw">Forgot <a href="#">password?</a></span>
  		 </div>
       
	   </div> 
    */
    <div>
        <ul>
              <li>{this.state.data.firstname}</li>
              <li>{this.state.data.lastname}</li>
        </ul>
    </div>


    );
  }
});

ReactDOM.render(
  <SignIn url="http://192.168.43.239:3001/api/stuff.json" />,
  document.getElementById('root')
  );
