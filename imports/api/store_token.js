import {Meteor} from "meteor/meteor";
export const Token=new Mongo.Collection('tokens');

Meteor.methods({
    "tokens.insert"(id,token){
        return Token.insert({userId:this.userId,id:id,page_token:token});
    },
    "pages.check"(userId){
        return Token.findOne({userId:userId});
    }
});