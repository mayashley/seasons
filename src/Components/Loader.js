import React from 'react';



// make it a functional component
// {{message}} is another way of destructuring props
const Loader = ({message}) => {
    return(
  <div className="ui active dimmer">
    <div className="ui big text loader">
        {message}
    </div>
  </div>
    )
}

Loader.defaultProps = {
    message: 'Loading...'
}


export default Loader;