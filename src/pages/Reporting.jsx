import Header from "../components/Header";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export default function Reporting() {
    const [matricule, setMatricule] = React.useState('');
    const handleChangeMatricule = (event) => {
        setMatricule(event.target.value);
    };

    const [equipe, setEquipe] = React.useState('');
    const handleChangeEquipe = (event) => {
        setEquipe(event.target.value);
    };

    const [periode, setPeriode] = React.useState('');
    const handleChangePeriode = (event) => {
        setPeriode(event.target.value);
    };
    return (
        <>
            <Header title={"Reporting"} />
            <div className="flex flex-wrap gap-4">
                <FormControl
                    variant="standard"
                    sx={{ minWidth: 250, flex: "1 1 250px" }}
                >
                    <InputLabel>Sélectionner la matricule</InputLabel>
                    <Select value={matricule} onChange={handleChangeMatricule}>
                    <MenuItem value="">EFFACER</MenuItem>
                    <MenuItem value="Andrianina">Andrianina</MenuItem>
                    <MenuItem value="John">John</MenuItem>
                    <MenuItem value="Jeanne">Jeanne</MenuItem>
                    </Select>
                </FormControl>

                <FormControl
                    variant="standard"
                    sx={{ minWidth: 250, flex: "1 1 250px" }}
                >
                    <InputLabel>Sélectionner une équipe</InputLabel>
                    <Select value={equipe} onChange={handleChangeEquipe}>
                    <MenuItem value="">EFFACER</MenuItem>
                    <MenuItem value="Support">Support</MenuItem>
                    <MenuItem value="Branchless">Branchless</MenuItem>
                    <MenuItem value="Co">Co</MenuItem>
                    </Select>
                </FormControl>

                <FormControl
                    variant="standard"
                    sx={{ minWidth: 250, flex: "1 1 250px" }}
                >
                    <InputLabel>Sélectionner la période</InputLabel>
                    <Select value={periode} onChange={handleChangePeriode}>
                    <MenuItem value="">EFFACER</MenuItem>
                    <MenuItem value="Cette semaine">Cette semaine</MenuItem>
                    <MenuItem value="Ce mois-ci">Ce mois-ci</MenuItem>
                    <MenuItem value="Cette année">Cette année</MenuItem>
                    <MenuItem value="Date précise">Date précise</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </>
    );
}

