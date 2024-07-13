import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom'

const View = () => {
  var[emp,setEmp] = useState([])
  var navigate= useNavigate()
  

  useEffect(()=>{
  axios.get("http://localhost:3006/view")
  .then((res)=>{
    console.log(res);
    setEmp(res.data);
  }).catch((err)=>{console.log(err)})
},[])

const delvalue=(id)=>{
  console.log(id)
  axios.delete("http://localhost:3006/remove/"+id)
  .then((res)=>{
    alert(res.data.message)
    window.location.reload()
  })
  .catch((error)=>{ console.log(error)})

}
const updatevalue=(val)=>{
  console.log("up clicked")
  navigate("/",{state: {val}});
}
    return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Salary</TableCell>
                    <TableCell>Department</TableCell>
                    
                </TableRow>
            </TableHead>
            <TableBody>
              {emp.map((val,i)=>{
                return(
                <TableRow>
                  <TableCell>{val.Name}</TableCell>
                  <TableCell>{val.Age}</TableCell>
                  <TableCell>{val.Phone}</TableCell>
                  <TableCell>{val.Salary}</TableCell>
                  <TableCell>{val.Department}</TableCell>
                  <TableCell>
                  <Button variant='contained'
                  onClick={()=>{delvalue(val._id)}}
                  >Delete</Button>&nbsp;
                  <Button variant='contained' 
                  onClick={()=>{updatevalue(val)}}>Update</Button>
                  </TableCell>
                </TableRow>
)})}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default View
