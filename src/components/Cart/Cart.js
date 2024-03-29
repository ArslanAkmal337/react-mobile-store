import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "../CartColumns";
import CartEmpty from "../Cart/CartEmpty";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="Your" title="cart"></Title>
                  <CartColumns />
                  <CartList value={value}></CartList>
                  <CartTotals value={value}></CartTotals>
                </React.Fragment>
              );
            } else {
              return <CartEmpty />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
