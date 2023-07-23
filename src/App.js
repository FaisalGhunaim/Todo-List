import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'


const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

function App() {

  const [text, setText] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert , setAlert] = useState({show : false , msg : 'hello' , type : 'success'})
  




   const showAlert = (show = false, type = "", msg = "") => {
     setAlert({ show, type, msg });
   };
  
  
    const clearList = () => {
      showAlert(true, 'danger', 'empty list')
      setList([])
    };


  

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!text) {
showAlert(true , 'danger' , 'please enter value')
    }
    else if (text && edit) {
      
    } 
    else {
      showAlert(true , 'success' , 'item add to the list')
    list.push(text);
      setText("");

    }   
  }


        useEffect(() => {
          localStorage.setItem('list', JSON.stringify(list));
        }, [list]);

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit} className="grocery-form">
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grocey Bud</h3>
        <div className="from-control">
          <input
            className="grocery"
            type="text"
            value={text}
            placeholder="e.g. eggs"
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="submit-btn"
            style={{ display: "inline" }}
          >
            {edit ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list}  />
          <button className="clear-btn" onClick={clearList}>
            Clear Items
          </button>
        </div>
      )}
    </section>
  );
}

export default App
