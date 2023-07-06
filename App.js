import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement('h1', {id: 'heading'}, 'Heading from React Js');
const heading = <h1 id="heading">Heading from React jsdf</h1>
const HeadingComp = () => {
    let count = 0;
    return ( 
    <div>
        { heading1 }
    <h1>Namaste Functional Comp</h1>
    </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComp />);