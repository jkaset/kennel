import React , { useState }  from "react"
import "./Location.css"

export const LocationDetail = (props) => {
    return (
        <section className="location">
            <h2 className="location__name">{props.location.state.chosenLocation.name}</h2>
            <address className="location__address">{props.location.state.chosenLocation.address}</address>
            <div>
                <h4>Employees</h4>
                { props.location.state.chosenLocation.employees.map(e => e.name).join(", ") }
            </div>
            <div>
                <h4>Current Residents</h4>
                {
                    props.location.state.chosenLocation.animals.map(a => a.name).join(", ")
                }
            </div>
        </section>
    )
}

// import React, { useState, useEffect, useContext } from "react"
// import { AnimalContext } from "../animal/AnimalProvider"
// import { LocationContext } from "./LocationProvider"
// import { EmployeeContext } from "../employee/EmployeeProvider"
// import "./Location.css"

// export const LocationDetail = (props) => {

//   const { animals, getAnimals } = useContext(AnimalContext)
//   const { locations, getLocations } = useContext(LocationContext)
//   const { employees, getEmployees } = useContext(EmployeeContext)

//   const [animal, setAnimal] = useState({})
//   const [employee, setEmployee] = useState({})
//   const [location, setLocation] = useState({})

//   useEffect(() => {
//     getLocations()
//       .then(getAnimals)
//       .then(getEmployees)
//   }, [])
//   useEffect(() => {
//     const animal = animals.find(a => a.id === employee.animalId) || {}
//     setAnimal(animal)
//   }, [animals])

//   useEffect(() => {
//     const employee = employees.find(e => e.id === parseInt(props.match.params.employeeId)) || {}
//     setEmployee(employee)
//   }, [employees])

//   useEffect(() => {
//     const location = locations.find(l => l.id === employee.locationId) || {}
//     setLocation(location)
//   }, [locations])
  
//   return (
//     <section className="location">
//       <h2 className="location__name">{props.location.state.chosenLocation.name}</h2>
//       <address className="location__address">{props.location.state.chosenLocation.address}</address>
//       <div>
//         <h4>Employees</h4>
//         {props.location.state.chosenLocation.employees.map(e => e.name).join(", ")}
//       </div>
//       <div>
//         <h4>Current Residents</h4>
//         {
//           props.location.state.chosenLocation.animals.map(a => a.name).join(", ")
//         }
//       </div>
//     </section>
//   )
// }

