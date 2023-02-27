import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { deleteTeam } from '../features/teams/teamSlice'

function HistoricDataItem({sto}) {

    return (
        <tbody>
            <tr>
            <th scope="row">12.12.2022</th>
            <td>{sto.gk_saveRatio}</td>
            <td>{sto.gk_cleanSheets}</td>
            <td>{sto.gk_RunsOut}</td>
            <td>{sto.monthlyGame}</td>
            
            </tr>
        </tbody> 

        
    )
}

export default HistoricDataItem