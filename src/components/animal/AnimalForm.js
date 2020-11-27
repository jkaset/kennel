import React, { useContext, useRef, useEffect } from "react"
import { EmployeeContext } from "../EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "./animal/AnimalProvider"
import "./Employee.css"

export const AnimalForm = (props) => {
  const { addEmployee } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { animals, getAnimals } = useContext(AnimalContext)

  const name = useRef(null)
  const location = useRef(null)
  const animal = useRef(null)

  useEffect(() => {
    getCustomers().then(getLocations)
 }, [])

 const constructNewEmployee = () => {
   const locationId = parseInt(location.current.value)
   const locationId = parseInt(location.current.value)
   
  if (locationId === 0) {
    window.alert("Please select a location")
  } else {
    addEmployee({
      name: name.current.value,
      manager: manager.current.value,
      fullTime: fullTime.current.value,
      hourlyRate: hourlyRate.current.value,
      locationId
    })
      .then(() => props.history.push("/employees"))
  }
}