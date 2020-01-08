---
title: Your Top Songs in Spotify
date: "2019-07-31T23:46:37.121Z"
description: "A blog post detailing how I created a Spotify web app written in React."
tags: ["react", "spotify-api"]
draft: false
---

Being a daily user of Spotify and a huge proponent of analytics, I always look forward to my personal Spotify generated annual report which tells me what songs I have played the most, the artists that I keep coming back to, genres that I frequent and other statistics.

Early in July, I already wanted to know what my top tracks are and I couldn’t wait for that end of the year official Spotify report. So as a developer, I took matters into my own hands and decided to create a web app that does that so other people can use it too.

### Why React?

I wanted to use a modern front-end library to display the data fetched from Spotify in an aesthetic and user-friendly way.

### Why Spotify (and not Apple Music, Tidal, etc)?

I’ve been doing some research in the past about using the Spotify API so naturally it's my first choice.  I also think that there are more Spotify users because it’s device-agnostic, unlike Apple Music. And as for Tidal, only Jay-Z uses that service, so...

### The Steps

1. Connect to Spotify `(Spotify Auth)`
2. Fetch user data from Spotify's REST API `(axios)`
3. Display the data on the frontend `(create-react-app)`

*Optional*: Add feature that saves the user’s top songs in a specific playlist. This playlist should be updated accordingly when the user uses the web app.

**Takeaways**: For styling, I tried using SASS and CSS in JS but eventually settled with CSS Modules, which I think is personally the best way to handle CSS in React.

Here you can access <a href="http://toptrax.herokuapp.com" target="_blank">TopTrax</a>, or view its <a href="http://github.com/michaelignacio/toptrax" target="_blank">source code on Github</a>.