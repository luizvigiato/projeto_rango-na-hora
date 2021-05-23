import React from "react";
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { PersistentDrawerLeft } from "../components/Drawer";
import { makeStyles } from '@material-ui/core/styles';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
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
        },
        // '& .MuiSelect-root': {
        //     margin: theme.spacing(2),
        // }
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    formControl: {
        margin: theme.spacing(2),
    },
    texto:{
        margin: theme.spacing(2),
        fontSize: '2rem'
    }
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

export default function CadastroFuncionario() {
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

    const [nivel, setNivel] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const selectChange = (event) => {
        setNivel(event.target.value);
    };

    const selectClose = () => {
        setOpen(false);
    };

    const selectOpen = () => {
        setOpen(true);
    };


    console.info(localStorage.getItem('token'));

    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                <PersistentDrawerLeft />
                <Typography className={classes.texto} component="h1">
                    <b>Cadastro Funcionarios</b>
                </Typography>
                <form className={classes.root} autoComplete="off">
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
                    <FormControl fullWidth variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="outlined-age-native-simple">Nivel</InputLabel>
                        <Select
                            native
                            label="Nivel"
                            open={open}
                            onClose={selectClose}
                            onOpen={selectOpen}
                            value={nivel}
                            onChange={selectChange}
                        >
                            <option aria-label="None" value="" />
                            <option value={1}>Garçon</option>
                            <option value={2}>Caixa</option>
                            <option value={3}>Gerente</option>
                        </Select>
                    </FormControl>

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

// export default withStyles(styles)(CadastroCliente);