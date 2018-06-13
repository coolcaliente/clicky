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

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}


class App extends Component {
  state = {
    cards,
    score: 0,
    topScore: 0,
    message: "Click any picture to play",
    display: shuffleArray(cards),
    clickedPic: []
  };



  handleIncrement = id => {

    if (isInArray(id, this.state.clickedPic)) {
      this.state.message = "You guessed incorrectly!";
      if (this.state.score > this.state.topScore) {
        this.state.topScore = this.state.score;
      }
      this.state.score = 0;

    } else {
      this.state.clickedPic.push(id);
      console.log(this.state.clickedPic);
      this.state.score++;
      this.state.message = "You guessed correct!";
    }
    this.handleShuffle();
  };

  handleShuffle = () => {
    let newShuffledArray = shuffleArray(cards);
    this.setState({ cards: newShuffledArray });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
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
