import React from 'react';
// import CartContext  from '../contexts/CartContext';
// import ProductContext from '../contexts/ProductContext';

const Item = (props) => {
	// const { cart, itemRemoved} = useContext(CartContext);
	// const { products } = useContext(ProductContext);

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>${props.price}</p>
				{/*<button onClick={() => itemRemoved(cart => ({...cart, itemRemoved }))}  */}
				<button onClick={() => props.itemRemoved(props.id)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
