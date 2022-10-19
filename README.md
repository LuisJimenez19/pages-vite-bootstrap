# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot
# Mobile
![](./mobile-design.jpg)
# Desktop
![](./desktop-design.jpg)



## My process
```install
  terminal
  $npm create vite@name-proyect
  -framework => vanilla

  cd @name-proyect
  $npm install

  $npm i --save bootstrap @popperjs/core
  $npm i --save-dev sass

  -project structure
  $mkdir {src,src/js,src/scss}
  $touch src/index.html src/js/main.js src/scss/styles.scss vite.config.js

  -configure.vite
  import path from 'path'

  export default {
    root: path.resolve(__dirname, 'src'),
    resolve: {
      alias: {
        '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      }
    },
    server: {
      port: 8080,
      hot: true
    }
  


  -import bootstrap css and js into their respective file

  -link the js in the html

```
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Bootsrap
- vite


**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<div class="overflow-hidden">
        <footer class="row footer">
            <div class="col justify-content-center d-flex flex-column align-items-center py-5">
                <img class="logo-footer col-12" src="./images/logo-footer.svg" alt="">
                <div class="col-9 col-md-3 d-flex justify-content-around align-items-center py-5">
                    <a href="#" >About</a>
                    <a href="#" >Services</a>
                    <a href="#" >Projects</a>
                </div>
                <div class="col-5 col-md-2 d-flex justify-content-around align-items-center">
                    <!-- Social -->
                    <a href="#" >
                        <img src="./images/icon-facebook.svg" alt="">
                    </a>
                    <a href="#" >
                        <img src="./images/icon-instagram.svg" alt="">
                    </a>
                    <a href="#" >
                        <img src="./images/icon-twitter.svg" alt="">
                    </a>
                    <a href="#" >
                        <img src="./images/icon-pinterest.svg" alt="">
                    </a>
                </div>
                <div class="attribution position-absolute bottom-0 text-center fs-6 fs-md-3">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                    Coded by <a target="_blank" href="https://github.com/LuisJimenez19">Luis Angel</a>.
                </div>
            </div>
        </footer>
    </div>
```

```css
/* Variables propias */
/* fuente */
$font-barlow : 'Barlow';
$font-fraunces: 'Fraunces';

/* Colors */
// ### Primary

$Soft-red: hsl(7, 99%, 70%);
$Yellow: hsl(51, 100%, 49%);
$Dark-desaturated-cyan : hsl(167, 40%, 24%); /* (graphic design text) */
$Dark-blue : hsl(198, 62%, 26%); /* (photography text) */
$Dark-moderate-cyan : hsl(168, 34%, 41%);/* (footer) */
$fondo-footer:rgb(144,212,197);
// ### Neutral

$Very-dark-desaturated-blue: hsl(212, 27%, 19%);
$Very-dark-grayish-blue: hsl(213, 9%, 39%);
$Dark-grayish-blue: hsl(232, 10%, 55%);
$Grayish-blue: hsl(210, 4%, 67%);
$White: hsl(0, 0%, 100%);
```

## Author

- Website - [Luis Angel](https://luisjimenez19.github.io/desafios-frontend-mentor/)
- Frontend Mentor - [@LuisJimenez18](https://www.frontendmentor.io/profile/LuisJimenez19)


