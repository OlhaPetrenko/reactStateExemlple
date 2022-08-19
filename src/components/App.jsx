// import AccordionItem from './AccordionItem/AccordionItem';
// import List from './List/List';
import ProductForm from './ProductForm/ProductForm';
import { Component } from 'react';

// export const App = () => {

//   return (
//     <div>
//       <ProductForm />
//       {/* <AccordionItem /> */}
//       {/* <List /> */}
//     </div>
//   );
// };

class App extends Component {
  state = {
    products: [],
  };

  onSubmit = product => {
    this.setState(prevState => {
      return {
        products: [...prevState.products, product],
      };
    });
  };
  render() {
    return <ProductForm onSubmit={this.onSubmit} />;
  }
}

export default App;
