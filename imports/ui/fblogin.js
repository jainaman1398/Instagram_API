import React ,{Component} from "react";
import {Token} from "../api/store_token";

export default class Fblogin extends Component{
    constructor(props){
          super(props);
          this.state={
              query_string:" "
          };
    }

    aj(event){
        console.log(event.target.value);
        this.setState({query_string:event.target.value});
    }

    login() {
            window.FB.login(function (response) {
                    if (response.authResponse) {
                        console.log("small token", response.authResponse.accessToken);
                        console.log("userID", response.authResponse.userID);
                        let token = response.authResponse.accessToken;
                        let userID = response.authResponse.userID;
                        Meteor.call("get_fb_long_token", token, (err, res) => {
                            if (err) {
                                console.log("long err ", err);
                            } else {
                                console.log("long Token ", res.data.access_token);
                                Meteor.call("get_page_access_token", res.data.access_token, (err, res) => {
                                    if (err)
                                        throw err;
                                    else {
                                        console.log("Page Token", res.data.data[0].access_token);
                                        Meteor.call("tokens.insert",res.data.data[0].id, res.data.data[0].access_token,
                                            (err, res) => {
                                                console.log(res);
                                            })
                                    }
                                })
                            }
                        });
                    }
                    else {
                        console.log('User cancelled login or did not fully authorize.');
                    }
                }.bind(this), {
                    scope: 'manage_pages, read_insights, pages_show_list,instagram_manage_insights,instagram_basic',
                    return_scopes: true
                }
            )
    }

    click(){
         Meteor.call("pages_search_karo",this.state.query_string,(err,res)=>{
             console.log(res);
         })
    }


    render(){

        return(
            <div>
                <button className="btn btn-primary " onClick={this.login.bind(this)}>Login</button>
                <input value={this.state.query_string} placeholder="Page Search" onChange={this.aj.bind(this)}/>
                <button className="btn btn-success" onClick={this.click.bind(this)}>Search Pages</button>
            </div>
        )
    }
}