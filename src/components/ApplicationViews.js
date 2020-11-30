import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./location/LocationList"
import { LocationDetail } from "./location/LocationDetail"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalDetails } from "./animal/AnimalDetail"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"
import { EmployeeDetail } from "./employee/EmployeeDetail"

export const ApplicationViews = (props) => {
  return (
    <>
      <LocationProvider>
        <EmployeeProvider>
          <AnimalProvider>
            <Route exact path="/" render={
              props => <LocationList {...props} />
            } />

            <Route path="/locations/:locationId(\d+)" render={
              props => <LocationDetail {...props} />
            } />
          </AnimalProvider>
        </EmployeeProvider>
      </LocationProvider>

      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>

            <Route exact path="/animals" render={
              props => <AnimalList {...props} />
            } />

            <Route exact path="/animals/create" render={
              props => <AnimalForm {...props} />
            } />

            <Route path="/animals/:animalId(\d+)" render={
              props => <AnimalDetails {...props} />
            } />
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>


      <CustomerProvider>
        {/* Render the animal list when http://localhost:3000/animals */}
        <Route path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>


      <EmployeeProvider>
        <LocationProvider>
          <AnimalProvider>

            <Route exact path="/employees" render={
              props => <EmployeeList {...props} />
            } />

            <Route path="/employees/create" render={
              props => <EmployeeForm {...props} />
            } />

            {/* New route for showing employee details */}
            <Route path="/employees/:employeeId(\d+)" render={
              props => <EmployeeDetail {...props} />
            } />
          </AnimalProvider>
        </LocationProvider>
      </EmployeeProvider>


    </>
  )
}
