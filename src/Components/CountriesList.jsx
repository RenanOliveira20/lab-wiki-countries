import React from 'react'
import { Link } from 'react-router-dom'
import data from '../countries.json'
const CountriesList = () => {

    return (
        <ul style={{ width: '50%', textAlign: 'left', overflowY: 'auto', height: '90vh' }} >
            {
                data && data.map((e, i) => {
                    return <Link key={i} to={`/${e.cca3}`} style={{ textDecoration: 'none', color: 'black' ,height:'40px', width:'100%', }}>
                        <li style={{ listStyle: 'none', fontSize: '20px' ,height:'40px', width:'100%', border:'1px solid silver'}}>{e.flag} {e.name.common}</li>
                    </Link>
                })
            }
        </ul>
    )
}
export default CountriesList