import React,{Component} from "react";

import Fblogin from "../../ui/fblogin"
import Signup from "../../ui/Signup";

export default class App extends Component{
    constructor(props){
        super(props);
    };

    login(){
        window.fbAsyncInit = function() {

            window.FB.init({
                appId      : '102741830564284',
                cookie     : true,
                xfbml      : true,
                version    : '{latest-api-version}'
            });

            FB.AppEvents.logPageView();

        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/all.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    componentDidMount(){
        this.login();
    }

    render() {

        return (
            <div>
                <br/>
                <Fblogin />
            </div>
    )
    }
}



