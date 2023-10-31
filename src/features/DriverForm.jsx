import {FormControl, FormLabel, Input, Option, Select} from "@mui/joy";
import database from "../assets/database.js";


export default function DriverForm({mileage, setMileage, passenger, setPassenger}) {
    const handleSetMileage = (event) => {
        setMileage(event.target.valueAsNumber)
    }

    const handleSetPassenger = (event) => {
        setPassenger(parseInt(event.target.textContent[0]))
    }

    return (
        <>
            <FormControl>
                <FormLabel>Kilométrage par an (en millier de km)</FormLabel>
                <Input type="number" value={mileage} onInput={handleSetMileage} placeholder="Kilométrage / an"></Input>
            </FormControl>
            <FormControl>
                <FormLabel>Nombre habituel de passagers</FormLabel>
                <Select placeholder="Nombre de passagers" onChange={handleSetPassenger} defaultValue={passenger}>
                    {
                        database.passenger_bonuses.map((option, index) => <Option key={index} value={option.passenger_number}>{option.name}</Option>)
                    }
                </Select>
            </FormControl>
        </>
    )
}