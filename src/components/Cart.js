import React, { PureComponent } from "react";
import "../styles.css";

import CartItem from "./CartItem";
import { connect } from "react-redux";
class Cart extends PureComponent {
  getTotal() {
    const { cartGoods } = this.props;
    return cartGoods.reduce((acc, item) => acc + item.price, 0);
  }

  render() {
    return (
      <div className="cart">
        <h2 className="cart__title">Shopping Cart</h2>
        {this.props.cartGoods.length ? (
          <ul className="cart__list">
            {this.props.cartGoods.map((item) => (
              <li className="cart__list-item" key={item.id}>
                <CartItem {...item} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="cart__note">Nothing in the cart now</p>
        )}

        <p className="cart__total">Total: {this.getTotal()}.00$</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartGoods: state.cart,
});

export default connect(mapStateToProps)(Cart);
