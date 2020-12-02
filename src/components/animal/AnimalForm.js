import React, { useContext, useState, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"


export const AnimalForm = (props) => {
    // Use the required context providers for data
    const { locations, getLocations } = useContext(LocationContext)
    const { addAnimal, animals, updateAnimal, getAnimals } = useContext(AnimalContext)

    // Component state
    const [animal, setAnimal] = useState({})

    // Is there a a URL parameter??
    const editMode = props.match.params.hasOwnProperty("animalId")

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newAnimal = Object.assign({}, animal)
        newAnimal[event.target.name] = event.target.value
        setAnimal(newAnimal)
    }

    /*
        If there is a URL parameter, then the user has chosen to
        edit an animal.
            1. Get the value of the URL parameter.
            2. Use that `id` to find the animal.
            3. Update component state variable.
    */
    const getAnimalInEditMode = () => {
        if (editMode) {
            const animalId = parseInt(props.match.params.animalId)
            const selectedAnimal = animals.find(a => a.id === animalId) || {}
            setAnimal(selectedAnimal)
        }
    }

    // Get animals from API when component initializes
    useEffect(() => {
        getAnimals()
        getLocations()
    }, [])

    // Once provider state is updated, determine the animal (if edit)
    useEffect(() => {
        getAnimalInEditMode()
    }, [animals])


    const constructNewAnimal = () => {
        const locationId = parseInt(animal.locationId)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            if (editMode) {
                updateAnimal({
                    id: animal.id,
                    name: animal.name,
                    breed: animal.breed,
                    locationId: locationId,
                    treatment: animal.treatment,
                    customerId: parseInt(localStorage.getItem("kennel_customer"))
                })
                    .then(() => props.history.push("/animals"))
            } else {
                addAnimal({
                    name: animal.name,
                    breed: animal.breed,
                    locationId: locationId,
                    treatment: animal.treatment,
                    customerId: parseInt(localStorage.getItem("kennel_customer"))
                })
                    .then(() => props.history.push("/animals"))
            }
        }
    }

    return (
        <form className="animalForm">
            <h2 className="animalForm__title">{editMode ? "Update Animal" : "Admit Animal"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Animal name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="Animal name"
                        defaultValue={animal.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="breed">Animal breed: </label>
                    <input type="text" name="breed" required className="form-control"
                        proptype="varchar"
                        placeholder="Animal breed"
                        defaultValue={animal.breed}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationId">Location: </label>
                    <select name="locationId" className="form-control"
                        proptype="int"
                        value={animal.locationId}
                        onChange={handleControlledInputChange}>

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
                    <label htmlFor="treatment">Treatments: </label>
                    <textarea type="text" name="treatment" className="form-control"
                        proptype="varchar"
                        value={animal.treatment}
                        onChange={handleControlledInputChange}>
                    </textarea>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewAnimal()
                }}
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Make Reservation"}
            </button>
        </form>
    )
}

// import React, { useContext, useRef, useEffect } from "react"
// //import { EmployeeContext } from "../EmployeeProvider"
// import { CustomerContext } from "../customer/CustomerProvider"
// import { LocationContext } from "../location/LocationProvider"
// import { AnimalContext } from "./AnimalProvider"
// import "./Animal.css"

// export const AnimalForm = (props) => {
//     const { addAnimal, getAnimals } = useContext(AnimalContext)
//     const { locations, getLocations } = useContext(LocationContext)
//     const { customers, getCustomers } = useContext(CustomerContext)

//     const name = useRef(null)
//     const location = useRef(null)
//     const breed = useRef(null)
//     //const animal = useRef(null)
//     const customer = useRef(null)

//     useEffect(() => {
//         getCustomers()
//         getLocations()
//             .then(getAnimals)

//     }, [])

//     const constructNewAnimal = () => {
//         const locationId = parseInt(location.current.value)
//         //const customerId = parseInt(customer.current.value)

//         if (locationId === 0) {
//             window.alert("Please select a location")
//         } else {
//             addAnimal({
//                 name: name.current.value,
//                 breed: breed.current.value,
//                 locationId,
//                 customerId: parseInt(localStorage.getItem("kennel_customer"))
//             })
//                 .then(() => props.history.push("/animals"))
//         }
//     }

//     return (
//         <form className="animalForm">
//             <h2 className="animalForm__title">Make Appointment</h2>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="animalName">Pet's name: </label>
//                     <input type="text" id="animalName" ref={name} required autoFocus className="form-control" placeholder="Kitty" />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="animalBreed">Pet's Breed: </label>
//                     <input type="text" id="animalBreed" ref={breed} required autoFocus className="form-control" placeholder="Pomeranian" />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="location">Assign to location: </label>
//                     <select defaultValue="" name="location" ref={location} id="animalLocation" className="form-control" >
//                         <option value="0">Select a location</option>
//                         {locations.map(e => (
//                             <option key={e.id} value={e.id}>
//                                 {e.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             </fieldset>
//             {/* <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="animalCustomer">Your name: </label>
//                     <input type="text" id="animalCustomer" ref={customer} required autoFocus className="form-control" placeholder="Joe Walsh" />
//                 </div>
//             </fieldset> */}

//             <button type="submit"
//                 onClick={evt => {
//                     evt.preventDefault() // Prevent browser from submitting the form
//                     constructNewAnimal()
//                 }}
//                 className="btn btn-primary">
//                 Save Appointment
//            </button>
//         </form>
//     )
// }