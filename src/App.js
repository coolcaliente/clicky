import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import ArrestedDevelopmentCard from "./components/ArrestedDevelopmentCard";
import Footer from "./components/Footer";
import cards from "./cards.json";
import './App.css';


// const App = () => (
//   <Wrapper>
//     <Nav />

//     <Header />

//     <Main>

//       <ArrestedDevelopmentCard />

    
//     </ Main> 
//   </Wrapper>

// );


class App extends Component {
  state = {
    cards,
    count: 0
  };

  handleIncrement = id => {
    console.log();
    // this.setState({ count: this.state.count + 1 });


  };

  render() {
    return(
      <Wrapper>
        <Nav />
        <Header />
        <Main> 
          {this.state.cards.map(card => (
            <ArrestedDevelopmentCard
              id={card.id}
              key={card.id}
              image={card.image}
              />
          ))}
        </ Main>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
