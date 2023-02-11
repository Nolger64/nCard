import style from "./App.module.css";
import img from "./assets/image-product-desktop.jpg";
import imgMobile from "./assets/image-product-mobile.jpg";
import imgCart from "./assets/icon-cart.svg";
import { useEffect, useState } from "react";
const App = () => {
  //Creo una variable de estado para guardar el ancho de la pantalla (no es lamanera mas eficiente pero es la mas sencilla)
  const [width, setWidth] = useState(window.innerWidth);
  setInterval(() => {
    setWidth(window.innerWidth);
  }, 1000);
  return (
    <div className={style.container}>
      <div className={style.cardCont}>
        <div>
          {width > 768 ? (
            <img 
              src={img}
              className={style.img}
              alt="Un perfume chanel" />
          ) : (
            <img
              src={imgMobile}
              className={style.img}
              alt="Un perfume chanel"
            />
          )}
        </div>
        <div className={style.infoCont}>
          <h3 className={style.subTittle}>perfume</h3>
          <h1 className={style.tittle}>Gabrielle Essence Eau De Parfum</h1>
          <h4 className={style.info}>
            A floral, solar and voluptousus interpretation composed by Oliver
            Polge, Perfum-Creator for the House of CHANEL.
          </h4>
          <div className={style.priceCont}>
            <h1 className={style.mainPrice}>$149.999</h1>
            <span className={style.secPrice}>$169.999</span>
          </div>
          <h1 className={style.btnShop}>
            <img src={imgCart} alt="" /> Add to Cart
          </h1>
        </div>
      </div>
    </div>
  );
};
export default App;
