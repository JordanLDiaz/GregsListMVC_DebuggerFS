import { Car } from "./models/Car.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  // cars = [
  //   new Car({
  //     make: 'Honda',
  //     model: 'Corolla',
  //     year: 2004,
  //     img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
  //     miles: 79000,
  //     price: 79000,
  //     description: 'Lightly used',
  //     ownedByGrandma: false,
  //     color: '#001469',
  //   }),
  //   new Car({
  //     make: 'Subaru',
  //     model: 'Impreza',
  //     year: 2007,
  //     img: 'https://images.unsplash.com/photo-1560701584-c03530391d54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  //     miles: 60000,
  //     price: 8500,
  //     description: 'Two owner car, first by grandma, then by granddaughter',
  //     ownedByGrandma: true,
  //     color: '#ffffff',
  //   })
  // ]

  /** @type {import('./models/Car.js').Car[]} */
  cars = []

  // NOTE Used to load initial data
  init() {
  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
