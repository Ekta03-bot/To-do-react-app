
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";

function App() {

  let todos = [

    {
     sno: 1,
     title: "go to mummy"
   },

  {
    sno:2,
    title: "Do the react course "

  },

  {
    sno: 3,
    title: "Do the UI by friday to show to jeff"

  },

  ]
 
  return (
    <>
       <Header title="My Todo List" searchBar={true}/>
       <Todos todos={todos}/>
       <Footer/>

    </>
  );
}

export default App;