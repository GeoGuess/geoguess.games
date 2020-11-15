
# Update the game


Unfortunaly, Vercel and Netlify not update automatic your game server. But you can manualy update

Launch the following cmd in the directory of your repo.
```bash
git remote add upstream https://github.com/GeoGuess/Geoguess 
git fetch upstream
git merge -X theirs --allow-unrelated-histories {VERSION}
```