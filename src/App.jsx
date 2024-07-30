import React from 'react'

function App() {
  const data = ['item1','item2','item3','item4']
  return (
    <div>
      <ul>
        {
          data.map((item)=>{
            return <li key={item}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

export default App