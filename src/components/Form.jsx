
import React from 'react'
import {useState} from 'react'

function Form({movieSearch}) {

    const [form, setForm] = useState ({
      searchTerm: ''  
    });

    const handleChange =(e) => {
        console.log(e.target.value)
      setForm({
        ...form,
        [e.target.name] : e.target.value
      })
}
const handleSubmit = (e) => {
    e.preventDefault();
    movieSearch(form.searchTerm);
}

 return (
    <div>
        <form action="">
            <input type="text" value={form.searchTerm}onChange={handleChange}/>
            <input type="submit" value="submit"/>
        </form>
        </div>
  )
}

export default Form