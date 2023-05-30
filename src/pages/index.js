import React, { Component } from 'react';
import ReactDOM from 'react-dom';
 

function Welcome(props) {
	return <h1>Hello, welcome {props.name},{props.age}</h1>;
	<h1>Hello, welcome </h1>;
  }

//   function Welcome(props)
//   {
// 	return (<div className="Comment">
// 	<div className="UserInfo">
// 	  <Avatar user={props.author} />
// 	  <div className="UserInfo-name">
// 		{props.author.name}
// 	  </div>
// 	</div>
// 	<div className="Comment-text">
// 	  {props.text}
// 	</div>
// 	<div className="Comment-date">
// 	  {formatDate(props.date)}
// 	</div>
//   </div>
// 	);
//   }

  
// const root = ReactDOM.createRoot(document.getElementById('root'));
  
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element);
// }

// setInterval(tick, 1000);
  
 
const Home = () => {
return (
	<div>
	 <h1><Welcome age="18" /></h1>
	 <h1><Welcome name="Sara" /></h1>
	 <h2><Welcome name="to our react website"/></h2>
	<h1><Welcome name= "to React" /> </h1>
	</div>

	
);
};

export default Home;
