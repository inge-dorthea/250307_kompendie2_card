export default class Initialize {

  constructor() {
    // array
    const myArray = ["one", "two", "three", "four"];
    console.log(myArray[1]);
    myArray.forEach((value, index)=>{
      console.log(value);

      // make as many divs as there are items in the array
      const myDiv = document.createElement('div');
      myDiv.id = "myDiv";
      document.body.appendChild(myDiv);
      // put textcontent in the div
      myDiv.textContent = value;

      
    }); //END forEach

    // car object
      const Car = {
        engine: 1.2,
        color: "red",
      };

      // console.logging a function??
      console.log(this.carFunction(Car.engine, Car.color));
  } // END constructor

  // carFunction
  carFunction(engineSize, carColor){
    let colorString = "";

    if (carColor == "red"){
      colorString = "The car color is red.";
    }
    else {
      colorString = "The car color is not red.";
    }

    return colorString;

    // so if you return a value (in this case a string value from a let variable)
    // then you can console.log the function: will console.log the value returned in the function

    // you can also say
    // console.log(colorString);
    // in the function, 
    // and then just call the function in the constructor (so not console.log the function, just calling it)
  } //END carFunction
} // END class