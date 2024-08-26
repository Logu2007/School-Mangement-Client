import React, { useEffect, useState } from 'react'

const Class = () => {
    const [Class, setClass] = useState('')
    const [School, setSchool] = useState('')
    const [SchoolGet,setSchoolGet]=useState([])
    const OnSubmitHandler = (e) => {
        e.preventDefault();
        try {
            fetch('http://localhost:4000/class', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Class, School })
            }).then(async(res) => {

                if (res.ok) {
                    alert('Details Submitted Successfully!')

                }
                if(res.status===400){
                    const data = await res.json(); // Parse the response as JSON
                    alert(data.message)
                }
            })
        }
        catch (err) {
            alert('Api Error ', err)
        }
    }
    useEffect(()=>{
        const fetchSchoolGet=()=>{
            try {
                fetch('http://localhost:4000/school', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                }).then((res) =>res.json())
                .then((response)=>setSchoolGet(response.SchoolDetails))
            }
            catch (err) {
                alert('Api Error ', err)
            }}
            fetchSchoolGet()
    },[])
    
    return (

        <>
        <center>
            <div>
                <h2>Class Master</h2>
                <form onSubmit={OnSubmitHandler}>
                    <table>
                        <tr>
                        <td><label>School Name : </label></td>
                            <td>
<select name='School'onChange={(e)=>setSchool(e.target.value)}>
    <option>Select</option>
    {
        SchoolGet.map((item,index)=>(<option key={index}>{item.Name}</option>))
        
    }
</select>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Class : </label></td>
                            <td><select name='Class' onChange={(e) => { setClass(e.target.value) }}>
                                <option>Select</option>
                                <option>VI</option>
                                <option>VII</option>
                                <option>VIII</option>
                                <option>IX</option>
                                <option>X</option>
                                <option>XI</option>
                                <option>XII</option>


                            </select></td>  </tr>
                        
                        <tr><td></td><td><input type='submit'value='Submit'/></td></tr>
                    </table>
                </form>
            </div>
            </center>
        </>
    )
}

export default Class