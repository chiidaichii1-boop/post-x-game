# FLIP RUNNER — the agent builds a game from one prompt

[![make.fun](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/c/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/chiidaichii1-boop/post-x-game/rank.svg)](https://make.fun/c/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/chiidaichii1-boop/post-x-game/reward.svg)](https://make.fun/c/post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt. One button. One robot that flips gravity.

My AI agent built **FLIP RUNNER** — a tiny browser game — from a single prompt while I watched, and I posted the video of it on X for the make.fun bounty "The agent builds a game from one prompt".

The game itself lives in `../game/` (index.html + game.js + style.css): a little robot runs by itself, and SPACE / click / tap flips gravity so it dodges the spikes on the floor and the ceiling.

The video is at `../video/post-x-game.mp4` (38.5 s, 16:9): the prompt, the agent writing the code, the finished game running, and make.fun's referral end card with code `7g64vnx0`.

## The entry program

`main.ts` (added after the post) copies `POST.json` to `/output`. `POST.json` holds the address of the X post carrying the video.
