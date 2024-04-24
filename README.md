# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)




## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference

### Screenshot

![img](./ScreenShot/Frontend%20Mentor%20Calculator%20app.png)


### Links

- Solution URL: [Solution URL here](https://github.com/Karan551/Calculator_Project)
- Live Site URL: [Live site URL here](https://karan551.github.io/Calculator_Project/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow



### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
 <div class="theme-section">
        <h1 class="pl-4">calc</h1>
        <div class="theme-toggle">
          <h3 class="text-upper mx-2">Theme</h3>
          <div class="input-wrapper">
            <input type="radio" checked name="theme" id="theme-1" value="0" />
            <label for="theme-1" class="theme-1">1</label>

            <input type="radio" name="theme" id="theme-2" value="1" />
            <label for="theme-2" class="theme-2">2</label>

            <input type="radio" name="theme" id="theme-3" value="2" />
            <label for="theme-3" class="theme-3">3</label>
          </div>
        </div>
      </div>
```
```css
body {
    background-color: var(--main-background);
    color: var(--keys-white-color);
    min-height: 100vh;
    display: flex;
    font-family: "League Spartan", sans-serif;
}

.container {
    margin: 2rem 0;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
}

```
```js
function updateTheme(index) {
    if (index === "0") {
        cssLink.setAttribute('href', ``);
    } else {
        cssLink.setAttribute('href', `./css/theme_${index}.css`);
    }
}
```

### Useful resources

- [Example resource 1](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - This helped me very much. I really liked this pattern and will use it going forward.
- [Example resource 2](https://javascript.info/dom-nodes) - This is an amazing article which helped me finally understand DOM Tree. I'd recommend it to anyone still learning this concept.










