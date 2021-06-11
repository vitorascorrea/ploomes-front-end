import { useLayoutEffect, useState } from 'react';
import { ProductList } from './components/ProductList';
import { ProductDetails } from './components/ProductDetails';
import { getProducts } from './library/getProducts';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Switch } from 'react-router-dom';

const App = () => {
  const [productList, setProductList] = useState([]);

  useLayoutEffect(() => {
    setProductList(getProducts());
  }, []);

  return (
    <BrowserRouter>
      <div class="wrapper">
        <Switch>
          <Route exact path="/" >
            <ProductList productList={productList} />
          </Route>
          <Route path="/product/:id">
            <ProductDetails />
          </Route>
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
