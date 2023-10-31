import database from "../assets/database.js";
import {FormControl, FormLabel, Input, Option, Select} from "@mui/joy";

export default function VehicleForm({vehicleType, setVehicleType, year, setYear, energy, setEnergy}){
    const handleSetVehicleType = function(event) {
        setVehicleType(event.target.textContent)
    }

    const handleSetYear = (event) => {
        setYear(event.target.valueAsNumber)
    }

    const handleSetEnergy = (event) => {
        setEnergy(event.target.textContent)
    }

    return (
        <>
            <FormControl>
                <FormLabel>Type</FormLabel>
                <Select placeholder="Type de véhicule" onChange={handleSetVehicleType} defaultValue={vehicleType}>
                    {
                        database.vehicle_types.map((option, index) => <Option key={index} value={option.name}>{option.name}</Option>)
                    }
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel>Année</FormLabel>
                <Input type="number" value={year} onInput={handleSetYear} placeholder="Année de construction"></Input>
            </FormControl>
            <FormControl>
                <FormLabel>Energie</FormLabel>
                <Select placeholder="Energie" onChange={handleSetEnergy} defaultValue={energy}>
                    {
                        database.energies.map((option, index) => <Option key={index} value={option.name}>{option.name}</Option>)
                    }
                </Select>
            </FormControl>
        </>
    )
}