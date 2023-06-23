Bugs List

Index File
1. The href for "#/cars" is missing the s in the pathway, so it doesn't have the proper path to get to the cars page.

CarView
1. Change id carListings to id listings to show that the names have to match in order to draw what we expect there (CARLISTINGS) 
2. Removed name="make" and name="color" on form inputs so that way info you enter here is never created on the new Car.

Router
1. Removed the s in CarsController to show how the name has to match the file name.

Car Model
1. Removed the ${"this.id"} in the removeCar button inside CardTemplate.
2. In Card Template, removed ${this.color} and hard coded it to red.

Car Controller
1. Took off the await in the pop confirm so the delete function fires immediately
2. Removed the .js from the pop import

Car Service
1. In deleteCar, changed it from carId to id in findIndex to show importance of naming conventions. Also showed how when it's grayed out, that means it's not being used.
2. Import for Car model was changed to Cars so that it imports incorrectly.
3. Added in check for carIndex to ensure it's removing correct car.
    if (carIndex < 0) {
      return
    }

Appstate
1. Changed cars from loadstate to an empty array, so that cars dont show on page load. Use this to show how we have cars saved in localstorage, but they're not appearing on page. 


