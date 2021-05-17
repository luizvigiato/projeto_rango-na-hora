import React from "react";
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { PersistentDrawerLeft } from "../components/Drawer";
import { makeStyles } from '@material-ui/core/styles';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';



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

function CpfMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

CelularMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
};

export default function CadastroCliente() {
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

    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                <PersistentDrawerLeft />
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField fullWidth required id="nome" label="Nome Completo" variant="outlined" size="medium" />
                    <TextField fullWidth required id="email" label="Email" variant="outlined" size="medium" type='email' />
                    {/* Chamada de funcao mask para inclusao exclusiva  */}
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
                    <TextField fullWidth id="cpf" label="CPF"
                        name="cpf"
                        variant="outlined"
                        size="medium"
                        onChange={handleChange}
                        value={values.cpf}
                        InputProps={{
                            inputComponent: CpfMaskCustom,
                        }} />
                    <TextField fullWidth id="senha" label="Senha" variant="outlined" size="medium" type='password' />
                </form>
            </Container>
        </>
    );
}

// export default withStyles(styles)(CadastroCliente);