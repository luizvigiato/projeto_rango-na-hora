import React from "react";
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { PersistentDrawerLeft } from "../components/Drawer";
import { makeStyles } from '@material-ui/core/styles';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';



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
}));

function CelularMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

function CnpjMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[/[0-9]/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,'/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

CelularMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
};

export default function CadastroEmpresa() {
    // const { classes } = this.props;
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


    console.info(localStorage.getItem('token'));

    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                <PersistentDrawerLeft />
                <form className={classes.root} autoComplete="off">
                    <TextField fullWidth required id="nome" label="Nome Completo" variant="outlined" size="medium" />
                    <TextField fullWidth required id="resp" label="Responsavel" variant="outlined" size="medium" />                    
                    <TextField fullWidth id="cnpj" label="CNPJ"
                        name="cnpj"
                        variant="outlined"
                        size="medium"
                        onChange={handleChange}
                        value={values.cnpj}
                        InputProps={{
                            inputComponent: CnpjMaskCustom,
                        }} />
                    <TextField fullWidth required id="telefone"
                        name="telefone"
                        label="Telefone"
                        variant="outlined"
                        size="medium"
                        onChange={handleChange}
                        value={values.telefone}
                        InputProps={{
                            inputComponent: CelularMaskCustom,
                        }} />
                    <TextField fullWidth required id="ativos" label="Ativos" variant="outlined" size="medium" />
                    <TextField fullWidth required id="observacao" label="Observação" variant="outlined" size="medium" />
                    <TextField fullWidth id="senha" label="Senha" variant="outlined" size="medium" type='password' />
                    <Button variant="contained" color="primary" type="submit">
                        Cadastrar
                    </Button>
                    <Button variant="contained" color="secondary" onClick={ event => window.location.href='/'}>
                        Cancelar
                    </Button>
                </form>
            </Container>
        </>
    );
}

// export default withStyles(styles)(CadastroCliente);