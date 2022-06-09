import React, { useState } from 'react'
import "./Todo.css"
const Todo = () => {
  const [post, setPost] = useState('')
  const [items, setItems] = useState([])
  const [toggleItem,setToggleItem] = useState(true)
  const [isEditItem,setIsEditItem]= useState(null)

  // <---------------addItem-------------------->

  const addItem = () => {
    if (!post) {
      alert("please fill the Data")
    }else if(post && !toggleItem){
      setItems(
        items.map((current_value)=>{
          if(current_value.id === isEditItem){
            return {...current_value,name:post}
          }
          return current_value;
        })
      )
      setToggleItem(true)
      setPost('')
  
      setIsEditItem(null)
    } else {
      const allpost = { id: new Date().getTime().toString(), name: post }
      setItems([...items, allpost])
      setPost('')
    }
  }

  // <----------------editItem-------------->

  const editItem = (id) => {
    let newEditItem = items.find((current_value)=>{
      return current_value.id === id
    })
    // console.log(newEditItem)
    setToggleItem(false)
    setPost(newEditItem.name)

    setIsEditItem(id)
  }
  // <-------------Delete items----------------->

  const deleteItem = (current_index) => {
    const updatedItems = items.filter((val) => {
      return current_index !== val.id;
    })
    setItems(updatedItems)
  }

  // <-----------------------Remove Alll----------------------->
  const removeAll = () => {
    setItems([])
  }
  return (
    <>
      <div className="main-div">
        <div className="inner-div">
          <p className='para'>Todo app</p>
          <input type="text" placeholder='Add items' value={post} onChange={(e) => setPost(e.target.value)} />
          {
            toggleItem ?  <i className="fa-solid fa-plus" title='Add item' onClick={addItem}></i> :
            <i className='fa-solid fa-pen-to-square' title='Update-item' onClick={addItem}></i>
          }
         

          <div className="showitem">
            {items.map((current_value) => {
              return (
                <div key={current_value.id} className="eachitem">
                  <p className='item'>{current_value.name}</p>
                  <div className='todo'>
                    <i className='fa-solid fa-pen-to-square' title='Edit-item' onClick={() => editItem(current_value.id)}></i>
                    <i className='fa-solid fa-trash-alt' title='Delete-item' onClick={() => deleteItem(current_value.id)}></i>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='remove'>
            <button style={{ marginTop: "10px" }} onClick={removeAll}>Remove All</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo
