import React  from 'react'
import ReactDom from 'react-dom/client'
// import App from './App.jsx'

// function MyApp(){
//   return(
//     <p>hello everyone!</p>
//   );
// }

// const reactELement = {
//   type: 'a',
//   props: {
//     href: "https:/google.com",
//     target: "google"
//   },
//   child: "click here to visit google"
// }

const reactElement = React.createElement(
  'a',
  {
    href: "https:/google.com",target: "_blank"
  },
  "click to visit google"
)
const anotherElement = (
  <h1>hello ever</h1>

)

ReactDom.createRoot(document.getElementById('root')).render(
  anotherElement
  
)
