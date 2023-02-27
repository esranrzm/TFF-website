
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createHistoric, reset } from '../features/historics/historicSlice'
import Spinner from '../components/Spinner'

function NewPlayer() {
  
    const {isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.players)
   
    const [file, setFile] = useState();
    const [array, setArray] = useState([]);
    const [fullName, setPlayerName] = useState()
    const [team, setPlayerTeam] = useState()
    const [position, setPlayerPosition] = useState()
    const [raiting, setPlayerRaiting] = useState()
    
    const fileReader = new FileReader();
  

    const handleOnChangeCSV = (e) => {
      setFile(e.target.files[0]);
    };
  
    const csvFileToArray = string => {
      const csvHeader = string.slice(0, string.indexOf("\n")).split(";");
      const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
      //console.log(csvHeader)
      //console.log(csvRows)
      
      const array = csvRows.map(i => {
        const values = i.split(";");
        const obj = csvHeader.reduce((object, header, index) => {
            
          object[header] = values[index];
          
         
          return object;
        }, {});
        //console.log("196: " ,obj)
        return obj;
      });
      
      setArray(array);
    };

  
    const handleOnSubmitCSV = (e) => {
      e.preventDefault();
  
      if (file) {
        fileReader.onload = function (event) {
          const text = event.target.result;
          csvFileToArray(text);
        };
  
        fileReader.readAsText(file);
      }
    };
  
    const headerKeys = Object.keys(Object.assign({}, ...array));
    //console.log("211: " + headerKeys)
  


    /////////////////////////////////////////////////////////////////


    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(isSuccess) {
            
            // navigate('/players')
        }

        
    }, [dispatch, isError, isSuccess, navigate, message])

    const onSubmitHistoricDB = (e) => {
        e.preventDefault()
        for(let k=0; k < Object.entries(array).length; k++){
            const playerid=Object.values(array)[k].personel
            const pos=Object.values(array)[k].pos
            const monthlyGame= Object.values(array)[k].monthlyGame
            const gk_saveRatio=Object.values(array)[k].gk_saveRatio
            const gk_cleanSheets =Object.values(array)[k].gk_cleanSheets
            const gk_RunsOut=Object.values(array)[k].gk_RunsOut
            const def_tackle= Object.values(array)[k].def_tackle
            const def_interception=Object.values(array)[k].def_interception
            const def_clearence =Object.values(array)[k].def_clearence
            const mid_accPassRatio=Object.values(array)[k].mid_accPassRatio
            const mid_assists =Object.values(array)[k].mid_keyPasses
            const mid_keyPasses=Object.values(array)[k].mid_keyPasses
            const att_expectedGoalsRatio= Object.values(array)[k].att_expectedGoalsRatio
            const att_numOfGoals=Object.values(array)[k].att_numOfGoals
            const att_shootsOnTargetRatio =Object.values(array)[k].att_shootsOnTargetRatio

            dispatch(createHistoric({playerid, pos, monthlyGame, gk_saveRatio, 
                gk_cleanSheets, gk_RunsOut, def_tackle, 
                def_interception, def_clearence, mid_accPassRatio, 
                mid_assists, mid_keyPasses, att_expectedGoalsRatio, att_numOfGoals, att_shootsOnTargetRatio}))
            
        }
    }

    if(isLoading) {
        return <Spinner />
    }

    return (
        <>           
            <h1>IMPORT PLAYERS HISTORIC</h1>
            <form>
                <input
                type={"file"}
                id={"csvFileInput"}
                accept={".csv"}
                onChange={handleOnChangeCSV}
                />

                <button
                onClick={(e) => {
                    handleOnSubmitCSV(e);
                }}
                >
                IMPORT CSV
                </button>
            </form>
            <br />
            <form onSubmit={onSubmitHistoricDB}>
                <div className="form-group" style={{margin: "40x 20px"}}>
                    <button className="btn btn-block">
                        Submit to Database
                    </button>
                </div>
            </form>
            
            <br />

            <hr className="solid" />
            <table>
                <thead>
                <tr key={"header"}>
                    {headerKeys.map((key) => (
                    <th>{key}</th>
                    ))}
                </tr>
                </thead>

                <tbody>
                {array.map((item) => (
                    <tr key={item.id}>
                    {Object.values(item).map((val) => (
                        <td>{val}</td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
              

        </>
    )

}

export default NewPlayer