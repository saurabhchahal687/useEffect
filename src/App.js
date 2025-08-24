import './App.css';
import {useEffect,useState} from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(1)
  // first ->side-effect function
  // second ->clean-up function
  // third -> comma separated dependency list

  // variation:1
  // runs on every render
  // executes just before every render
//   useEffect(() => {
//     alert("I will run on each render")
//  })

// variation : 2
// that runs on only first render (empty dependency)

// useEffect(()=>{
//   alert("I will run only on 1st render");
// }, [])

// variation :3
// runs when count value is changed(value in dependencies list is changed)
// default value given in state declaration is also considered a change so it will run at start too

// useEffect(()=>{
//   alert("I will run every time count is updated")

// },[count])

// variation : 4
// multiple dependecies
// useEffect(()=>{

// alert("run everytime when count or total are updated")

// }, [count,total])

// varitation :5
// add cleanup function(triggers when count is unmounted from ui i.e. previous value of count is removed)

// useEffect(()=>{
//   alert("count is updated")

//   return()=>{
//     alert("count is unmounted from ui")
//   }
// }, [count])


 function handleClick(){
  setCount(count+1);
 }

function handleClickTotal(){
  setTotal(total+1);
}

  return (
    <div>
      <button onClick={handleClick}>
        update count
      </button>
      <br/>
      count is : {count}
      <br/>
      <button onClick={handleClickTotal}>
        update Total
      </button>
      <br/>
      total is : {total}
    </div>
  );
}

export default App
