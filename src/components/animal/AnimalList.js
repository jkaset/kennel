import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { Animal } from "./Animal"
import "./Animal.css"

export const AnimalList = () => {
  const { animals, getAnimals } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { customers, getCustomers } = useContext(CustomerContext)

  useEffect(() => {
    console.log("AnimalList: Initial render before data")
    getAnimals()
    getLocations()
    getCustomers()
  }, [])

  return (
    <div className="animals">
      {
        animals.map(animal => <Animal key={animal.id}
        animal={animal} />)
      }
    </div>
  )
}




