var Twit = require('twit');
var Twitterbot = require('node-twitterbot').TwitterBot;

var Bot = new TwitterBot({
  consumer_key: process.env.BOT_CONSUMER_KEY,
  consumer_secret: process.env.BOT_CONSUMER_SECRET,
  access_token_key: process.env.BOT_ACCESS_TOKEN,
  access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

var phraseArray = [ "Yeah baby I hear the blues a callin'",
                    "Tossed salads and scrambled eggs",
                    "And maybe I seem a little confused",
                    "Well, maybe, but I've got you pegged",
                    "Still I don't know what to do",
                    "with these tossed salads and scrambled eggs",
                    "They're callin' again",
                    "Mercy",
                    "Frasier Crane has left the building",
                    "Scrambled eggs all over my face!",
                    "Ha-HA!"
                            ];

const chooseRandom (myArray) => {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

var phrase = chooseRandom(phraseArray);

Bot.tweet(phrase);
