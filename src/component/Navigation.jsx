import React from 'react'
import { useState } from 'react'
import '../style/navigation.css'
import gbImage from '../assets/header-image-desktop.jpg'
import Mcali from './Mcali'

function Navigation() {
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)
    const [open6, setOpen6] = useState(false)
    const [open7, setOpen7] = useState(false)
    const [open8, setOpen8] = useState(false)
    // if (open == true) {
    //     console.log('hii')
    //     setOpen2(false)
        // setOpen3(false)
        // setOpen4(false)
        // setOpen5(false)
        // setOpen6(false)
        // setOpen7(false)
        // setOpen8(false)
    // }
    // if (open2 === true) {
    //     setOpen(false)
    //     setOpen3(false)
    //     setOpen4(false)
    //     setOpen5(false)
    //     setOpen6(false)
    //     setOpen7(false)
    //     setOpen8(false)
    // }
    // if (open3 === true) {
    //     setOpen2(false)
    //     setOpen(false)
    //     setOpen4(false)
    //     setOpen5(false)
    //     setOpen6(false)
    //     setOpen7(false)
    //     setOpen8(false)
    // }
    // if (open4 === true) {
    //     setOpen2(false)
    //     setOpen3(false)
    //     setOpen(false)
    //     setOpen5(false)
    //     setOpen6(false)
    //     setOpen7(false)
    //     setOpen8(false)
    // }
    // if (open5 === true) {
    //     setOpen2(false)
    //     setOpen3(false)
    //     setOpen4(false)
    //     setOpen(false)
    //     setOpen6(false)
    //     setOpen7(false)
    //     setOpen8(false)
    // }

    // if (open6 === true) {
    //     setOpen2(false)
    //     setOpen3(false)
    //     setOpen4(false)
    //     setOpen5(false)
    //     setOpen(false)
    //     setOpen7(false)
    //     setOpen8(false)
    // }
    // if (open7 === true) {
    //     setOpen2(false)
    //     setOpen3(false)
    //     setOpen4(false)
    //     setOpen5(false)
    //     setOpen6(false)
    //     setOpen(false)
    //     setOpen8(false)
    // }
    // if (open8 === true) {
    //     setOpen2(false)
    //     setOpen3(false)
    //     setOpen4(false)
    //     setOpen5(false)
    //     setOpen6(false)
    //     setOpen7(false)
    //     setOpen(false)
    // }
    
    return (
        <>
            <section className='top_Section' style={{
                backgroundImage: `url(${gbImage})`,
                opacity: 0.8
            }}>
                <div className='gradiant'>
                    <ul className='top_ul'>
                        <li className='li' onClick={() => setOpen(!open)} >
                            <span>MCA</span>
                            <ul className={`dropdownul ${open ? 'active' : 'inactive'}`}>
                                <Mcali />
                            </ul>
                        </li>
                        <li className='li' onClick={() => setOpen2(!open2)} >
                            <span>ENGINEERING</span>
                            <ul className={`dropdownul ${open2 ? 'active' : 'inactive'}`}>
                                <Mcali />
                            </ul>
                        </li>
                        <li className='li' onClick={() => setOpen3(!open3)}>
                            <span>MEDICAL</span>
                            <ul className={`dropdownul ${open3 ? 'active' : 'inactive'}`}>
                                <Mcali />
                            </ul>
                        </li>
                        <li className='li' onClick={() => setOpen4(!open4)} >
                            <span>DESIGN</span>
                            <ul className={`dropdownul ${open4 ? 'active' : 'inactive'}`}>
                                <Mcali />
                            </ul>
                        </li>
                        <li className='li' onClick={() => setOpen5(!open5)} >
                            <span>STUDY ABROAD</span>
                            <ul className={`dropdownul ${open5 ? 'active' : 'inactive'}`}>
                                <Mcali />
                            </ul>
                        </li>
                        <li className='li' onClick={() => setOpen6(!open6)}>
                            <span>COUNSELING</span>
                            <ul className={`dropdownul ${open6 ? 'active' : 'inactive'}`}>
                                <Mcali />
                            </ul>
                        </li>
                        <li className='li' onClick={() => setOpen7(!open7)} >
                            <span>CAREEAR TEST</span>
                            <ul className={`dropdownul ${open7 ? 'active' : 'inactive'}`}>
                                <Mcali />
                            </ul>
                        </li>
                        <li className='li' onClick={() => setOpen8(open8)} >
                            <span>MORE</span>
                            <ul className={`dropdownul ${open8 ? 'active' : 'inactive'}`}>
                                <Mcali />
                            </ul>
                        </li>
                    </ul>
                </div>


            </section>
        </>
    )
}

export default Navigation