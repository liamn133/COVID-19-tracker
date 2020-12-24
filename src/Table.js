import React from 'react'
import './Table.css'

function Table({countries}) {
    return (
        <div className = "table">
            {countries.map(({country,cases})=>(
            <tr>
                <td>
                {country}
                </td>
                <td>
                 {cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </td>
            </tr>
            ))}
        </div>
    )
}

export default Table;
