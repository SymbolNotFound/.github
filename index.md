---
layout: home

hero:
  name: "Symbol Not Found"
  tagline: "Organization Homepage"
---


2024 has been a year of research and development &ndash; existing General Game
Playing systems studied and compared, limitations on the rules-based languages 
and variations on game/event loop design.  The following are in-progress works
that include a new programming language and demonstrations of its use.


## GEL: Goal Expression Language

A declarative, relational + functional language for defining rules of a game
or simulation.  Capable of expressing perfect-information abstract strategy
games, card &amp; dice games, partial-information (fog of war) strategy games,
knowledge (quiz &amp; word) games, and games about making new rules.  It is
suitable for any rules-based simulation in general &mdash; the initial focus is
on implementing well-known modern and ancient games, but it is capable of any
rules system with terminating conditions (under reasonable design constraints).

## Applications of GEL

Some initial applications of this programming language to demonstrate its potential:

### GGP Dojo

Listings of game rules, organized as a wiki.  Includes game definitions in other
game definition languages (GDL, ZRF, RBG, etc.) and general information about
how to program and interpret games in those systems.


### Tic-Tac-Topia

A demonstration of several variants on the classic and simple game Tic-Tac-Toe.

 * Tic-Tac-Holes (or Nine Holes, or Achi, or Tant Fant, or Shisima)
 * Tic-Tac-Shadow (players cannot see the location of their opponent's moves)
 * Tic-Tac-Tiles (closely related to number scrabble and Mahjong)
 * Tic-Tac-Tandem (players move simultaneously)
 * Tic-Tac-Janken (simultaneous moves with hand forms: Rock, Paper, Scissors)
 * Tic-Tac-Coterie (playing cards from the Set deck onto a 3 &times; 3 grid)
 * Tic-Tac-Thrice (dice-based actions on three independent grids)
 * Tic-Tac-Throw-Pie (classic rules but players attempt to lose, with pie rule)
 * Tic-Tac-Rainbow (pieces of different color pairs are moved or flipped)

The idea is that all of these are written with the same basic rendering code,
with the variations being entirely in the GEL rules specified for each game, as
well as the metagame (a 3 &times; 3 board where each cell is a separate game).


### DealMe.Cards

Deckbuilding, dealing formats and card game simulations for solitaire and group
play.  Can act as an oracle for card and dice games in GGP, such that the game
manager cannot expose any knowledge about the unviewed cards in a deck.

Decks are represented as a unique, g&ouml;delized, representation that makes a
uniform distribution straightforward to compute for a deck of any size.  


### Calvinball

A game development game, where players can collaboratively add and edit rules.
This uses the game-simulating environment as a simulation itself, making a game
of making games and providing an interactive development environment for logical
programming that has never been attempted before.


---

## Games Across Time

A blog about board games and the origins of the game mechanics found in them,
showing the development of board games through ancient times, the invention of
cards, the progress from stone and cloth to plastics and cardboard, and the
explosion of games coming out of global manufacturing and mass-production.


## Hexoban and Hexotrivia

The classic sokoban puzzle game on a hexagonal grid.

Trivia competition with a unique approach using a hexagonal grid.


## Word Duel

A variety of word games that you can share with friends, compete or cooperate.


## Number Scrabble

A simple game in a different algebraic form.  It represents the difficulty of
representing equality of games based only on game rules.  It also serves as a
place to write about the steps of launching a simple demo page, including the
basic rendering and interaction, as well as all those incidental steps (local
storage, commenting, email collection, etc.) while on a shoestring budget, so
that apps can be tested for market potential without sinking large resources.
