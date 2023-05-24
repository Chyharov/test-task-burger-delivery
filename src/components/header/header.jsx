import { Link } from 'react-router-dom';
import { BsCartFill } from "react-icons/bs";
import Logo from '../Logo/Logo'
import s from './header.module.scss'


function Header({cartItemCount}) {

  return ( 
    <header className={s.header}>
      <div className={'container ' + s.header__container}>
        <nav>
          <ul className={s.navList}>
            <li className={s.navList__item}><Link to="/"><Logo/></Link></li>
            <li className={s.navList__itemCart}><Link to="/cart">{cartItemCount}<BsCartFill className={s.cartLogo}/></Link></li>
          </ul>
        </nav>
      </div>
    </header>
    
  );
}

export default Header;