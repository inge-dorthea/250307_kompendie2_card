import gsap from "gsap";

class ChangeContents {
  constructor() {
    // currentDataIndex is set to -1 by default
    // this makes it so the modal (ShowActors) doesn't show
    // ^due to an if-statement in the eventlistener that shows the modal
    // when the currentDataIndex changes as you change the card to a character
    // then the modal can show the info that fits the chosen card
    this.currentDataIndex = -1;
  } // END constructor

  // function that changes the data used ALSO it adds the animation
  // the function is called in the forEach-loop where the li-elements are created (navigation)
  changeContent(event, data) {
    // getting the index number of the listItem currently targeted/clicked on
    // dataset can be used because all the listItems have the data-index attribute
    this.currentDataIndex = event.currentTarget.dataset.index;

    // change headline
    let headline = document.querySelector("#headline");
    headline.textContent = data.name;

    // change image
    const imageSrc = data.img;
    let myImage = document.querySelector("#Image");
    myImage.src = "../assets/" + imageSrc;

    // change #content text
    let content = document.querySelector("#content");
    content.textContent = data.text;

    // removing the modal when changing card
    let info = document.querySelector("#info");
    info.style.display = "none";

    // gsap animation
    let cardSection = document.querySelector("#cardSection");
    gsap.to(cardSection, {
      duration: 0.1,
      scaleX: -1,
      alpha: 0.2,
      repeat: 3,
      yoyo: true,
    }); // END gsap
  } // END changeContent function

  //   getter function: returns the currentDataIndex,
  // so it can be called in the ShowActor-class (MODAL)
  get currentIndex() {
    return this.currentDataIndex;
  } // END getter
} // END class

export default ChangeContents;
