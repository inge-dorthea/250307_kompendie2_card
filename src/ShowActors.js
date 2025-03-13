class ShowActor {
  constructor(data) {
    // tjekker om dataObject-dataen bliver sendt fra app.js
    console.log(data);

    /* #region  NAVIGATION */
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
    Image.id = Image;
    // jeg tænker at src senere bliver gjort dynamisk
    Image.src = "../assets/ninja.png";
    // put the img-tag inside the imageContent-div
    document.querySelector("#imageContent").appendChild(Image);
    /* #endregion CARD */

    /* #region  FOOTER */
    const footer = document.createElement("footer");
    footer.id = "footer";
    document.body.appendChild(footer);
    /* #endregion FOOTER */
  } // END constructor
} // END ShowActor class

export default ShowActor;
