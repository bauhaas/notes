---
title: Cornucopia
layout: doc
outline: deep
---

# Cornucopia

Some of my notes and ideas to develop Cornucopia.

## Why

The initial idea was to log all the movies I've seen. A bit similar to why I started these notes. I've started using Excel. Then used Notion and now I'd like to have my own system. All the existing platforms are not fitting my needs as I want. There is too much bloat and not enough flexibility.

Including the movie tracking, I would like to add stats like hours watched, % of an actor's filmography watched. Bookmarks for movies I want to see. Maybe a log system like Github commits grid would be fun. We'll see

## Notes

### Initial Features

- I want to have a simple and efficient way to log the movies I've seen.
- I want to have a way to track the time I've spent watching movies.
- I want to have a way to track the % of an actor's filmography watched.
- I want to have a way to bookmark movies I want to see.
- I want to be able to customize the section displayed with settings.

I'm using the [tmdb API](https://www.themoviedb.org/documentation/api) to get the movies informations.

Stack:

- React with tailwindcss using shadcnui components
- Nestjs
- Postgres with Prisma hosted on [Supabase](https://supabase.io/)

The project is hosted on [Vercel](https://vercel.com/)

### Ideas dump
