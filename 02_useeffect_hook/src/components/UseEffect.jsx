// useEffect hook 

import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");

  //  trigger every re-render - componentDidMount Alternative
  useEffect(() => {
    console.log("I trigger every re-ender!");
  });

  //  On first Render + whenever dependency changes!- componentDidUpdate Alternative
  useEffect(() => {
    console.log(`My name is ${name}`);
  }, [name]);

  // Follows the same rules, except this handles the unmounting on a component! - componentWillUnmount Alternative
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    
    return () => {
        // when component unmounts, this cleanup code runs...
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <div>
      <h3>UseEffect hook</h3>
      <p>The window width is {windowWidth}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
    </div>
  );
};

export default UseEffect;

// ------------------------------------------------------------------------------------------------------------------------------

// // lifecycle method using class components

// import React, { Component } from 'react'

// export class UseEffect extends Component {

//     constructor(props){
//         super(props)

//         this.state = {
//             windowWidth:window.innerWidth,
//             name : ""
//         }
//     }

//     componentDidMount = () => {
//         // Lifecycle func - when component mounts/ loads
//         console.log("componentDidMount");
//     }

//     componentDidUpdate = (prevProps) => {
//         // Lifecycle func - when component props change
//         console.log("componentDidUpdate");
//     }

//     componentWillUnmount = () => {
//         // Lifecycle func - when component unmounts/ cleanup fn
//         console.log("componentWillUnmount");
//     }

//   render() {
//     return (
//           <div>
//       <h3>UseEffect hook</h3>
//       <p>The window width is {this.windowWidth}</p>
//       <input
//         type="text"
//         value={this.name}
//         onChange={(e) => this.setState(e.target.value)}
//         placeholder="Enter name"
//       />
//     </div>
//     )
//   }
// }

// export default UseEffect;