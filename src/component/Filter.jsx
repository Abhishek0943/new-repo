import React from 'react'
import './filter.css'
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from 'react';
function Filter() {
  const [location, setLocation] = useState(false)
  const [price, setPrice] = useState(false)
  const [owner, setOwner] = useState(false)
  const [rating, setRating] = useState(false)
  const [specilazation, setSpecilazation] = useState(false)
  return (
    <>
      <div className='F_comp'>
        <h4 className='F_top'>FILTER</h4>
        <hr />
        <h5 className='icon' onClick={()=>setLocation(!location)}>Location <IoMdArrowDropdown/></h5>
        <ul className={`F_filter ${location?'active':'inactive'}`} >
          <li className='F_list'><input className='F_input' type="checkbox" /> Dehli</li>
          <li className='F_list'><input className='F_input' type="checkbox" /> Dehli</li>
          <li className='F_list'><input className='F_input' type="checkbox" /> Dehli</li>
          <li className='F_list'><input className='F_input' type="checkbox" /> Dehli</li>
          <li className='F_list'><input className='F_input' type="checkbox" /> Dehli</li>
          <li className='F_list'><input className='F_input' type="checkbox" /> Dehli</li>
          <li className='F_list'><input className='F_input' type="checkbox" /> Dehli</li>
          <li className='F_list'><input className='F_input' type="checkbox" /> Dehli</li>
          <li className='F_list'><input className='F_input' type="checkbox" /> Dehli</li>
          <li className='F_list'><input className='F_input' type="checkbox" /> Dehli</li>
          <li className='F_list'><input className='F_input' type="checkbox" /> Dehli</li>
        </ul>
        <hr />
        <h5 className='icon' onClick={()=>setPrice(!price)}>Total price<IoMdArrowDropdown/></h5>
        <ul className={`F_filter ${price?'active':'inactive'}`} >
          <li> <input type="checkbox" /> {`<1 lakh`}</li>
          <li> <input type="checkbox" /> {`  1-2 lakh`}</li>
          <li> <input type="checkbox" /> {`  2-3 lakh`}</li>
          <li> <input type="checkbox" /> {`  3-4 lakh`}</li>
          <li> <input type="checkbox" /> {`  >4 lakh`}</li>
        </ul>
        <hr />
        <h5 className='icon' onClick={()=>setRating(!rating)}>Rating<IoMdArrowDropdown/></h5>
        <ul className={`F_filter ${rating?'active':'inactive'}`} >
          <li> <input type="checkbox" /> 1</li>
          <li> <input type="checkbox" /> 2</li>
          <li> <input type="checkbox" /> 3</li>
          <li> <input type="checkbox" /> 4</li>
          <li> <input type="checkbox" /> 5</li>
        </ul>
        <hr />
        <h5 className='icon' onClick={()=>setOwner(!owner)}>Ownershipe<IoMdArrowDropdown/></h5>
        <ul className={`F_filter ${owner?'active':'inactive'}`} >
          <li> <input type="checkbox" /> Private</li>
          <li> <input type="checkbox" /> Goverment</li>
        </ul>
        <hr />
        <h5 className='icon' onClick={()=>setSpecilazation(!specilazation)}>Specilazation<IoMdArrowDropdown/></h5>
        <ul className={`F_filter ${specilazation?'active':'inactive'}`} >
          <li> <input type="checkbox" />  sales</li>
          <li> <input type="checkbox" />  finance</li>
          <li> <input type="checkbox" />  research</li>
          <li> <input type="checkbox" />  operation</li>
          <li> <input type="checkbox" />  it & systems</li>
        </ul>
      </div>
    </>
  )
}

export default Filter
