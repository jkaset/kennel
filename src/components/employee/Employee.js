import React from "react"
import "./Employee.css"

export const Employee = ({ employee, location }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__branch">Branch: {location.name}</div>
    </section>
)