import { useState } from 'react'
import './App.css'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import colors from './utils/colors'

function App() {

  const getIndexRandom = arr => Math.floor(Math.random() * arr.length)

  const firstQuote = quotes[getIndexRandom(quotes)]
  const firstColor = colors[getIndexRandom(colors)]

  const [randomQuote, setRandomQuote] = useState(firstQuote)
  const [randomColor, setRandomColor] = useState(firstColor)

  const backgroundObject = {
    backgroundColor: randomColor
  }

  const getRandom = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)])
    setRandomColor(colors[getIndexRandom(colors)])
  }


  return (
    <SwitchTransition>
      <CSSTransition
        key={randomColor}
        classNames='fade'
        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
      >
      <div style={backgroundObject} className="App">
      <QuoteBox
        randomQuote={randomQuote}
        randomColor={randomColor}
        getRandom={getRandom}
      />
    </div>
      </CSSTransition>
    </SwitchTransition>
    
  )
}

export default App
