import {useState} from 'react'

// onchange event => whenever we type something in the input field, onchange event is triggered and it captures the  value of the input field and updates the state variable "todo" with that value using the setTodo function. This allows us to keep track of the current value of the input field in our component's state and use it for further processing, such as adding a new todo item to a list when the "Add Todo" button is clicked.
// onChange(event) => function(event.target.value)

// onclick event => when the "Add Todo" button is clicked, the onclick event is triggered. This event can be used to perform an action, such as adding the current value of the "todo" state variable to a list of todos or displaying it in the UI. The onclick event allows us to define a function that will be executed when the button is clicked, enabling us to handle user interactions and update our application accordingly.


const Todo = () => {
const[todo, setTodo] = useState("")

//assignment create an input field of firstname, lastname, email and password and capture the value of each input field in a state variable and display it on the UI

const getvalue =(event)=>{
    setTodo(event.target.value)
}
  return (
    <div className="flex justify-center">
        {todo}
      <section >
        <input type="text" value={todo} onChange={getvalue } className="border-8 border-green-400 p-8 text-3xl"/>


      </section>
      <button className="bg-orange-500  p-6  rounded-lg">Add Todo</button>

    </div>
  );
};

export default Todo;