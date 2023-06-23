import { generateId } from "../utils/generateId.js"

export class Car {
  constructor(data) {
    this.id = generateId()
    this.img = data.img
    this.year = data.year
    this.make = data.make
    this.model = data.model
    this.miles = data.miles
    this.price = data.price
    this.description = data.description || "It's a car, and it's for sale."
    this.color = data.color
    this.ownedByGrandma = data.ownedByGrandma
    this.listingDate = data.listingDate ? new Date(data.listingDate) : new Date()
  }

  get CardTemplate() {
    return `
    <div class="col-10 m-auto my-2">
    <div class="row bg-light elevation-5 car-border" style="border-color: #880808;">
      <div class="col-12 col-md-4 p-0">
        <img class="img-fluid car-img"
          src="${this.img}" alt="${this.make} ${this.model}">
      </div>
      <div class="col-12 col-md-8 p-3">
      ${this.ComputeGrandmaBanner}
        <h2>${this.year} ${this.make} ${this.model}</h2>
        <h3>$${this.price}</h3>
        <h4>${this.miles} miles</h4>
        <p>${this.description}</p>
        <h5>${this.listingDate.toLocaleString()}</h5>
        <button onclick="app.CarsController.deleteCar()" class="btn btn-danger mt-2">Delete Car</button>
      </div>
    </div>
  </div>
    `
  }

  get ComputeGrandmaBanner() {
    if (this.ownedByGrandma) {
      return `
      <div class="text-bg-danger text-center p-1">
        <p class="mb-0">Owned by 👵🏻</p>
      </div>
      `
    }
    return ''
  }
}
