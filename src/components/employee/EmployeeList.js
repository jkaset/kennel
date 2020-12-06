import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Link } from "react-router-dom"
import "./Employee.css"
import Button from 'react-bootstrap/Button';
//import ButtonGroup from "react-bootstrap/ButtonGroup";
//import Chart from 'chart.js';


export const EmployeeList = props => {
  const { employees, getEmployees } = useContext(EmployeeContext)

  useEffect(() => {
    getEmployees()
  }, [])

  return (
    <div className="employees">
      <h1>Employees</h1>
      <Button color="secondary" onClick={() => props.history.push("/employees/create")}>
        Add Employee
      </Button>

      <article className="employeeList">
        {
          employees.map(employee => {
            return <Link key={employee.id} to={`/employees/${employee.id}`}>
              <h3>{employee.name}</h3>
            </Link>
          })
          
        }
      </article>
    </div>
    
  )
}