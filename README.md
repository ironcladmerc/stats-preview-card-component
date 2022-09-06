# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

-   View the optimal layout depending on their device's screen size

### Screenshot

![](./screenshot.png)

### Links

-   Solution URL: [https://www.frontendmentor.io/solutions/stats-preview-card-component-with-nextjs-and-tailwind-NeDcGQiROy](https://www.frontendmentor.io/solutions/stats-preview-card-component-with-nextjs-and-tailwind-NeDcGQiROy)
-   Live Site URL: [https://stats-preview-card-component-kappa-amber.vercel.app/](https://stats-preview-card-component-kappa-amber.vercel.app/)

## My process

### Built with

-   Flexbox
-   [Tailwind](https://tailwindcss.com) - CSS Framework
-   Mobile-first workflow
-   [Next.js](https://nextjs.org/) - React framework

### What I learned

I learned to start out simple and build gradually. I had to build this twice, because the first time I was adding tailwind classes left and right, not knowing exactly what they were doing, and in the end I was left with a page that did not work the way I wanted it to, the image was resizing too much when making the browser larger.

So I started from scratch and did some searching on how flexbox works, and I found some good tips, and I used those to build a new page that works much better.

### Continued development

I continue to learn Tailwind and what the various classes do and how to use them.

### Useful resources

-   [Object fit - cover does not work](https://forum.freecodecamp.org/t/object-fit-cover-does-not-work/237039/3) - This helped me for getting the image to fill the entire div when expanded to a larger browser size. I learned I had to specify the height of the image to get object-cover to work. I used h-full, and that was enough to get it to start working.

-   [How to make div fill full height of parent in tailwind](https://stackoverflow.com/questions/63412303/how-to-make-div-fill-full-height-of-parent-in-tailwind) - This is an stackoverflow question which helped me understand how to use flex and flex-1 to get flex columns to be equal size.

-   [Mix Blend Mode](https://tailwindcss.com/docs/mix-blend-mode) - This shows how to blend an image and a background color together, which was necessary for this project.

## Author

-   Frontend Mentor - [@ironcladmerc](https://www.frontendmentor.io/profile/ironcladmerc)

-   Github - [@ironcladmerc](https://www.github.com/ironcladmerc)
