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
// Now we setup a function, chooseRandom, which chooses a number between 0 and the total number of items in the array. The resulting number is then returned.
const chooseRandom = (myArray) => {
  return myArray[Math.floor(Math.random() * myArray.length)];
}
//We then assign the returned index value to a variable.
var phrase = chooseRandom(phraseArray);
//Finally, we run a method which is built-in to one of the packages (Twitterbot) that we required above. This method creates a tweet with the contents of the selected phrase.
Bot.tweet(phrase);
