import React from 'react'

const QuoteBoxBtn = ({getRandom}) => {
  return (
    <div>
        <i onClick={getRandom} className='bx bxs-chevron-right-circle  '></i>
        
    </div>
  )
}

export default QuoteBoxBtn