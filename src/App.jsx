import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Btn from './Btn'

function App() {

  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duraction-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full w-max">
            <Btn text="Red" bg="red" color="white" setColor={setColor} />
            <Btn text="Yellow" bg="yellow" color="black" setColor={setColor} />
            <Btn text="Purple" bg="purple" color="white" setColor={setColor} />
            <Btn text="Green" bg="green" color="white" setColor={setColor} />
            <Btn text="White" bg="white" color="black" setColor={setColor} />
            <Btn text="Pink" bg="pink" color="black" setColor={setColor} />
            <Btn text="Olive" bg="olive" color="white" setColor={setColor} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
