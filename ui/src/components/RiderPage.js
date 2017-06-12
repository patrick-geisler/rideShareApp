import React from 'react';
import ReactDOM from 'react-dom';




const RiderPage = () => {
  const divStyle = {
    display: 'inline-block',
    textAlign: 'center',
    marginLeft: '40px',
    paddingBottom: '20px'
  };
  return(
    <div className='row'>
      <div className='small-5 small-centered columns'>
        <form>
          <div style={divStyle}>
            <div style={divStyle}>
              <label>Early Bound</label>
              <input type="textbox" placeholder='Early' className="error"></input>
            </div>
            <div style={divStyle}>
              <label>Late Bound</label>
              <input type="textbox" placeholder='Late'></input>
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
