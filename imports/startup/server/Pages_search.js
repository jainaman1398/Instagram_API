import { Meteor } from "meteor/meteor";
import { HTTP } from 'meteor/http';
import {Token} from "../../api/store_token";

Meteor.methods({

    "pages_search_karo"(pagename){
        console.log("aman",this.userId);
       let yo= Token.findOne({userId:this.userId});
        console.log("yo",yo.page_token);
        let baseURL = `https://graph.facebook.com/v2.12/${yo.id}?fields=instagram_business_account&access_token=${yo.page_token}`;
        let res = HTTP.call("get", baseURL);
      //  console.log("long_res : ", res);
        let yoyo=res.data.instagram_business_account.id;
        console.log("yoyo",yoyo);

        let url=`https://graph.facebook.com/v2.12/${yoyo}?fields=business_discovery.username(${pagename}){followers_count,media_count,media{comments_count,comment,like_count,timestamp,caption}}
&oauth_token=${yo.page_token}`;

        let res1=HTTP.call("get",url);

        console.log(res1);
        return res1;
    }
})