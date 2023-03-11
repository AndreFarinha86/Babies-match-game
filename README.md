# Milestone Project 2 - Babies Matching Game

## Description

The babies matching game is an interactive game that can be played by all ages alone or in a group and fun way to test memory skills. The game has three different difficulty levels.

This game was inspired by a game that I used to play when I was a kid and the theme is in honor of my baby daughter.

[View the live project here.](https://andrefarinha86.github.io/Babies-match-game/)

![Am I Responsive layout](assets/images/read-me-responsive.png)

---

## User Experience (UX)

### Goals

*****

---

### Design

*****

 ---

### Wireframe


---

## Features

- 



---

## Technologies Used

In this project the following technologies have been used.

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

- [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Yellowtail' font for Game title, 'Heebo' font for buttons and 'montserrat' font  for text in general into the style.css file which is used on all pages throughout the project.

- [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on website title to add icons for aesthetic.

- [Hover.css:](https://ianlunn.github.io/Hover/)
    - Hover.css was used on the buttons to add the float transition while being hovered over.

- [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

- [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.

- [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the wireframes during the design process.

- [Google Chrome Development Tools:](https://developer.chrome.com/docs/devtools/)
    - Google Chrome Development Tools was used for testing code on various device sizes during development and debugging.

---

## Testing

Along the development of the project regular testing were carried out. And the pages were reloaded several times after each addition and modification.

1. This website is responsive to all screens sizes down to 280px wide and was tested by using the devtools device toolbar for different devices.

2. The navigation buttons were tested and all work well.

3. Modals were tested and all work well and are responsive to different screen sizes.

4. All game leves were tested and all work well, cards are flipping, keep revealed if it matches and hide if it doesn't, moves are increasing with each flipped card and time is counting down. Gameover Modal is popping when time is finished before all cards are revealed and win modal is popping when all card are revealed before time is finished. When the reset button is clicked, moves will reset to zero, revealed cards will be hidden, and time will reset to initial.


### Validator Testing

5. The website code was both tested, manually and automatically (using the URL link) for HTML and CSS, through W3C Markup Validator and W3C CSS Validator Services, and  manually tested for JavaScript through JSHint which were used to validate the project and to ensure there were no syntax errors in the project.

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/) - [Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fandrefarinha86.github.io%2FBabies-match-game%2F)

- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fandrefarinha86.github.io%2FBabies-match-game%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

- JavaScript
    - No errors were found when passing through the official [(JSHint) validator](https://jshint.com/) and the following metrics were returned:
        - There are 21 functions in this file.
        - Function with the largest signature take 2 arguments, while the median is 0.
        - Largest function has 13 statements in it, while the median is 4.
        - The most complex function has a cyclomatic complexity value of 5 while the median is 1.
        
        - 49 warnings
        
        - One unused variable

6. Lighthouse Testing - Accessibility 
 - The chosen colors and fonts were confirmed that are easy and accessible by running it through lighthouse in devtools.
    - Lighthouse Mobile

    ![Mobile lighthouse report](assets/images/read-me-lighthouse-report-mobile.png)

    The performance is not great on mobiles due to the format of the images used on the site.

    - Lighthouse Desktop

    ![Desktop lighthouse report](assets/images/read-me-lighthouse-report-desktop.png)


### Bugs

- Along the website development bugs were identified and resolved with assistance of Devtools.

- When the project was deployed to GitHub Pages I have noticed that images for the card front faces weren't loaded, the front faces being empty when cards flipped. With the help of my mentor and Devtools support we figured out that the error was that the file paths was incorrect:
"../assets/images" supposed to be "./assets/images"

### Unfixed Bugs

No unfixed bugs were found.

---

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows:
    - In the GitHub repository [here](https://github.com/AndreFarinha86/Alentejano-Wines), navigate to the Settings tab;
    - From the source section drop-down menu, select the Master Branch;
    - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://github.com/AndreFarinha86/Babies-match-game)

---

## Credits

### Code

All code was cretead by the developer, guided and inspired by the [Love Maths](https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode/tree/master/01-putting-the-basics-in-place/04-lets-get-stylish) from code Institute, [w3schools](https://www.w3schools.com/), [stackoverflow](https://stackoverflow.com/) and online divers pages and videos.


### Content and Media

All content and photos were used from the online sources such:
- [dreamstime](https://www.dreamstime.com/)
- [pexels](https://www.pexels.com/)
- [Google search engine](https://www.google.com/)


### Acknowledgements

- To my mentor, [Jack Wachira](https://github.com/iamjackwachira), for support me along the project, provide the required assistance and guide me in the right direction.
- The Slack community. All the help, support and information available from other students is really a great tool.

---

