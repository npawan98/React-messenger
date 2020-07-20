import React,{ useState,useEffect } from 'react';
import { Button, FormControl, InputLabel,Input} from '@material-ui/core';
import './App.css';
import Message from "./Message";
import db from './firebase'; // this is firebase config file
import firebase from 'firebase'; // here we are pulling out form action firebase
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState(''); //setted a state
  // const [messages, setMessages] = useState(['a','b','c']);
  const [messages, setMessages] = useState([
    // {username: 'pawan', text: "hey whatsup"},
    // {username: 'kumar',text: 'welcome'}
    // now we can remove this hardcoded code here as we have connected to the firebase database
    // {username: 'pawan', message: "hey whatsup"},
    // {username: 'kumar',message: 'welcome'}
  ]);
  const [username, setUsername] = useState('');
  // console.log(input);
  // console.log(messages);
   // useState = is basically creaqting a variable in react.
   //useEffect = runs code on a condition in REACT

   useEffect(()=>{
     //run once when the app component loads 
     //onSnapshot() takes the snapshot of the database every time the data is modified on database
     db.collection('messages').orderBy('timestamp','desc')
     .onSnapshot(snapshot=>{
       setMessages(snapshot.docs.map(doc=>doc.data()))
     })

   },[])

   useEffect(()=>{
     //run code here..
     //const name = prompt("enter yout name"); // we will use as below
     setUsername(prompt("Enter your Name: "));
     

   },[])//condition

  const sendMessage = (event) => {
    //all the logic to send the message goes here
    event.preventDefault(); //prevents refresh
    //sending msg to the database

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() // we are using server time zone. for a reason (think it :-)
    })



    setMessages([...messages,{username: username,text: input}]); // add at the end of the array //appended a object
    setInput('');// for clearing the text in the input 
  }

  return (
    <div className="App">
     <h1>Welcome to My Messenger 🚀</h1>
     <h6>Developed with ❤ by Pawan😅</h6>
     <h2>Welcome {username} !</h2>
     {
       //imported icon form google material icons (i.e IconButton)
     }
     
    <form className="app__form">
    <FormControl className="app__formControl">
      <Input className="app__input" placeholder="Enter a message..." value = {input} onChange = {event => setInput(event.target.value)}/>
    
        <IconButton className="app__iconButton" disabled ={!input} variant="contained" color = "primary" type = "submit" onClick ={sendMessage}
        >
        <SendIcon />
        </IconButton>

    </FormControl>
    </form>

    <FlipMove> 
    { // to display the messages
      messages.map(message => ( // instead of writing for loop and all we are using map function for super clean
        // basically map returns something 
        // <Message username = {message.username} text = {message.text}/> 
        // now we are paqssing the message as an overall object \
        <Message username = {username} message={message}/>
        // <p>{message}</p>
        

        //1:53:34 we have moved these message from bottom to the flip

        //not working

        
      ))
    }
    
    </FlipMove>
     
      
    </div>
  );
}

export default App;
