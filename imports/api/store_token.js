import {Meteor} from "meteor/meteor";
export const Token=new Mongo.Collection('tokens');

Meteor.methods({
    "tokens.insert"(id,long_token,page_token){
        return Token.insert({userId:this.userId,id:id,long_token:long_token,page_token:page_token});
    },
    "pages.check"(userId){
        return Token.findOne({userId:userId});
    }
});