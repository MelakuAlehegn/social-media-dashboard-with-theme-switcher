# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Links

- Solution URL: [solution](https://github.com/MelakuAlehegn/social-media-dashboard-with-theme-switcher)
- Live Site URL: [Live URL](https://eloquent-pudding-0c85fd.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- Flexbox
- Mobile-first workflow

### What I learned

I have learned how to use Tailwindcss to create complicated dashboards and responsive layouts
Apart from that I have utilized using the ```dark``` varient to create dark mode of layouts

```js
const darkModeToggleButton = document.querySelector('#dark-mode-toggle-button');
const btn = document.querySelector('#btn')

darkModeToggleButton.addEventListener('click', () => {
    setTimeout(() => {
        document.documentElement.classList.toggle('dark');
    }, 300);
});
```

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/melakualehegn)
- Twitter - [@yourusername](https://www.twitter.com/melakuA5)
