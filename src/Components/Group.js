import React, { useEffect, useState } from 'react'

const Group = () => {
    const [Subject, setSubject] = useState('')
    const [Group, setGroup] = useState('')
    const [SubjectGet,setSubjectGet ]=useState([])
    const OnSubmitHandler = (e) => {
        e.preventDefault();
        try {
            fetch('http://localhost:4000/group', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Subject, Group})
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
        const fetchSubjectGet=()=>{
            try {
                fetch('http://localhost:4000/subject', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                }).then((res) =>res.json())
                .then((response)=>setSubjectGet(response.SubjectDetails))
            }
            catch (err) {
                alert('Api Error ', err)
            }}
            
            fetchSubjectGet()
    },[])
    return (

        <>
        <center>
            <div>
                <h2>Group Master</h2>
                <form onSubmit={OnSubmitHandler}>
                    <table>
                    <tr>
                            <td><label>Group : </label></td>
                            <td>
<select name='Group'onChange={(e)=>setGroup(e.target.value)}>
    <option>Select</option>
    <option>Computer Science</option>
    <option>Biology</option>
    <option>Commerce</option>
</select>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Subject : </label></td>
<td>
    <select name='Subject'onChange={(e)=>{setSubject(e.target.value)}}>
        <option>Select</option>
        {
            SubjectGet.map((item,index)=>(<option key={index}>{item.Subject}</option>))
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

export default Group