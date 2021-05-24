import { Button, Container, CssBaseline, FormControl, Grid, InputAdornment, InputLabel, makeStyles, Select, TextField } from '@material-ui/core';
import React from 'react';
import { PersistentDrawerLeft } from '../components/Drawer';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import currency from 'currency.js';


import carrinho from '../text_teste/carrinho';
import ReceiptIcon from '@material-ui/icons/Receipt';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0
    },
    desenho: {
        marginRight: 5,
    },
    topo: {
        aling: 'center',
        alignItems: "center",
        fontSize: '2rem'
    },
    input: {
        marginTop: theme.spacing(5),
        marginRight: theme.spacing(2)
    },
    total: {
        backgroundColor: '#eeeeee'
    },
    btn: {
        marginTop: theme.spacing(5),
        height: theme.spacing(6),
        marginRight: theme.spacing(2)
    },

}));

function sumLinha(valor, quant) {
    return valor * quant;
}

function valorTotal() {
    var total = 0;
    carrinho.forEach((item) => {
        // console.log(item);
        total += item.valor * item.quant;
    })
    return total;
}

function valor() { //quando abaixa a tecla
    var total = valorTotal();
    const valor = document.getElementById('recebido') !== null ? document.getElementById('recebido') : 0;
    var recebido = currency(valor.value).value;
    recebido = recebido / 100;
    console.log("Key DOWN");
    console.log(recebido, valor.value);
    const troco = document.getElementById('troco') !== null ? document.getElementById('troco') : 0;
    var teste = recebido - total;
    console.log(currency(teste).format());
    troco.value = currency(teste, { separator: '.', decimal: ',', symbol: 'R$' }).format()
}




export default function Caixa() {

    const classes = useStyles();


    const [pagamento, setPagamento] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const selectChange = (event) => {
        setPagamento(event.target.value);
    };

    const alterarValor = (event) => {
        valor(event.target)
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
            <Container>
                <PersistentDrawerLeft />

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow >
                                <TableCell className={classes.topo} aling="center" colSpan={4}>
                                    <b><ReceiptIcon className={classes.desenho} />Caixa</b>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Item</TableCell>
                                <TableCell>Qnt.</TableCell>
                                <TableCell>Valor Un.</TableCell>
                                <TableCell aling="right">Total p/ Item</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {carrinho.map((item, key) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.label}</TableCell>
                                    <TableCell>{item.quant}</TableCell>
                                    <TableCell>{(item.valor).toFixed(2)}</TableCell>
                                    <TableCell>{(sumLinha(item.valor, item.quant)).toFixed(2)}</TableCell>
                                </TableRow>
                            ))}

                            <TableRow className={classes.total}>
                                <TableCell rowSpan={3} />
                                <TableCell colSpan={2}>Total</TableCell>
                                <TableCell aling="right">{(valorTotal()).toFixed(2)}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Grid container alignItems="center" spacing={0}>
                    <Grid container item md={6} sm={6} xs={6} xl={3} lg={2}>
                        <TextField className={classes.input} required id="codigo" label="Cod. Cliente" variant="outlined" size="medium" />
                    </Grid>
                    <Grid container item md={6} sm={6} xs={6} xl={3} lg={2}>
                        <FormControl fullWidth required variant="outlined" className={classes.input} xs={12}>
                            <InputLabel htmlFor="outlined-age-native-simple">Forma Pag.</InputLabel>
                            <Select
                                native
                                label="Forma Pag."
                                open={open}
                                onClose={selectClose}
                                onOpen={selectOpen}
                                value={pagamento}
                                onChange={selectChange}
                            >
                                <option aria-label="None" value="" />
                                <option value={1}>Dinheiro</option>
                                <option value={2}>Cartão Credito</option>
                                <option value={3}>Cartão Debito</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid container item md={6} sm={6} xs={6} xl={2} lg={2}>
                        <TextField className={classes.input} required id="recebido" label="Valor Recebido" variant="outlined" size="medium" onChange={alterarValor}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                            }} />
                    </Grid>
                    <Grid container item md={6} sm={6} xs={6} xl={2} lg={2}>
                        <TextField className={classes.input} id="troco" label="Troco" variant="outlined" size="medium" aria-readonly InputProps={{
                            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                        }}
                            placeholder='0' />
                    </Grid>
                    <Grid container item md={6} sm={6} xs={6} xl={2} lg={2}>
                        <Button fullWidth className={classes.btn} variant="contained" color="primary" size="large" onClick={event => window.location.href = '/'}>
                            Confirmar
                    </Button>
                    </Grid>
                    <Grid container item md={6} sm={6} xs={6} xl={2} lg={2}>
                        <Button fullWidth className={classes.btn} variant="contained" color="secondary" size="large" onClick={event => window.location.href = '/'}>
                            Cancelar
                    </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}