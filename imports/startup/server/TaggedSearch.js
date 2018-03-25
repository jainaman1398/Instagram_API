import { Meteor } from "meteor/meteor";
import { HTTP } from 'meteor/http';
import {Token} from "../../api/store_token";


Meteor.methods({
    "tagged_search"(){
        let yo= Token.findOne({userId:this.userId});
        console.log("yo",yo.page_token);
        let baseURL = `https://graph.facebook.com/v2.12/${yo.id}?fields=instagram_business_account&access_token=${yo.page_token}`;
        let res = HTTP.call("get", baseURL);
        let yoyo=res.data.instagram_business_account.id;
        console.log("yoyo",yoyo);
        let hi= Token.findOne({userId:this.userId});
        console.log("ok report",yo.long_token);
        let url=`https://graph.facebook.com/v2.12/${yoyo}/tags?oauth_token=${yo.long_token}`;
     
        let res1=HTTP.call("get",url);
        console.log("tagged",res1);
        return res1;
    }  
})