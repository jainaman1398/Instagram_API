import React,{Component} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Tracker} from "meteor/tracker";
import Signup from "../../ui/Signup";

export default class AppMain extends Component{
    constructor(props){
        super(props);
        this.state={auth:false};
    }

    componentDidMount(){
        Tracker.autorun(()=>{
            let auth=!!Meteor.userId();
            this.setState({auth});
        });
    }

    render(){
        return(
            <div>
                {this.state.auth ? <App/> :<Signup/>}
            </div>
        )
    }
}






Meteor.startup(()=>{
    ReactDOM.render(<AppMain />,document.querySelector('.render-target'));
})