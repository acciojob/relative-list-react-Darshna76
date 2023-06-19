import React from 'react'


const relatives=["John","Emily","Michael","Tata","Sophia","Alex"]
const App = () => {
  return (
    <div>
      <h1>Relative List</h1>
      <ol id='relativeList' key="relativeList">
        {relatives.map((relative, index) => (
          <li id='relativeListItem1' key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  );
};


export default App