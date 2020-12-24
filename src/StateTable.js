import React from 'react';
import './StateTable.css'

const StateTable = ({states})=>{
    {console.log("hello" + states)}
    return(
        <div>
            <table id = "stateTable">
                <tr>
                    <th>State</th>
                    <th>Cases</th>
                </tr>
                <tr>
                <td>WA</td>
                <td>{states["Western Australia"]}</td>
                </tr>
                <tr>
                <td>VIC</td>
                <td>{states["Victoria"]}</td>
                </tr>
                <tr>
                <td>SA</td>
                <td>{states["South Australia"]}</td>
                </tr>
                <tr>
                <td>NT</td>
                <td>{states["Northern Territory"]}</td>
                </tr>
                <tr>
                <td>NSW</td>
                <td>{states["New South Wales"]}</td>
                </tr>
                <tr>
                <td>QLD</td>
                <td>{states["Queensland"]}</td>
                </tr>
                <tr>
                <td>ACT</td>
                <td>{states["Australian Capital Territory"]}</td>
                </tr>
                <tr>
                <td>TAS</td>
                <td>{states["Tasmania"]}</td>
                </tr>
            </table>
        </div>
        
    )
    }

export default StateTable;