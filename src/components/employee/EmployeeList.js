import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Employee } from "./Employee"
import "./Employee.css"
//import { LocationContext } from "../location/LocationProvider"

export const EmployeeList = (props) => {
  const { employees, getEmployees } = useContext(EmployeeContext)


  useEffect(() => {
    console.log("EmployeeList: Initial render before data")
    getEmployees()
  }, [])

  return (
    <div className="employees">
        <h1>Employees</h1>
        <button onClick={() => props.history.push("/employees/create")}>
            Add Employee
        </button>
        <article className="employeeList">
            {employees.map(employee => <Employee key={employee.id} employee={employee} />)}
        </article>
    </div>
)

}