import React, { useState } from 'react';

function App() {
  
  const [showimg, setShowimg] = useState(true);
  const [input, setinput] = useState("")
  const [font, setfont] = useState(30)
  const[color,setcolor]=useState("green")

  return (
    <div className='min-h-[100vh] bg-slate-950'>
      <div className='bg-slate-500 p-12 w-[50%] m-auto'>
        <div className='flex-col align-middle'>
          <h1 className='flex items-center justify-center my-8 text-2xl'>Coding</h1>

          <p className='p-10 text-xl font-serif bg-white h-[100%] w-[80%] mx-24  '>
            State management React App
            <div className='w-[100%]'>
              <h1 className='flex flex-col justify-center p-4 -mx-3'>Show and hide</h1>
{/*              
              {/* Conditionally render the image */}

        {showimg && <img src="./flower.jpg" alt="Flower" />} 
              
              <button className='p-1 m-2 border-2 border-blue-500 rounded-md bg-slate-500' onClick={() => setShowimg(!showimg)}>ToggleImg</button>
             
              <div>
                 <h2 className='my-3'>Live input preview</h2>
                 <input  className='p-1 my-3 border border-black'
                  placeholder='Type text' onChange={(e) => setinput(e.target.value)}></input>
                <h2>{input}</h2>
                
                <div className="p-4">
                     <h2 className="text-xl font-bold">Font Increaser</h2>
                      <p style={{ fontSize:font }}>Priya</p>
                  <input
                type="range"
                 min="30"
                max="200"
                 step="1"
                
                  onChange={(e) => setfont(Number(e.target.value))}
                 className="w-full mt-2"
      />
                </div>
                

                <div>
                  <h1 className='p-4 text-xl font-bold'> Color value sample</h1> 
                  <input placeholder='Enter color'
                    onChange={(e) => setcolor(e.target.value)} value={color}
                  />
                  <div  style={{ backgroundColor: color }}className='w-40 h-40 my-4'> </div>
                </div>

              </div>
             </div>
             </p>
             </div>
             </div>
    </div>
    
  )
}

export default App;
