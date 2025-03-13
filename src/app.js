import Initialize from "./Initialize";
import ShowActor from "./ShowActors";
import "../css/style.scss";

// **  IIFE: Immediately Invoked Function Expression  */

(function () {
  // Initialize = not the project, but just some tests and stuff, ukno learning
  // let init = new Initialize();

  // data der skal bruges i ShowActor-klassen
  // bliver nok flyttet til en json-fil senere
  // her er det et array med tre objekter med key value pairs
  // i information er der et object indeni med to key value pairs, strength og lives
  const dataObject = [
    {
      name: "Death smokie",
      img: "death-smokie.png",
      information: {strength: 100, lives: 10},
      text: "Ninja Killer dont touch him",
    },
    {
      name: "Black Scum",
      img: "black-alien-scum.png",
      information: {strength: 90, lives: 5},
      text: "Black Scum is a Ninja Killer",
    },
    {
      name: "Ping Pang",
      img: "angry-ping.png",
      information: {strength: 80, lives: 4},
      text: "Just som penguin Shit",
    },
  ];

  // dataObject (dataen) bliver sendt til klassen
  new ShowActor(dataObject);
})();

// ()() = en selvafviklende funktion
// en anden måde at lave en selv-afviklende funktion:

// ( ()=>{
// console.log("starting the cool->app");
//   let init = new Initialize();
// } )()
