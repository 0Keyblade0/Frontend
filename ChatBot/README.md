# Chatbot – *Superhuman Synthesizer*

**Created by:** Dayo Babatunde  
**Live Demo:** [https://a6-keyblade-1.glitch.me/](https://a6-keyblade-1.glitch.me/)

## Overview

This interactive chatbot helps users create the most efficient super humans possible. Set in a sci-fi lab environment, it guides users through enhancement decisions while reacting dynamically to commands.

## Bot Personality

The bot is focused, analytical, and driven by optimization. It disregards small talk and focuses purely on genetic and ability-based enhancements.

## Interaction Design

Users can interact using specific phrases:
- **"off"** – shuts down the bot.
- **"recalibrate"** – resets the bot to its original state.
- **Add/Remove abilities** – customizes the human prototype.
- **Release** – sends the human into the world.
- **Nonsense input** – triggers sarcastic or playful replies.

## Visual Style

Styled with a dark theme to resemble a lab environment:
- **Red tiles** for errors, warnings, or caution.
- **Green tiles** for success or confirmation.
This theme reinforces a clinical, high-tech mood.

## Bot States

The chatbot progresses through several defined states:
- `origin → adding_abilities → remove_abilities → complete → end`
- At any point, users can issue `off` or `recalibrate` to change course.
- Transitions are designed to reflect logical enhancement phases.

## Design Considerations

The bot mostly follows conversational principles (Gricean maxims), but introduces quirks and jests for unexpected input. This gives it personality while keeping interactions functional.

## Inspirations

This project drew inspiration from:
- **Emojibot**
- **HauntedHouse Bot**
- **myBot (class demo)**

These examples helped shape formatting, flow, and interaction ideas.
