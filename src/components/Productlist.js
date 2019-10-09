import React, { Component } from "react";
import Products from "./Products";
import Title from "./Title";

import { ProductConsumer } from "../context";

export default class Productlist extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products"></Title>
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(products => {
                    return <Products key={products.id} products={products} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
      //</products>
    );
  }
}
