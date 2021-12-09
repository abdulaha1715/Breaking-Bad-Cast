import React, { useState} from 'react'

const Search = ({getQuery}) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <section>
            <form action="" className='search'>
                <input 
                type="text" 
                className='form-control' 
                placeholder='Search charecters' 
                value={text} 
                onChange={(e) => onChange(e.target.value)} 
                autoFocus
                />
            </form>
        </section>
    )
}

export default Search
