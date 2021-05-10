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
import { spacing } from '@material-ui/system';

import bacon from "../public/xbacon.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 460,
       
  },
  action: {
    backgroung: "#F000FF",
    color: "#FF0000",
    marginBottom: 3
  }
});




const ItensCardapio = () => {

    const classes = useStyles();

    return (
      <Box mb={2}>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="X-bacon"
            height="140"
            image={bacon}
            title="X-bacon"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              X-Burger Bacon Plus
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              120 Gramas de costela defiada, 20g de bacon, Pão de hamburger,
              alface, tomate, ovo, queijo cheddar, cebola caramelizada.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.action}>
          <Typography>
            <b>Valor R$ 25,00</b>
          </Typography>
  
          <Button className={classes.bottonLeft} size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      </Box>
    );
  };
  
  export default ItensCardapio;