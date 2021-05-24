import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Container } from "@material-ui/core";

import Grid from '@material-ui/core/Grid';


import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 460,
    '& .MuiGrid-root':{
      margin: 0,
      padding: 0
    },
    '& .MuiTypography-root':{
      margind: 0,
      padding: 0,
      // backgroundColor:"#F000FF",
    },
    '& .MuiContainer-root':{
      // backgroundColor:"#F000FF",
    }
  },
  action: {
    backgroung: "#F000FF",
    color: "#d50000",
    marginBottom: 1,
    padding: 0,
    margin: theme.spacing(0),
  },
  btn_quantidade: {
    padding: 0,
    margin: 0,
    minWidth: 20,
  },
  btn_numero:{
    padding: 0,
    margin: 0,
    minWidth: 30,
  },
  btn_add: {
    backgroundColor: '#4caf50',
    '&:hover':{
      backgroundColor: '#6fbf73'
    }
  },
  valor: {
    margin: 0,
    fontSize: '0.8rem'
  }
}));



export default function ItensCardapio(props) {

  const classes = useStyles();


  // const theme = useTheme();
  // const [quant, setQuant] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const adicionar = () => {
    props.onChange((prevState) => {
      const novoEstado = [...prevState]
      const itemAlterado = novoEstado.find(item => props.item.id === item.id)
      itemAlterado.quant = props.item.quant + 1;
      // console.log(novoEstado);
      return novoEstado;
    })
  }

  const remover = () => {
    props.onChange((prevState) => {
      const novoEstado = [...prevState]
      const itemAlterado = novoEstado.find(item => props.item.id === item.id)
      itemAlterado.quant--;
      return novoEstado;
    })
  }

  const carrinho = () => {
    setOpen(true);
  }

  const handleClose = (event, reason) => {
    // if (reason === 'clickaway') {
    //   return;
    // }
    props.onChange((prevState) => {
      const novoEstado = [...prevState]
      const itemAlterado = novoEstado.find(item => props.item.id === item.id)
      itemAlterado.quant = 0;
      // console.log(novoEstado);
      return novoEstado;
    })
    setOpen(false);
  };

  return (

    <Box mb={2}>

      {/* {console.log(props)} */}
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="imagem"
            height="180"
            image={props.item.imagem}
            title="Item Cardapio"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.item.label}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.item.descricao}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid container className={classes.action} justify="center" alignItems="center" wrap="nowrap"  spacing={0}>
            <Grid container item md={4} sm={4} xs={4} xl={4} lg={4}>
              <Typography className={classes.valor}>
                <b>Valor R$ {(props.item.valor).toFixed(2)}</b>
              </Typography>
            </Grid>
            <Grid container align = "center" justify = "center" alignItems = "center" item md={5} sm={5} xs={5} lg={6}>
              <Container maxWidth="md" direction="row">
                <Button className={classes.btn_quantidade} variant="contained" size='small' onClick={adicionar}>
                  <AddIcon/>
                </Button>
                <Button className={classes.btn_numero} disabled>{props.item.quant}</Button>
                <Button className={classes.btn_quantidade} variant="contained" size='small' disabled={props.item.quant < 1} onClick={remover}>
                  <RemoveIcon />
                </Button>
              </Container>
            </Grid>
            <Grid item md={4}>
              <Button className={classes.btn_add} size="small" color="primary" placement="right" variant="contained" onClick={carrinho} disabled={props.item.quant<1}>
                Adicionar
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {props.item.quant} {props.item.label} adicionado com sucesso
        </Alert>
      </Snackbar>
    </Box >
  );
}



// export default withStyles(styles)(ItensCardapio);