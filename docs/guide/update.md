---
title: Update
---
# Update the game

Unfortunately, Vercel and Netlify do not update automatic your game server. But you can manually update

Launch the following cmd in the directory of your repo.

```bash
git remote add upstream https://github.com/GeoGuess/Geoguess 
git fetch upstream
git merge -X theirs --allow-unrelated-histories --no-edit {VERSION}
```