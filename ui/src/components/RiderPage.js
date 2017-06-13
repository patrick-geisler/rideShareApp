import React from 'react';
import ReactDOM from 'react-dom';




const RiderPage = () => {
  return(

    <div className='row'>
      <h1>
        Book A Rizzide
      </h1>
      <div className='small-6 inline-block small-centered columns'>
        <form>
          <div className="inline-block row">
            <div className="inline-block padding-medium">
              <label>Early Bound</label>
              <input type="time" placeholder='Early'></input>
            </div>
            <div className="inline-block padding-medium">
              <label>Late Bound</label>
              <input type="time" placeholder='Late'></input>
            </div>
          </div>
            <input type="date"></input>
            <button className='button'> Submit </button>
        </form>
        <table className="table side-borders-none actionable" summary="This summary is for screen readers and should summarize the structure of the table headers and rows">
        <caption className="show-for-sr">Basic Table</caption>
            <thead>
                <tr>
                    <th width="500" className='text-left'>Name</th>
                    <th width="400" className='text-left'>Time</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Suzie</td>
                    <td>6:00</td>
                </tr>
                <tr>
                    <td>Mark</td>
                    <td>8:00</td>
                </tr>
                <tr>
                    <td>Joe</td>
                    <td>7:30</td>
                </tr>
            </tbody>
        </table>
        </div>

      </div>
  )
}


export default RiderPage;
