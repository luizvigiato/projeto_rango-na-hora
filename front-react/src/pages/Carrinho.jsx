import { Container, CssBaseline, makeStyles } from '@material-ui/core';
import React from 'react';
import { PersistentDrawerLeft } from '../components/Drawer';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import carrinho from '../text_teste/carrinho';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


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
    total:{
        backgroundColor:'#eeeeee'
    }


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



export default function Carrinho() {

    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                <PersistentDrawerLeft />

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow >
                                <TableCell className={classes.topo} aling="center" colSpan={4}>
                                    <b><ShoppingCartIcon className={classes.desenho} />Carrinho</b>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Item</TableCell>
                                <TableCell>Qnt.</TableCell>
                                <TableCell>Valor Un.</TableCell>
                                <TableCell>Total p/ Item</TableCell>
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



            </Container>
        </>
    );
}