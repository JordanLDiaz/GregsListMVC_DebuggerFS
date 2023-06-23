export const CarView = /*html*/ `
<div class="container-fluid">
<section class="row ">
  <div class="col-12 p-4 d-flex justify-content-center">
    <button class="btn btn-primary ms-3" type="button" data-bs-toggle="collapse" data-bs-target="#carCollapse" aria-expanded="false" aria-controls="collapseExample">
      Car Form
    </button>
    </div>
    </section>

    <section class="row">
    <div class="col-6 m-auto">
    <div class="collapse" id="carCollapse">
      <div class="card card-body">
      <form onsubmit="app.CarsController.createCar(window.event)">
      
      <div class="row">
        <div class="col-6 my-1">
          <label for="carMake">Make</label>
          <input type="text" class="w-100" id="carMake" minlength="3" maxlength="30" required>
        </div>
        <div class="col-6 my-1">
          <label for="carModel">Model</label>
          <input type="text" class="w-100" id="carModel" name="model" minlength="2" maxlength="40" required>
        </div>
      </div>

      <div class="row">
        <div class="col-6 my-1">
          <label for="carYear">Year</label>
          <input type="number" class="w-100" id="carYear" name="year" min="1970" max="2024" required>
        </div>
        
        <div class="col-6 my-1">
          <label for="carMiles">Miles</label>
          <input type="number" class="w-100" id="carMiles" name="miles" min="1" max="1000000" required>
        </div>
      </div>

      <div class="row">
        <div class="my-1">
          <label for="carImg">Image URL</label>
          <input type="url" class="w-100" id="carImg" name="img" max="300" required>
        </div>
      </div>

      <div class="row">
        <div class="col-6 my-1">
          <label for="carOwnedByGrandma">Owned By Grandma?</label>
          <input type="checkbox" id="carOwnedByGrandma" name="ownedByGrandma">
        </div>
        
        <div class="col-6 my-1">
          <label for="carColor">Color</label>
          <input type="color" class="w-100" id="carColor" value="#000000" required>
        </div>
      </div>
      
      <div class="my-1">
        <label for="carPrice">Price</label>
        <input class="w-100" type="range" id="carPrice" name="price" min="1" max="100000" required>
      </div>
      
      <div class="my-1 align-content-center">
        <label for="carDescription">Description</label>
        <textarea id="carDescription" name="description" rows="4" class="w-100">
        </textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
      </div>
    </div>
  
    </div>
    </section>


<section id="listings" class="row">
</section>
</div>
`