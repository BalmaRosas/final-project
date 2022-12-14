![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# final-boiler-plate

This template should help get you started developing the final project running on Vue 3 with the composition API, Pinia as a state management tool, vue router, vite and lastly Supabase running on the backend.

This is meant as an advanced starter ready to plug in your supabase variables and run directly on a local server already connected to your Supabase instance. 

You are given some functions to see how the supabase ecosystem works with Vue and more specifically, pinia as a state management tool.

You can add any CSS framework of your liking like tailwindCSS, Bootstrap, MaterialUI or many of the cool libaries that exist in the web. 

## Important
This app is not setUp to be deployed to a production environment like vercel or netlify. 

Friday on August 19 we will look at how can we deploy this app to Vercels ecosystem.


## Project Setup

```sh
npm install
```

## Set Up your Environment Variables from Supabase located at the root folder of the project

```sh
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY 
```
#### Once you have added your environment variables, head to your .gitIgnore file located at the root folder and uncomment the .env file naming to avoid sharing any private access keys to your database

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
## SCHEDULE

### DAY 1 - August 18th
> review steps to take & structure

> create database for users & tasks in SupaBase

> start sign in & sign up forms logic

### DAY 2 - August 19th
> link database with forms for users to register

> create Nav component with logout

> finish logout logic

### DAY 3 - August 21
> login styling

> signup styling

### DAY 4 - August 22
> create home template

> create new task form

> send new task to supabase

### DAY 5 - August 23
> finish sending new task to supabase

> bring existing taks form supabase

> delete tasks

### DAY 6 - August 24
> edit tasks

> mark tasks as completed (toggle)

### DAY 6 - August 24
> edit tasks

