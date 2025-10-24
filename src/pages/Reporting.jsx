import Header from "../components/Header";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import UploadIcon from '@mui/icons-material/Upload';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import StatCards from "../components/StatCards";

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

    const [openConfirm, setOpenConfirm] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleOpenDialog = () => {    
        setOpenConfirm(true);
    };
    const handleCloseDialog = () => {
        if (!loading) setOpenConfirm(false);
    };

    const handleConfirmUpload = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpenConfirm(false);
          }, 2000);
    };

    return (
        <>
            <Header title={"Reporting"} />
            <div className="flex flex-wrap gap-4 mt-4">
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

                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<UploadIcon />}
                    onClick={handleOpenDialog}
                    sx={{
                    flex: "0 0 auto",
                    height: "40px",
                    }}
                >
                    Exporter
                </Button>

                <Dialog
                    open={openConfirm}
                    onClose={handleCloseDialog}
                    PaperProps={{
                    sx: {
                        textAlign: "center",
                        padding: "16px",
                        borderRadius: 3,
                    },
                    }}
                >
                    <DialogTitle sx={{fontWeight: "bold", color: "black", textAlign: "center", fontSize: "2rem",}}>
                        Confirmer l’exportation
                    </DialogTitle>

                    <DialogContent>
                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-6">
                                <CircularProgress color="primary" size={40} />
                                <p className="text-gray-600 mt-3 text-sm">Exportation en cours...</p>
                            </div>
                        ) : (
                            <DialogContentText sx={{ textAlign: "center", color: "gray" }}>
                                Voulez-vous vraiment exporter les données ?  
                                Cette action pourrait écraser les données existantes.
                            </DialogContentText>
                        )}
                    </DialogContent>

                    {!loading && (
                        <DialogActions sx={{justifyContent: "center",gap: 2,pb: 2,}}>
                            <Button
                                onClick={handleConfirmUpload}
                                variant="contained"
                                color="primary"
                                autoFocus
                            >
                                Oui, exporter
                            </Button>
                            <Button
                                onClick={handleCloseDialog}
                                variant="contained"
                                color="inherit"
                                disableElevation
                            >
                                Annuler
                            </Button>
                        </DialogActions>
                    )}
                </Dialog>
            </div>
            <StatCards />       
        </>
    );
}

