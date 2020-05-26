import React from 'react'
import './QuoteBox.css'

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
      tweetURL: ""
    } 

    // Bind Handles and Functions
    this.getRandomQuote = this.getRandomQuote.bind(this);
    this.handleNewQuote = this.handleNewQuote.bind(this);
  }

  // Get random quote at component startup
  componentDidMount = () => {
    this.getRandomQuote()
  }

  // Fetch random quote from an API and set state
  getRandomQuote = () => {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then((response) => response.json())
      .then((data) => data.quotes.map((item) => (
        {
          quote: `${item.quote}`,
          author: `${item.author}`
        }
      )))
      .then((quotes) => {
        const index = Math.floor(Math.random() * quotes.length);
        this.setState({
          quote: quotes[index].quote,
          author: quotes[index].author,
          tweetURL: "https://twitter.com/intent/tweet/?text=" + quotes[index].quote.replace(/ /g, "+") + "+-" + quotes[index].author.replace(/ /g, "+")
        })
      })
      .catch(error => console.log('An Error Occured', error))
  }

  // Handle new quote and color change on button click
  handleNewQuote = () => {
    const colors = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    while (randomColor === this.props.color) {
      randomColor = colors[Math.floor(Math.random() * colors.length)];
    }

    this.props.handleColorChange(randomColor)
    this.getRandomQuote();
  }
    
  render() {
    const { quote, author, tweetURL } = this.state;
    return (
      <div id="quote-box">
        <div id="quote-container">
          <p id="text">{"\""}{quote}{"\""}</p>
          <p id="author">-{author}</p>
        </div>
        <div id="btn-container">
          <button id="tweet-quote"><a href={tweetURL}><i className="fa fa-twitter" aria-hidden="true"></i>
</a></button>
          <button id="new-quote" onClick={this.handleNewQuote}>New Quote</button>
        </div>
      </div>
    )
  }
}

export default QuoteBox;