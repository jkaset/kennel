import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Employee } from "./Employee"
import "./Employee.css"
import { LocationContext } from "../location/LocationProvider"

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)

  useEffect(() => {
    console.log("EmployeeList: Initial render before data")
    getLocations()
      .then(getEmployees)
  }, [])

  return (
    <div className="employees">
      {
        employees.map(employee => {
          const clinic = locations.find(l => l.id === employee.locationId)

          return <Employee key={employee.id}
            location={clinic}
            employee={employee} />
        })
      }
    </div>
  )
}