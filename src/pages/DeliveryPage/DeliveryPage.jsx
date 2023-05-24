// import { mcDonalds } from '../../services/mcDonalds';
// import McDonaldsList from '../../components/McDonaldsList/McDonaldsList'

import { KFC } from 'services/KFC';
import KFCList from 'components/KFCList/KFCList';
import s from './DeliveryPage.module.scss'

function BurgerPage({ handleAddToCart, handleRemoveFromCart, getCartItemQuantity }) {
  
  return (
    <section className={s.section__burgerPage}>
      
      <KFCList KFC={KFC} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} getCartItemQuantity={getCartItemQuantity} />
      
    </section>
  );
}

export default BurgerPage;


      // <BurgerKingList mcDonalds={mcDonalds} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} getCartItemQuantity={getCartItemQuantity} />
      // <McDonaldsList mcDonalds={mcDonalds} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} getCartItemQuantity={getCartItemQuantity} />