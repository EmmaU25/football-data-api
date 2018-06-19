import React from 'react';
import Nav from './Assets/Nav'
import Footer from './Assets/Footer'
import AppRoutes from '../routes';

/*class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired 
  };
  
  render() {
    const { children } = this.props;
    return (
      <div>
        <Nav/>
        <Header/>
        <Content body={children}/>
        <Footer/>
      </div>
  );
  }
}

export default App;*/


export default () => (
  <div>
    <Nav/>
    <AppRoutes/>
    <Footer/>
  </div>
);
