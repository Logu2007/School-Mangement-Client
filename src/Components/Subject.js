import React, { useEffect, useState } from 'react'

const Subject = () => {
    const [Subject, setSubject] = useState('')
    const [Teacher, setTeacher] = useState('')
    const [TeacherGet,setTeacherGet]=useState([])
    const OnSubmitHandler = (e) => {
        e.preventDefault();
        try {
            fetch('http://localhost:4000/subject', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Subject, Teacher})
            }).then((res) => {
                if (res.ok) {
                    alert('Details Submitted Successfully!')

                }
            })
        }
        catch (err) {
            alert('Api Error ', err)
        }
    }
    useEffect(()=>{
        const fetchTeacherGet=()=>{
            try {
                fetch('http://localhost:4000/teacher', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                }).then((res) =>res.json())
                .then((response)=>setTeacherGet(response.TeacherDetails))
            }
            catch (err) {
                alert('Api Error ', err)
            }}
            
            fetchTeacherGet()
    },[])
    return (

        <>
        <center>
            <div>
                <h2>Teacher Master</h2>
                <form onSubmit={OnSubmitHandler}>
                    <table>
                        <tr>
                            <td><label>Subject : </label></td>
<td><input type='text' name='Subject'placeholder='Subject'onChange={(e)=>{setSubject(e.target.value)}}/></td>
                              </tr>
                        <tr>
                            <td><label>Teacher Name : </label></td>
                            <td>
<select name='Teacher'onChange={(e)=>setTeacher(e.target.value)}>
    <option>Select</option>
    {
        TeacherGet.map((item,index)=>(<option key={index}>{item.Teacher}</option>))
    }
</select>
                            </td>
                        </tr>
                        <tr><td></td><td><input type='submit'value='Submit'/></td></tr>
                    </table>
                </form>
            </div>
            </center>
        </>
    )
}

export default Subject