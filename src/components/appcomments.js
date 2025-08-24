//1. function App() {

//   // first ->side-effect function
//   // second ->clean-up function
//   // third -> comma separated dependency list

//   useEffect(() => {
//     first

//     return() => {
//       second
//     }
//   }, [third])
  
//   return (
//     <div>

//     </div>
//   );
// }


// 2.   // variation:1
//   // runs on every render
//   // executes just before every render
//   useEffect(() => {
//     alert("I will run on each render")
//  })
//  function handleClick(){
//   setCount(count+1);
//  }
//   return (
//     <div>
//       <button onClick={handleClick}>
//         Click me
//       </button>
//       <br/>
//       count is : {count}
//     </div>
//   );
// }

// 3.// variation : 4
// // multiple dependecies

// const [count, setCount] = useState(0)
//   const [total, setTotal] = useState(1)

// useEffect(()=>{

// alert("run everytime when count or total are updated")

// }, [count,total])

//  function handleClick(){
//   setCount(count+1);
//  }

// function handleClickTotal(){
//   setTotal(total+1);
// }

//   return (
//     <div>
//       <button onClick={handleClick}>
//         update count
//       </button>
//       <br/>
//       count is : {count}
//       <br/>
//       <button onClick={handleClickTotal}>
//         update Total
//       </button>
//       <br/>
//       total is : {total}
//     </div>
//   );
// }