import {useEffect, useState} from "react";

import {Box, Button, Typography} from "@mui/joy";
import {Step, StepContent, StepLabel, Stepper} from "@mui/material";

import VehicleForm from "../features/VehicleForm.jsx";
import DriverForm from "../features/DriverForm.jsx";
import ResultPage from "../features/ResultPage.jsx";

import database from "../assets/database.js";

export default function FormScreen() {
    const [activeStep, setActiveStep] = useState(0)
    const [vehicleType, setVehicleType] = useState('Citadine')
    const [energy, setEnergy] = useState('Electrique')
    const [mileage, setMileage] = useState(15)
    const [year, setYear] = useState(2022)
    const [passenger, setPassenger] = useState(3)
    const [rate, setRate] = useState(0)

    useEffect(() => {
        let eco_score = 0;
        eco_score += database.vehicle_types.find(value => value.name === vehicleType).eco_score
        eco_score += database.energies.find(value => value.name === energy).eco_score
        eco_score += database.yearly_mileage.find((value) => value.bottom_mileage <= mileage && value.top_mileage >= mileage).eco_score
        eco_score += database.years.find((value) => value.start <= year && value.end > year).eco_score

        let proposedRate = database.credit_rates.find((value) => {
            return (value.bottom_score <= eco_score && value.top_score >= eco_score)
        }).rate

        proposedRate += database.passenger_bonuses.find(value => value.passenger_number == passenger).rate_bonus

        setRate(proposedRate)
    }, [vehicleType, energy, mileage, year, passenger]);

    const steps = [
        {
            label: "Présentation",
            content: <Typography>Vous voulez changer de voiture ? Bénéficiez d'un taux de crédit intéressant en fonction du véhicule souhaité et de vos habitudes de consomation</Typography>
        },
        {
            label: "Votre véhicule",
            content: <VehicleForm
                vehicleType={vehicleType}
                setVehicleType={setVehicleType}
                energy={energy}
                setEnergy={setEnergy}
                year={year}
                setYear={setYear}
            />
        },
        {
            label: "Vos habitudes",
            content: <DriverForm
                mileage={mileage}
                setMileage={setMileage}
                passenger={passenger}
                setPassenger={setPassenger}
            />
        },
        {
            label: "Résultat",
            content: <ResultPage
                rate={rate}
            />
        }
    ]

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
            <Stepper activeStep={activeStep} orientation="vertical" sx={{ width : '45vw', height: '50vh' }}>
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepLabel>
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            <Box>
                                {step.content}
                            </Box>
                            <Box sx={{ mb: 2 , mt: 2, display: 'flex', justifyContent: 'flex-end'}}>
                                <div sx={{}}>
                                    <Button
                                        variant="soft"
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Retour
                                    </Button>
                                    { index !== steps.length -1 && <Button
                                        variant="solid"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? '' : 'Continuer'}
                                    </Button>}
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </Box>
    )
}