import Cardapio from '@material-ui/icons/ImportContacts';
import Carrinho from '@material-ui/icons/ShoppingCart';

const Menu = [
  {
    label: "Cardapio",
    pathname: "/",
    icons: <Cardapio/>
  },
  {
    label: "Carrinho",
    pathname: "/carrinho",
    icons: <Carrinho/>
  },
];

export default Menu;
