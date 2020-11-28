import React, { useContext, useRef, useEffect } from "react"
//import { EmployeeContext } from "../EmployeeProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"

export const AnimalForm = (props) => {
    const { addAnimal, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    const name = useRef(null)
    const location = useRef(null)
    const breed = useRef(null)
    //const animal = useRef(null)
    const customer = useRef(null)

    useEffect(() => {
        getCustomers()
        getLocations()
            .then(getAnimals)

    }, [])

    const constructNewAnimal = () => {
        const locationId = parseInt(location.current.value)
        //const customerId = parseInt(customer.current.value)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addAnimal({
                name: name.current.value,
                breed: breed.current.value,
                locationId,
                customer: customer.current.value
            })
                .then(() => props.history.push("/animals"))
        }
    }

    return (
        <form className="animalForm">
            <h2 className="animalForm__title">Make Appointment</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Pet's name: </label>
                    <input type="text" id="animalName" ref={name} required autoFocus className="form-control" placeholder="Kitty" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalBreed">Pet's Breed: </label>
                    <input type="text" id="animalBreed" ref={breed} required autoFocus className="form-control" placeholder="Pomeranian" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="animalLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalCustomer">Your name: </label>
                    <input type="text" id="animalCustomer" ref={customer} required autoFocus className="form-control" placeholder="Joe Walsh" />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewAnimal()
                }}
                className="btn btn-primary">
                Save Appointment
           </button>
        </form>
    )
}