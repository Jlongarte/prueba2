import "./style.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { router } from "./utils/router";

const init = () => {
  Header();
  Footer();
};

init();
//Ejecutamos el router cada vez que arranca la aplicación
router();
