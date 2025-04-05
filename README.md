# Project 2: High-Availability Portfolio with OAuth and GitHub


## Part 1: 
In this part I secured my portfolio using NextAuth Library and added Github contribution bar with CDN.

To secure my portfolio, first I install NextauthJS using command 
```bash
npm install next-auth
```
I created a file in app/api/[..nextauth] options and Auth route.tsx to define what provider (thirdparty Oauth) I will use

In `option.tx` include the following content

```typescript
...
        OsuProvider({
            clientId: process.env.OSU_ID as string,
            clientSecret: process.env.OSU_SECRET as string,
          }),
          DiscordProvider({
            clientId: process.env.DISCORD_ID as string,
            clientSecret: process.env.DISCORD_SECRET as string,
          }),
          GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
   
            BattleNetProvider({
              clientId: process.env.BATTLENET_ID as string,
              clientSecret: process.env.BATTLENET_SECRET as string,
              issuer: "https://us.battle.net/oauth"

            })
        
    ],

...
```
which defind that I used the provider of BattleNet, Github, OSU, Discord.

However, before I added the provider I need to go to thier website and create application and get the ClientID and ClientSecret from the third party website


After defind all of the provider, I created a file call `middleware.tx` which nextAuth use to enforce all of the user who enter website to login using one of the option I provided (all provider)

Done, I created I signIn option using NextAuth with thirdparty website (provider)

Next, I install the Github contribution element using Github
```text
https://cdn.jsdelivr.net/gh/imananoosheh/github-contributions-fetch@latest/github_calendar_widget.js"
```
I added the element that will act as a github contribution bar:
```typescript
<div id="calendar-component" username="Getmeoutt" theme-color="#818cf8" background-color="#141311"></div>
```

done! I successfully added the github contribution bar