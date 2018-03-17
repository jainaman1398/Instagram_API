import React ,{Component} from "react";

export default class Fblogin extends Component{
    constructor(props){
          super(props);
    }

    login()
    {
        window.FB.login(function (response) {
            if (response.authResponse) {
                console.log("small token",response.authResponse.accessToken);
                console.log("userID",response.authResponse.userID);
                let token=response.authResponse.accessToken;
                let userID=response.authResponse.userID;
                        Meteor.call("get_fb_long_token",token, (err, res) => {
                            if(err) {
                                console.log("long err ", err);
                            } else {
                                console.log("long Token ", res.data.access_token);
                                   Meteor.call("get_page_access_token", res.data.access_token,(err,res)=>{
                                       if(err)
                                           throw err;
                                       else
                                           console.log("Page Token",res.data.data[0].access_token);
                                   })
                            }
                        });
            }
            else {
                console.log('User cancelled login or did not fully authorize.');
            }
        })
    }

/*    check_login()
    {
        window.FB.login(function(response) {
            if (response.status === 'connected') {
                // Logged into your app and Facebook.
            } else {
                this.login();
            }
        });
    }*/

    /*componentDidMount(){
        this.login();
    }*/

    render(){
        return(
            <div>
                <button className="btn btn-primary " onClick={this.login.bind(this)}>Login</button>
            </div>
        )
    }
}