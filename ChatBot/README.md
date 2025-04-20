# A6: Chatbot

## Your name
Dayo Babatunde

## Your Glitch link
https://a6-keyblade-1.glitch.me/


## Describe your bot's character

My bot only cares about creating super humans in the most efficient way.

## How does the user know what to say to this bot How are you solving the blank slate problem?

He knows what to say by answering the given questions.

## How have your styled your page to best present this character? What scene or mood are you suggesting?

I am suggesting a more scientific mood with a black background and red and green tiles. In a lab red could repsent things like error and green could represent things like success. 
In some cases, the things under the hood may not be working, but you are still getting the result you want.

## Describe the first thing this bot can respond to.  What is the expressive range of what you say in response?

If the user say off at any point then the bot turns off


## Describe the second thing this bot can respond to

If the user says recalibrate at any point then the bot recalibrates


## Describe the third thing this bot can respond to

The user can add or remove abilites from their human which the bot will do


## Describe the fourth thing this bot can respond to

The user can decide to release the human into the world which the bot will


## Describe the fifth thing this bot can respond to

The bot will respond to non-sensical order with jests.



## What states does this bot move through? Is this a common social script? Why do the states connect like that?

from: origin, to: adding_abilities, off, recalibrate
from: adding_abilities, to: remove_abilities, complete, off, recalibrate
from: remove_abilities, to: adding_abilities, complete, off, recalibrate
from: complete, to: adding_abilities, end, off, recalibrate
from: end, to: adding_abilities, off, recalibrate
from: recalibrate, to: origin
from: off, to: origin




## In what ways does your bot obey or subvert the Gricean maxims

My bot obeys most the Gricean Maxims because it is direct with what it wants you to do in a clear, not so concise, way.

## What 3 other bots did you look at? What was interesting, notable or useful about them?

Emojibot, hauntedHouse bot, myBot (in class). These bots were useful because they really outlined the formatting I needed to create a bot that met all of the requirements


## List any resources (code, images, etc) you've used, and where you got them from

None

## List any help you got from classmates or websites, so that you can remember it for later

None