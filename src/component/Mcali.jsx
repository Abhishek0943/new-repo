import React from 'react'
import { useState } from 'react'
import '../style/mcali.css'
function Mcali() {
    const [showOne, setShowOne] = useState(false)
    const [showTwo, setShowTwo] = useState(false)
    const [showThree, setShowThree] = useState(false)
    const [showFour, setShowFour] = useState(false)
    const [showFive, setShowFive] = useState(false)
    const [showSix, setShowSix] = useState(false)
    const [showSeven, setShowSeven] = useState(false)
    const [showEight, setShowEight] = useState(false)
    const [showNine, setShowNine] = useState(false)
    const [showTen, setShowTen] = useState(false)
    return (
        <>
            <li className='dropdownli' onMouseOver={() => setShowOne(true)} onMouseOut={() => setShowOne(false)}>
                Top Ranked collage
                <div className='sub_dropdown_con'>
                    <ul className={`sub_dropdown ${showOne ? 'active' : 'inactive'}`} >
                        <li>
                            Top MBA Colleges in India
                        </li>
                        <li>Top MBA Colleges in India</li>
                        <li>Top MBA Colleges in Banglore</li>
                        <li>Top MBA Colleges in Mumbai</li>
                        <li>Top MBA Colleges in pune</li>
                        <li>Top MBA Colleges in Hyderabad</li>
                        <li>Top MBA Colleges in Dehli</li>
                        <li>Top MBA Colleges in Chennai</li>
                    </ul>
                    <ul className={`sub_dropdown ${showOne ? 'active' : 'inactive'}`} >
                        <li> Featured Colleges </li>
                        <li> Lexicon Management Institute of Leadership and Excellence </li>
                        <li>International Institute of Management Studies (IIMS Pune) </li>
                    </ul>
                </div>

            </li>
            <li className='dropdownli' onMouseOver={() => setShowTwo(true)} onMouseOut={() => setShowTwo(false)}>Popular courses
                <div className='sub_dropdown_con'>
                    <ul className={`sub_dropdown ${showTwo ? 'active' : 'inactive'}`} >
                        <li>
                            Top MBA Colleges in India
                        </li>
                        <li>Top MBA Colleges in India</li>
                        <li>Top MBA Colleges in Banglore</li>
                        <li>Top MBA Colleges in Mumbai</li>
                        <li>Top MBA Colleges in pune</li>
                        <li>Top MBA Colleges in Hyderabad</li>
                        <li>Top MBA Colleges in Dehli</li>
                        <li>Top MBA Colleges in Chennai</li>
                    </ul>
                    <ul className={`sub_dropdown ${showOne ? 'active' : 'inactive'}`} >
                        <li> Featured Colleges </li>
                        <li> Lexicon Management Institute of Leadership and Excellence </li>
                        <li>International Institute of Management Studies (IIMS Pune) </li>
                    </ul>
                </div>
            </li>
            <li className='dropdownli' onMouseOver={() => setShowThree(true)} onMouseOut={() => setShowThree(false)}>Exams</li>
            <li className='dropdownli' onMouseOver={() => setShowFour(true)} onMouseOut={() => setShowFour(false)}>COLLEGES By Location</li>
            <li className='dropdownli' onMouseOver={() => setShowFive(true)} onMouseOut={() => setShowFive(false)}>Compare Colloeges</li>
            <li className='dropdownli' onMouseOver={() => setShowSix(true)} onMouseOut={() => setShowSix(false)}>College Review</li>
            <li className='dropdownli' onMouseOver={() => setShowSeven(true)} onMouseOut={() => setShowSeven(false)}>CAT Percentile Pridictor</li>
            {/* <li className='dropdownli' onMouseOver={() => setShowEight(true)} onMouseOut={() => setShowEight(false)}>Colloege predictors</li> */}
            {/* <li className='dropdownli' onMouseOver={() => setShowNine(true)} onMouseOut={() => setShowNine(false)}>Ask current MBA Students</li> */}
            {/* <li className='dropdownli' onMouseOver={() => setShowTen(true)} onMouseOut={() => setShowTen(false)}>Resources</li> */}
        </>
    )
}

export default Mcali
