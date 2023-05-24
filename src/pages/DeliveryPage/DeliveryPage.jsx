import { mcDonalds } from '../../services/mcDonalds';
import McDonaldsList from '../../components/McDonaldsList/McDonaldsList'
import s from './DeliveryPage.module.scss'

function BurgerPage({ handleAddToCart, handleRemoveFromCart, getCartItemQuantity }) {
  
  return (
    <section className={s.section__burgerPage}>
      
      <McDonaldsList mcDonalds={mcDonalds} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} getCartItemQuantity={getCartItemQuantity} />
      
      
    </section>
  );
}

export default BurgerPage;

{/* <KFCList mcDonalds={mcDonalds} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} getCartItemQuantity={getCartItemQuantity} />
      <BurgerKingList mcDonalds={mcDonalds} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} getCartItemQuantity={getCartItemQuantity} /> */}