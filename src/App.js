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


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
  }
  return array;
};


class App extends Component {
  state = {
    cards,
    display: shuffleArray(cards)
  };



  handleIncrement = id => {
    console.log("you clicked");
    this.handleShuffle();
  
    // this.setState({ count: this.state.count + 1 });

  };

  handleShuffle = () => {
    let newShuffledArray = shuffleArray(cards);
    this.setState({ cards: newShuffledArray });
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
              handleIncrement={this.handleIncrement.bind(this)}
              />
          ))}
        </ Main>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
