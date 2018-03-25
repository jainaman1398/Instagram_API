import React,{Component} from "react";
import {Accounts} from 'meteor/accounts-base';

export default class Signup extends Component{

    constructor(props){
        super(props);
        this.state={email:"",password:"",err:""}
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    onChangeEmail(event){
        this.setState({email:event.target.value,err:""});
    }

    onChangePassword(event){
        this.setState({password:event.target.value,err:""});
    }

    submitForm(){
        let {email,password}=this.state;
        if(!email || !password){
            this.setState({error:"input missing"});
            return;
        }
        Accounts.createUser({email,password},(err)=>{
            if(err)
                console.log(err);
            else {
                console.log("done");
                this.setState({email:"",password:"",err:""});
            }
        })
    }


    render(){
        return(
            <div>
                <br/>
                <label>UserName</label>
                <input value={this.state.email} type="text" onChange={this.onChangeEmail} />
                <br/>
                <label >PassWord</label>
                <input value={this.state.password} type="password" onChange={this.onChangePassword} />
               <br/>
                <button  onClick={this.submitForm}>Submit</button>
            </div>
        )
    }
}