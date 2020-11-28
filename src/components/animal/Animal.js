// import React from "react"
// import "./Animal.css"
// import "./AnimalList"

// export const Animal = ({ animal, customer, location }) => (
//   <section className="animal">
//     <h3 className="animal__name">{animal.name}</h3>
//     <div className="animal__breed">Breed: {animal.breed}</div>
//     <div className="animal__location">Location: {location.name}</div>
//     <div className="animal__owner">Customer: {customer.name}</div>
//   </section>
// )

import React from "react"
import "./Animal.css"

export const Animal = ({ location, animal }) => (
  <section className="animal">
    <h3 className="animal__name">{animal.name}</h3>
    <div className="animal__breed">Breed: {animal.breed}</div>
    <div className="animal__location">Location: {location.name}</div>
    <div className="animal__owner">Customer: {animal.customer}</div> 
  </section>
)