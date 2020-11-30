import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import "./Animal.css"

export const AnimalList = ({ history }) => {
  const { getAnimals, animals } = useContext(AnimalContext)

  // Initialization effect hook -> Go get animal data
  useEffect(() => {
    getAnimals()
  }, [])

  return (
    <>
      <h1>Animals</h1>

      <button onClick={() => history.push("/animals/create")}>
        Make Reservation
          </button>
      <div className="animals">
        {
          animals.map(animal => {
            return <Animal key={animal.id} animal={animal} />
          })
        }
      </div>
    </>
  )
}





    // <div className="animals">
    //   {
    //     animals.map(animal => {
    //       const owner = customers.find(c => c.id === animal.customerId)
    //       const clinic = locations.find(l => l.id === animal.locationId)

    //       return <Animal key={animal.id}
    //         location={clinic}
    //         customer={owner}
    //         animal={animal} />
    //     })
    //   }
    // </div>