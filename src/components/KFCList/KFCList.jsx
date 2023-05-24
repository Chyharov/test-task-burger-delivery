import { BsCartFill, BsPlus, BsDash } from "react-icons/bs";
import s from './KFCList.module.scss'
      
function KFCList({ handleAddToCart, handleRemoveFromCart, getCartItemQuantity, KFC }) {
  
    return (
      <div className='container'>
        <h1 className='visually__hidden'>burgerStyle - order your burger online</h1>
        <ul className={s.mcDonaldsList}>
        {KFC.map((burger) => (
          <li className={s.mcDonaldsListItem} key={burger.id}>
            <img loading='lazy' width="280px" height="280px" className={s.mcDonaldsListItem__image} src={burger.image} alt={burger.title} />
            <div className={s.mcDonaldsListItem__container}>
                <h2 className={s.mcDonaldsListItem__title}>{burger.title}</h2>
                <p className={s.mcDonaldsListItem__description}>{burger.description}</p>
                <div className={s.mcDonaldsListItem__priceContainer}>
                  <p className={s.mcDonaldsListItem__price}>{burger.price} UAH</p>
                  {getCartItemQuantity(burger) > 0 ? (
                    <div className={s.mcDonaldsListItem__cartControls}>
                      <button type="button" aria-label="Button decrement" className={s.mcDonaldsListItem__cartButton_decrement} onClick={() => handleRemoveFromCart(burger)}><BsDash aria-label="Decrement icon" className={s.mcDonaldsListItem__cartButtonSvg}/></button>
                        <span className={s.mcDonaldsListItem__cartQuantity}>{getCartItemQuantity(burger)}</span>
                      <button type="button" aria-label="Button increment" className={s.mcDonaldsListItem__cartButton_increment} onClick={() => handleAddToCart(burger)}><BsPlus aria-label="Increment icon" className={s.mcDonaldsListItem__cartButtonSvg}/></button>
                    </div>
                  ) : (
                    <button type="button" aria-label="Button add to cart" className={s.mcDonaldsListItem__btn} onClick={() => handleAddToCart(burger)}>Add to cart <BsCartFill aria-label="Add to cart icon"/></button>
                  )}
                </div>
            </div>
            </li>
            ))}
            </ul>
            </div>
  );
}

export default KFCList;