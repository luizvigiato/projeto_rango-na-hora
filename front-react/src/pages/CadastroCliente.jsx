import React from "react";
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { PersistentDrawerLeft } from "../components/Drawer";
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
        },
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));


export default function CadastroCliente() {
    // const { classes } = this.props;
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                <PersistentDrawerLeft />
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField fullWidth required id="nome" label="Nome Completo" variant="outlined" size="medium" />
                    <TextField fullWidth required id="email" label="Email" variant="outlined" size="medium" type='email' />
                    <TextField fullWidth required id="telefone"
                        variant="outlined"
                        size="medium"
                        type='number' />
                    <TextField fullWidth id="cpf" label="CPF" variant="outlined" size="medium" type='number' />
                    <TextField fullWidth id="senha" label="Senha" variant="outlined" size="medium" type='password' />
                </form>
            </Container>
        </>
    );
}

// export default withStyles(styles)(CadastroCliente);