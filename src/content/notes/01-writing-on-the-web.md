---
title: 'Writing on the web'
publishedDate: 2022-12-19
description: 'The obligatory first blog post — or "Hello world".'
slug: 'writing-on-the-web'
canonicalUrl: 'https://williamhzo.me/notes/writing-on-the-web'
publish: true
---

## Hello, World

After a few months of procrastinating, I've finally come around to building a blog. I see it as my little personal piece of the internet, which, unlike centralized social media, I fully earn.

In that sense, it's a place where I wish to experiment, where I'll try out some cool tech I'm interested in, sometimes breaking it, but always learning and having fun. I don't plan to build a massive audience (I wouldn't have the knowledge and skills anyway), this space is primarily for myself — when writing here I'll be the targetted audience, but if it can teach a thing or two to people or inspire them to do the same, then right on!

I'll share some technical stuff that I learn along the way, but also some fun, light, and less technical topics.

The past few months have been full of learning, and in light of the [recent events at Twitter](https://andy-bell.co.uk/elon-the-accidental-revolutionary/), catering our own personal space and blogging is becoming more appealing than ever.

## This website

I've owned a custom domain hosting a personal website for a couple of years now, pretty much ever since I learned how to code. Ever since the first iteration of this website I've wanted to build a habit of writing and publishing technical content on it, but never took the time to do it.

In the past weeks, I've rebuilt this website from scratch, with a completely new design and stack. The [previous version](https://v1.williamhzo.me) was built with Next.js, which is what I've been using at my previous full-time job for more than 2 years.

I've come to realize that defaulting to the same tech over and over again isn't a sane way of building stuff for the web. Do I need to ship this [250+ kB of client-side JavaScript](https://twitter.com/zachleat/status/1584995586918731776) for a content-focused static blog? I've been playing with [Astro](https://astro.build/) and loved the approach of only shipping zero to minimal necessary client-side JavaScript, which is what [Eleventy](https://www.11ty.dev/) has been pushing for years.

I was willing to experiment with this approach and also wanted to rebuild my personal website, perfect timing!

### The stack and approach

The end goal for this personal website is to showcase my work, interests, some pieces of writing, and knowledge that I wish to share in the open. In other words, a content-focused static website.

For this I chose [Astro](https://astro.build/) as Static Site Generator, with vanilla CSS based on [CUBE CSS](https://cube.fyi/) methodology, hosted on [Vercel](https://vercel.com/), with content served with local Markdown files.

The result is a 100 [Lighthouse](https://developer.chrome.com/en/docs/lighthouse/performance/performance-scoring/) score, with 0kB of client-side JavaScript.

### Moving forward

This website will always be a work-in-progress and will be redesigned regularly (Frontend devs, am I right?), but there are some features that I'd like to add in the next steps:

- using GitHub issues as a CMS (as described in [Swyx's blog post](https://swyxkit.netlify.app/moving-to-a-github-cms))
- publish an opinionated Astro blog template repo with the current set-up
- getting more confident with writing online 🙃
- and more...
