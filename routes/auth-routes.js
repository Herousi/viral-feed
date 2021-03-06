// const router = require('express').Router();
// const passport = require('passport');
// const path = require('path');
// const models = require('../models');
// const TwitterStrategy = require('passport-twitter').Strategy;
// require('dotenv').config();


// //Twitter Auth
// router.get('/twitter',passport.authenticate('twitter'));

// //Twitter Callback
// router.get('/twitter/callback',
//  passport.authenticate('twitter',
//  {successRedirect:'/',
//  failureRedirect:'/auth/twitter/failed'}));


// //Twitter Success - COMPLETE WHEN REDIRECT ROUTE IS BUILT 
// //(display tweet that user wants to like to retweet)
// // router.get('/twitter/success', (req,res)=>{
// // console.log('AUTH SUCCESS ROUTE')
// //  res.sendFile(path.join(__dirname,'build/index.html'));
// // })

// //Twitter Failed
// router.get('/twitter/failed', (req,res)=>{
// console.log('AUTH FAILED ROUTE');
// res.send('AUTH FAILED');
// })

// // Configure the Twitter strategy for use by Passport.

// passport.use(new TwitterStrategy({
//     consumerKey: process.env['TWITTER_CONSUMER_KEY'],
//     consumerSecret: process.env['TWITTER_CONSUMER_SECRET'],
//     callbackURL: '/auth/twitter/callback'
// },
//     function (token, tokenSecret, profile, cb) {
//         console.log("USER AUTHENTICATED!")
//         //console.log(profile);
//         models.userInfo.findOrCreate({ 
//             where:{
//                 userID: profile.id,
//                 userName: profile.username,
//                 displayName: profile.displayName
//                 } 
//                 }).then ((user, err) =>{
//                     if (err){
//                         console.log("ERROR IF")
//                         return cb(err);
//                     }
//                     console.log("OUTSIDE ERROR IF")
//                     cb(null,user);
//         });
//     }
//     ));


// // Configure Passport authenticated session persistence.
// passport.serializeUser(function (user, cb) {
//     cb(null, user);
// });

// passport.deserializeUser(function (obj, cb) {
//     cb(null, obj);
// });


// module.exports = router;