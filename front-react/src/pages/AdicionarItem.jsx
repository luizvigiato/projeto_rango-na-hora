import React from "react";
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { PersistentDrawerLeft } from "../components/Drawer";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { InputLabel, Select, Typography, InputAdornment, Grid, FormControl } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
        },
        '& .MuiButton-root': {
            margin: theme.spacing(2),
        }
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    texto: {
        margin: theme.spacing(2),
        fontSize: '2rem'
    },
    input: {
        display: 'none',
    },
    formControl: {
        margin: theme.spacing(2),
    },
}));



export default function NovoCardapio() {
    const classes = useStyles();

    const [cardapio, setCardapio] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const selectChange = (event) => {
        setCardapio(event.target.value);
    };

    const selectClose = () => {
        setOpen(false);
    };

    const selectOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                <PersistentDrawerLeft />
                <Typography className={classes.texto} component="h1">
                    <b>Cadastro Cardapio</b>
                </Typography>
                <form className={classes.root} autoComplete="off">
                    <FormControl fullWidth variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="outlined-age-native-simple">Nivel</InputLabel>
                        <Select
                            native
                            label=""
                            open={open}
                            onClose={selectClose}
                            onOpen={selectOpen}
                            value={cardapio}
                            onChange={selectChange}
                        >
                            <option aria-label="None" value="" />
                            <option value={1}>Cardapio Teste</option>
                        </Select>
                    </FormControl>
                    <TextField fullWidth required id="nome" label="Nome" variant="outlined" size="medium" />
                    <TextField fullWidth required id="descricao" label="Descrição" variant="outlined" size="medium" />
                    <TextField fullWidth required id="valor" label="Valor" variant="outlined" size="medium"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                        }} />
                    <Grid container alignItems="center" spacing={0}>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span">
                                Upload
                            </Button>
                        </label>
                        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                            </IconButton>
                        </label>
                    </Grid>
                    <Button variant="contained" color="primary" type="submit">
                        Cadastrar
                    </Button>
                    <Button variant="contained" color="secondary" onClick={event => window.location.href = '/'}>
                        Cancelar
                    </Button>
                </form>
            </Container>

        </>
    );

}