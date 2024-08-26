import React, { useState } from 'react'

const School = () => {
    const [Name,setName]=useState('')
    const [Address,setAddress]=useState('')
    const [Contact,setContact]=useState('')
    const [Pricipal,setPricipal]=useState('')
    const OnSubmitHandler=(e)=>{
        e.preventDefault();
        try{
            fetch('http://localhost:4000/school',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({Name,Address,Contact,Pricipal})
            }).then(async(res)=>{
                if(res.ok){
                    alert('Details Submitted Successfully!')

                }
                if(res.status===400){
                    const data=await res.json()
                    alert(data.message)
                }
            })
        }
        catch(err){
alert('Api Error ',err)
        }
    }
  return (
    
    <>
    <center>
    <div>
        <h2>School Master</h2>
        <form onSubmit={OnSubmitHandler}>
        <table>
            <tr>
<td><label>School Name : </label></td>
<td><input type='text'placeholder='School Name'name='Name'onChange={(e)=>{setName(e.target.value)}}/></td>
            </tr>
            <tr>
<td><label>Address : </label></td>
<td><input type='text'placeholder='Address'name='Address'onChange={(e)=>{setAddress(e.target.value)}}/></td>
            </tr><tr>
<td><label>Contact Number : </label></td>
<td><input type='number'placeholder='Contact Number'name='Contact'onChange={(e)=>{setContact(e.target.value)}}/></td>
            </tr>
            <tr>
<td><label>Pricipal Name : </label></td>
<td><input type='text'placeholder='Pricipal Name'name='Pricipal'onChange={(e)=>{setPricipal(e.target.value)}}/></td>
            </tr>
            <tr>
                <td></td>
                <td><input type='submit'value='submit'/></td>
            </tr>
        </table>
        </form>
    </div>
    </center>
    </>
  )
}

export default School