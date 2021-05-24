import React from "react";
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { PersistentDrawerLeft } from "../components/Drawer";
import { makeStyles } from '@material-ui/core/styles';
import MaskedInput from 'react-text-mask';
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";


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
    }
}));

function CnpjMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[/[0-9]/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

export default function NovoCardapio() {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        telefone: '( )    -    ',
        cpf: '   .   .   -  ',
        numberformat: '1320',
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
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
                    <TextField fullWidth id="cnpj" label="CNPJ"
                        name="cnpj"
                        variant="outlined"
                        size="medium"
                        onChange={handleChange}
                        value={values.cnpj}
                        InputProps={{
                            inputComponent: CnpjMaskCustom,
                        }} />
                    <TextField fullWidth required id="nome" label="Nome" variant="outlined" size="medium" />
                    <TextField fullWidth required id="descricao" label="Descrição" variant="outlined" size="medium" />
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