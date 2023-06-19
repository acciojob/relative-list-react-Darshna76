import React from 'react'


const relatives=["John","Emily","Michael","Tata","Sophia","Alex"]
const App = () => {
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ol key={'relativeList'}>
                  {relatives.map((item,index)=>{
                    return <li key={`relativeListItem${index+1}`}>
                      {item}
                    </li>
                  })}
               </ol>
    </div>
  )
}

export default App