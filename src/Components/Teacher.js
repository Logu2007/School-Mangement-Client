import React, { useEffect, useState } from 'react'

const Teacher = () => {
    const [Class, setClass] = useState('')
    const [School, setSchool] = useState('')
    const [Section,setSection]=useState('')
    const [Teacher,setTeacher]=useState('')
    const [SchoolGet,setSchoolGet]=useState([])
    const [ClassGet,setClassGet]=useState([])
    const [SectionGet,setSectionGet]=useState([])
    const OnSubmitHandler = (e) => {
        e.preventDefault();
        try {
            fetch('http://localhost:4000/teacher', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Class, School,Section,Teacher })
            }).then(async(res) => {
                if (res.ok) {
                    alert('Details Submitted Successfully!')
                }
                if(res.status===400){
                    const data=await res.json()
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
    useEffect(()=>{
        const fetchClassGet=()=>{
            try {
                fetch('http://localhost:4000/class', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                }).then((res) =>res.json())
                .then((response)=>setClassGet(response.ClassDetails))
            }
            catch (err) {
                alert('Api Error ', err)
            }}
            
            fetchClassGet()
    },[])
    useEffect(()=>{
        const fetchSectionGet=()=>{
            try {
                fetch('http://localhost:4000/section', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                }).then((res) =>res.json())
                .then((response)=>setSectionGet(response.SectionDetails))
            }
            catch (err) {
                alert('Api Error ', err)
            }}
            
            fetchSectionGet()
    },[])
    
    return (

        <>
        <center>
            <div>
                <h2>Teacher Master</h2>
                <form onSubmit={OnSubmitHandler}>
                    <table>
                        <tr>
                            <td><label>Teacher Name : </label></td>
                            <td><input type='text' name='Teacher'placeholder='Teacher Name'onChange={(e)=>{setTeacher(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td><label>Class : </label></td>
                            <td><select name='Class' onChange={(e) => { setClass(e.target.value) }}>
                                <option>Select</option>
{
ClassGet.map((item,index)=>(<option key={index}>{item.Class}</option>
))
}                               

                            </select></td>  </tr>
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
                            <td><label>Section : </label></td>
                            <td><select name='Section'onChange={(e)=>setSection(e.target.value)}>
                                <option>Select</option>
{
    SectionGet.map((item,index)=>(<option key={index}>{item.Section}</option>))
}
                                </select></td>
                        </tr>
                        
                        <tr><td></td><td><input type='submit'value='Submit'/></td></tr>
                    </table>
                </form>
            </div>
            </center>
        </>
    )
}

export default Teacher