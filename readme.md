# Cours sur les articles
## Comment faire un article de journal
Ce dépôt sert à apprendre à gérer les propriétés html, css et le langage js

Exemple de code html :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Les posts, les articles...">
    <title>L'Equipe</title>
    <link rel="icon" type="image/png" href="./asset/icon1.png">
    <link rel="stylesheet" href="./css/style.css">

</head>
<body>
    <header>
        <div class="nav" role="navigation" aria-labelledby="menu">
            <ul id="menu">
                <li class ="firstli"><img src="./asset/icon1.png"   class="logo"></img></li>
                <li><a href="#article1">Article 1</a></li>
                <li><a href="#article2">Article 2</a></li>
                <li><a href="#article3">Article 3</a></li>
                <li><a href="#article4">Article 4</a></li>
            </ul>
        </div>
        <div class="img-header"></div>
        <hr>
    </header>
    <main>

```
### Exemple de code CSS

```css
@import url('https://fonts.googleapis.com/css2?family=Orelega+One&display=swap');

/* reset */
html{
    font-size: 62.5%;
    scroll-behavior: smooth;
    background: #222 url(https://upload.wikimedia.org/wikipedia/commons/8/89/PSG-Nantes_Parc_des_Princes_05.jpg)no-repeat fixed center center / cover;
}
body{
    font: 1.6rem 'Roboto', sans-serif;
    margin: 0;
}
*{
    box-sizing: border-box;
}
h1,h2,h3,h4,p,figure,ul,ol{
    margin: 0;
    font-weight: 300;
    padding: 0;
    list-style: none; 
}
a{
    text-decoration: none;
    color: #222;
}
:root{
    --color-default: #ccc;
    --color-good: #2b7dc0;
    --color-event: #000000;
    --color-header: #e23131;
}
```
### Exemple de code js

```js
document.addEventListener("DOMContentLoaded",()=>{
let btn = document.querySelector(".btn")
let hide1 = document.querySelector(".hide1")
let hide2 = document.querySelector(".hide2")
let hide3 = document.querySelector(".hide3")
let hrhide1 = document.querySelector(".hr_hide1")
let hrhide2 = document.querySelector(".hr_hide2")
let hrhide3 = document.querySelector(".hr_hide3")
let button = document.querySelector("button")
let hrhide0 = document.querySelector(".hr_hide0")

/*déploiement des autres articles*/
btn.addEventListener("click",(e)=>{
    button.classList.toggle("moins")
    hide1.classList.toggle("app1")
    hide2.classList.toggle("app1")
    hide3.classList.toggle("app1")
    hrhide1.classList.toggle("hr_app")
    hrhide2.classList.toggle("hr_app")
    hrhide3.classList.toggle("hr_app")
})

})
