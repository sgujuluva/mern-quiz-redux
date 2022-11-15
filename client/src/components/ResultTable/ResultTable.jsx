import React from 'react'
import "./ResultTable.css"

function ResultTable() {
  return (
    <div>
        <table>
            <thead className="table-header">
                <tr className="table-row">
                    <td>Name</td>
                    <td>Points</td>
                    <td>Result</td>                    
                </tr>
            </thead>
            <tbody>
                <tr className="table-body">
                <td>Sangee</td>
                    <td>50</td>
                    <td>Passed</td> 
                </tr>
            </tbody>
        </table>
  
        </div>
  )
}

export default ResultTable