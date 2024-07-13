import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = (props) => {
  var[inputs,setInputs]=useState({Name:"",Age:"",Phone:"",Salary:"",Department:""})
  var navigate = useNavigate()
  var location= useLocation()
  console.log(location.state)

  const inputHandler = (e)=>{
    setInputs({...inputs,[e.target.name]:e.target.value})
    console.log(inputs)
  }
  const AddHandler = ()=>{
    if(location.state!==null)
    {
      axios.put("http://localhost:3006/update/"+location.state.val._id,inputs)
      .then((res)=>{
        console.log(res)
        alert(res.data.message)
        navigate('/a')
      }).catch((err)=>{
        console.log(err)
      })
    }
    else{
    axios.post("http://localhost:3006/add",inputs)
    .then((res)=>{
      console.log(res)
      alert(res.data.message)
      navigate('/a')
    })
    .catch((err)=>{
      console.log(err)
    })}
  }
    useEffect(()=>{
      if(location.state !==null){
        setInputs({...inputs,Name:location.state.val.Name
                            ,Age:location.state.val.Age
                            ,Phone:location.state.val.Phone
                            ,Salary:location.state.val.Salary
                            ,Department:location.state.val.Department
        })
      }
    },[])
  
  return (
    <div>
      <TextField variant='outlined' label="Name"
      onChange={inputHandler}
      name="Name"
      value={inputs.Name}/>
      <br /><br />
      <TextField variant='outlined' label="Age"
      onChange={inputHandler}
      name="Age"
      value={inputs.Age}/>
      <br /><br />
      <TextField variant='outlined' label="Phone"
      onChange={inputHandler}
      name="Phone"
      value={inputs.Phone}/>
      <br /><br />
      <TextField variant='outlined' label="Salary"
      onChange={inputHandler}
      name="Salary"
      value={inputs.Salary}/>
      <br /><br />
      <TextField variant='outlined' label="Department"
      onChange={inputHandler}
      name="Department"
      value={inputs.Department}/>
      <br /><br />
      <Button variant='contained' onClick={AddHandler}>SUBMIT</Button>
    </div>
  )
}

export default Add
