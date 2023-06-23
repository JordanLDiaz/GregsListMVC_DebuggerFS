import { AppState } from "../AppState.js"
import { carsService } from "../services/CarsService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop"
import { saveState } from "../utils/Store.js"
import { setHTML } from "../utils/Writer.js"

function _drawCars() {
  const cars = AppState.cars
  let template = ''
  cars.forEach(c => template += c.CardTemplate)
  setHTML('carListings', template)
}

export class CarsController {
  constructor() {
    console.log('Hello from the cars controller!', AppState.cars);
    _drawCars()
    AppState.on('cars', _drawCars)
  }

  createCar(event) {
    event.preventDefault()
    const form = event.target
    const carData = getFormData(form)
    // @ts-ignore
    carData.ownedByGrandma = carData.ownedByGrandma == 'on' ? true : false
    // @ts-ignore
    // console.log('owned by grandma?', carData.ownedByGrandma);
    console.log('[CAR FORM DATA]', carData);
    carsService.createCar(carData)
    form.reset()
  }

  async deleteCar(carId) {

    const yes = Pop.confirm('Are you sure you want to delete this car?')
    if (!yes) {
      return
    }
    carsService.deleteCar(carId)
    Pop.toast('Car successfully deleted!', "success", "center")
  }
}