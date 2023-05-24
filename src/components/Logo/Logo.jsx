import { GiHamburger } from "react-icons/gi";
import s from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={s.logo__Container}>
      <GiHamburger className={s.logo__Header} />
        <p className={s.logo__description}>Burger Delivery</p>
    </div>
  );
};

export default Logo;