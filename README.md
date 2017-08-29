## Website Performance Optimization portfolio project

### Getting Started

Clone the project from github:

  ```bash
  $> git clone https://github.com/hconley6695/mobile-portfolio.git
  ```

Serve the site:
  ```bash
  $> python -m SimpleHTTPServer 8000
  ```
Point your browser to your local host:
  ```bash
  $> localhost:8000/dist/index.html
  ```
OR

Go to <a href="https://hconley6695.github.io/mobile-portfolio/">https://hconley6695.github.io/mobile-portfolio/</a>

### Optimizations that I have done:

#### General
* Minified html, css, and javascript files using Gulp
* Compressed images using Gulp

#### Index.html
* Defered loading of stylesheets
* Loaded google fonts through a Web Font Loader asynchronously
* Compressed images on page
* Put a set width and height on images on page

#### Pizza.html
* Add "transform" and "will-change" to the class "randomPizzaContainer"  and "mover" for browser to anticipate the changes
* Changed all instances of querySelector and querySelectorAll to the more efficient getElementById and getElementByClassName depending on whether a class or id is needed.
* Changed out document.body request in "for" loop in changePizzaSizes function.  This prevents the browser from having to rerender the page every time the loop is run.  Added a style "for" loop within the changePizzaSizxes function to set the width, preventing the browser from having to render the page in between setting the styles.
* Changed out document.body request in "for" loop in updatePositions function to prevent browser from rerendering the page every time it loops.
* Moved declarations of variables outside "for" loop on DOM content load. Defined set number of pizzas in browser window.







