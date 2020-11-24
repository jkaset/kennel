import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"

export const ApplicationViews = (props) => {
  return (
    <>
      <LocationProvider>
        {/* Render the location list when http://localhost:3000/ */}
        <Route exact path="/">
          <LocationList />
        </Route>
      </LocationProvider>

      <LocationProvider>
        <CustomerProvider>
          <AnimalProvider>
            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
              <AnimalList />
            </Route>
          </AnimalProvider>
        </CustomerProvider>
      </LocationProvider>

      <CustomerProvider>
        {/* Render the animal list when http://localhost:3000/animals */}
        <Route path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>


      <EmployeeProvider>
        <LocationProvider>
          <Route exact path="/employees" render={
            props => <EmployeeList {...props} />
          } />

          <Route exact path="/employees/create">
            <EmployeeForm />
          </Route>
        </LocationProvider>
      </EmployeeProvider>

    </>
  )
}
