import {useState} from 'react'

// onchange event => whenever we type something in the input field, onchange event is triggered and it captures the  value of the input field and updates the state variable "todo" with that value using the setTodo function. This allows us to keep track of the current value of the input field in our component's state and use it for further processing, such as adding a new todo item to a list when the "Add Todo" button is clicked.
// onChange(event) => function(event.target.value)

// onclick event => when the "Add Todo" button is clicked, the onclick event is triggered. This event can be used to perform an action, such as adding the current value of the "todo" state variable to a list of todos or displaying it in the UI. The onclick event allows us to define a function that will be executed when the button is clicked, enabling us to handle user interactions and update our application accordingly.


const Todo = () => {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


//assignment create an input field of firstname, lastname, email and password and capture the value of each input field in a state variable and display it on the UI

  return (
    <div  className='flex flex-col gap-4 p-4'>
      <label htmlFor="">First Name</label>
      <input type="text" value={firstname}  onChange={(event) => setFirstname(event.target.value)} />
      {firstname}
  
      <label htmlFor="">Last Name</label>
      <input type="text" value={lastname} onChange={(event) => setLastname(event.target.value)} />

      {lastname}
      <label htmlFor="">Email</label>
      <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      <label htmlFor="">Password</label>
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />

    </div>
  );
};

export default Todo;