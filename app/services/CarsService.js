import { AppState } from "../AppState.js";
import { Cars } from "../models/Car.js";
import { saveState } from "../utils/Store.js";

function _saveCars() {
  saveState('cars', AppState.cars)
}

class CarsService {
  createCar(carData) {
    const newCar = new Car(carData)
    console.log('[CREATING CAR]', newCar);
    AppState.cars.push(newCar);
    AppState.emit('cars')
    _saveCars()
  }

  deleteCar(carId) {
    const carIndex = AppState.cars.findIndex(car => car.id == id)
    console.log('[GRABBING CAR BY INDEX]', carIndex);
    AppState.cars.splice(carIndex, 1)
    console.log('[CAR LEFT IN APPSTATE]', AppState.cars)
    AppState.emit('cars')
    _saveCars()
  }
}

export const carsService = new CarsService();