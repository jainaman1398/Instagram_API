import { Meteor } from "meteor/meteor";
import { HTTP } from 'meteor/http';

Meteor.methods({
    "get_page_access_token"(longToken) {
        let baseURL = "https://graph.facebook.com/me/accounts";
        let apiURL = `${baseURL}?access_token=${longToken}`;
        let res = HTTP.call("get", apiURL);
        console.log("long_res : ", res.data);
        return res;
    }
});