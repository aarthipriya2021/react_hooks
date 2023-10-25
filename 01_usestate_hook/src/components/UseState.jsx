// useState hook using useState & Functional component.

import React, { useState} from 'react'

const UseState = () => {

// useState structure will be like this, in array format first element is initial state, another one is set state. we could include initial state value in "useState()".

  const [count, setCount] = useState(0);

// this is arrow fn, that provides the value of updating state in this component.

  const increment = () => {
    setCount(count+1)
  }

  const decrement = () => {
    setCount(count-1)
  }

  return (
    <div>
      <h3>Welcome User!</h3>
      <p>The count is : {count}</p>
      <button type='button' className='btn btn-outline-danger me-3' onClick={decrement}>-</button>
      <button type='button' className='btn btn-outline-success ms-3' onClick={increment}>+</button>
    </div>
  )
}

export default UseState;

// // useState hook using useState & Class component.

// import React, { Component } from "react";

// export class UseState extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//       age: 20,
//     };
//   }

//   decrement = () => {
//     this.setState({
//       count: this.state.count - 1,
//     });
//   };

//   increment = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h3>Welcome User!</h3>
//         <p>The count is : {this.state.count}</p>
//         <button
//           type="button"
//           className="btn btn-outline-danger me-3"
//           onClick={this.decrement}
//         >
//           -
//         </button>
//         <button
//           type="button"
//           className="btn btn-outline-success ms-3"
//           onClick={this.increment}
//         >
//           +
//         </button>
//       </div>
//     );
//   }
// }

// export default UseState;
