import React, {useEffect, useState} from "react";
import { DataGrid } from '@material-ui/data-grid';
import './App.css';
import axios from 'axios';

const invokeAPI = () => {
  axios.get('https://api.sleeper.app/v1/players/nfl', {})
  .then(function (response) {
    console.log(response.data);
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
    return false
  });
}

const App = () => {
  const [records, setRecords] = useState({});
  useEffect(() => {
    const response = invokeAPI();
    setRecords(response);

    const columns = [
      {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
      },
      {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
      },
      {
        field: 'position',
        headerName: 'Position',
        width: 150,
        editable: true,
      },
    ];
    /**
     * Map records
     */
    let rows = [];
    let data = response.map(objResponse => {
      return rows.push[{
        "firstName": objResponse.first_name,
        "lastName": objResponse.last_name,
        "position": objResponse.position
      }]
    });
  },[]);
  return (<div>
      {records && 
        <>
           <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              checkboxSelection
              disableSelectionOnClick
            />
          </div>
        </>
      }
  </div>);
}

export default App;
