import React from 'react'
import Card from './Card'
import CardTwo from './CardTwo'
import Filter from './Filter'
import Header from './Header'
import '../style/search_paga.css'
function SearchPage() {
    return (
        <>
            <Header />
            <div>
                <div className='search_paga'>
                    <div className='Sleft'>
                        <Filter />
                    </div>
                    <div style={{
                        margin: "20px",
                        border:"1px solid grey"
                    }}>
                        <Card />
                        <CardTwo />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchPage
