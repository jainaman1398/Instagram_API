import { Meteor } from "meteor/meteor";
import { HTTP } from 'meteor/http';

Meteor.methods({
    "get_fb_long_token"(shortToken) {
        let baseURL = "https://graph.facebook.com/v2.12/";
        let path = "oauth/access_token?grant_type=fb_exchange_token";
        let clientId = "102741830564284";
        let clientSecret = "f79f5ca6b2a7b0da499ada9bfcc61519";
        let apiURL = `${baseURL}${path}&client_id=${clientId}&client_secret=${clientSecret}&fb_exchange_token=${shortToken}`;
        let res = HTTP.call("get", apiURL);
        console.log("long_res : ", res.data);
        return res;
    }
});
