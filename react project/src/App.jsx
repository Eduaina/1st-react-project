import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'




// function App () {

//   return (
//     <>
//     <div className='container'>
//       <svg>
//         <cirle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
//       </svg>

//     </div>
//     </>
//   );
// }

// export default App;




const Example = () => {

  const [ change, setChange] = useState(true);

  return(
    <div>
      <button onClick={() => setChange (!change)}> Click Here</button>

      {change ? <h1>Welcome to strong work in serious hunger</h1>: 
        <h1>tired and hungry</h1>
      }
    </div>
  );
  
  
}

export default Example;
   
  
// function App() {
//   const [count, setCount] = useState(0)
      
//        function increment() {
//            count = count + 1
//            count += 1 
//            let count = 0
//        }
//        function save() {
           
//            let countStr = count + "  -  "
//            saveEl.textContent += countStr 
//            countEl.textContent = 0
//            count = 0

//            }

//            return (
//             <>

//           <div class="count">
//            <h1>people entered</h1>
//        <h2 id="count-el">0</h2>
//        <button id="increment-btn" onclick="increment()">INCREMENT</button>
//        <button id="save-btn" onclick="save()" >SAVE</button>
//        <p id="save-el">Prev Entries: </p>
//    </div>
   
//        </>
    
//     )


  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
// }

// export default App






