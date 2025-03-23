// i kompendiet står der at koden kan optimeres 
// ved at flytte navigationen/menuen til sin egen klasse
// og ved at flytte indholdet fra modal eventlisteneren til sin egen klasse
// men det har jeg valgt ikke at gøre, fordi jeg er doven
// i get the point though

import gsap from "gsap";
import ChangeContents from "./ChangeContents";

class ShowActor {
  constructor(data) {
    // tjekker om dataObject-dataen bliver sendt fra app.js
    console.log(data);

    /* #region  NAVIGATION */
    // calling the ChangeContents-class
    const CC = new ChangeContents();

    // creating the nav-element with the id #nav
    const navigation = document.createElement("nav");
    navigation.id = "nav";
    document.body.appendChild(navigation);

    // creating the ul-element with the id #ul
    const unorderedList = document.createElement("ul");
    unorderedList.id = "ul";
    navigation.appendChild(unorderedList);

    // creating the li-elements with a forEach-loop used on the data
    // data = dataObject
    // also using a callback function: ()=>{}
    data.forEach((item, index) => {
      const listItem = document.createElement("li");
      listItem.className = "li";

      // instead of using innerHTML to write stuff inside the tags
      // we use textContent
      // item.name tager fat i vores dataObject-data,
      // her tager den fat i the key, name,
      // so the value is written in the listItem.textContent (the innerHTML of the li-element)
      listItem.textContent = item.name;

      // the li-elements get the attribute, data-index
      // data-index: så vi kan tilgå data igennem en eventListener - kan få fat i data der matcher data-index
      // the data-index value = the index-number from the dataObject-data,
      // so the first object in the array/the first li-element will have the index-number, 0
      listItem.setAttribute("data-index", `${index}`);

      unorderedList.appendChild(listItem);

      // an eventlistener which calls the function which changes the data
      // e = event = eventhandler objekter = man sender eventen med (den hed e i kompendiet)
      // item = data
      listItem.addEventListener("click", (event) =>
        CC.changeContent(event, item)
      );
    }); // END data.forEach
    /* #endregion NAVIGATION */

    /* #region  CARD */
    // creating a section-element with the id, #cardSection
    // the section is for placing the card in the right position (see: scss)
    const cardSection = document.createElement("section");
    cardSection.id = "cardSection";
    document.body.appendChild(cardSection);

    // creating a div-element with the id, #cardDiv
    // the div is for rotating the card (see: scss)
    const cardDiv = document.createElement("div");
    cardDiv.id = "cardDiv";
    cardSection.appendChild(cardDiv);

    // creating 4 divs: headline, imagecontent, content, info
    // first creating an array with the id-names for the divs
    const idArray = ["headline", "imageContent", "content", "info"];
    // creating a div for each item in the array
    // with a callback function which sends in the id-name and the index-number
    idArray.forEach((idArrayElement, index) => {
      const cardContentDiv = document.createElement("div");
      cardContentDiv.id = idArrayElement;
      cardDiv.appendChild(cardContentDiv);
    }); // END idArray.forEach

    // adding an image to the imageContent-div
    // the image will depend on the dataObject-data, but I didn't add that yet
    const Image = document.createElement("img");
    Image.id = "Image";
    // jeg tænker at src senere bliver gjort dynamisk
    Image.src = "../assets/ninja.png";
    // put the img-tag inside the imageContent-div
    document.querySelector("#imageContent").appendChild(Image);

    // MODAL
    // TODO: consider changing from div to article and p-tags
    /* #region  MODAL */
    // creating a child-div for the #info-div
    const infoChild = document.createElement("article");
    infoChild.id = "infochild";
    document.querySelector("#info").appendChild(infoChild);

    // creating two child-divs for #infochild
    const strength = document.createElement("p"); // to display info about the card-character's strength
    strength.id = "strength";
    infoChild.appendChild(strength);

    const lives = document.createElement("p"); // to display the card-character's lives
    lives.id = "lives";
    infoChild.appendChild(lives);

    // eventlistener on card that will make modal show up when card is clicked
    cardDiv.addEventListener("click", (event) => {
      // if you are not on the default card the modal will show
      if (CC.currentIndex > -1) {
        document.querySelector("#info").style.display = "block";
      }

      // gsap animation to make it look cool when the modal appears
      gsap.to("#info", {
        duration: 0.05,
        rotate: 10,
        scale: 1.3,
        repeat: 3,
        transformOrigin: "center",
        yoyo: true,
      });

      // adding information to the modal
      strength.textContent = data[CC.currentDataIndex].information.strength;
      lives.textContent = data[CC.currentDataIndex].information.lives;
    }); // END eventlistener
    /* #endregion MODAL */
    /* #endregion CARD */

    /* #region  FOOTER */
    const footer = document.createElement("footer");
    footer.id = "footer";
    document.body.appendChild(footer);
    /* #endregion FOOTER */
  } // END constructor
} // END ShowActor class

export default ShowActor;
