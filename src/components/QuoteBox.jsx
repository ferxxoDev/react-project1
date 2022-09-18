import React from 'react'
import QuoteBoxBtn from './QuoteBoxBtn'

const QuoteBox = ({ randomQuote,randomColor, getRandom}) => {

    const colorObj = {
        color: randomColor
    }

    return (
        <article className='card' style={colorObj}>
            <i className='bx bxs-quote-alt-left '></i>

            <p className='card_quote'>{randomQuote.quote}”</p>
            <h1 className='card_author'>- {randomQuote.author}</h1>
            <QuoteBoxBtn
                getRandom={getRandom}
            />
        </article>
    )
}

export default QuoteBox