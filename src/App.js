import './styles.css'
import Temp from './Temp';
import Btns from './Btns';
import { useState } from 'react';

function App() {
  const [temperature, setTemperature] = useState(0)

  const colors = ['#86b2e6', '#ffb386', '#ffff91']

  const handleIncrease = () => {
    setTemperature(temperature + 1)
  }

  const handleDecrease = () => {
    setTemperature(temperature-1)
  }

  const handleBgChange = (temperature) => {
    let backgroundColor
    if(temperature < 0) {
      backgroundColor = colors[0]
    }

    if(temperature > 0 && temperature <= 20) {
      backgroundColor = colors[2]
    }

    if(temperature > 20) {
      backgroundColor = colors[1]
    }

    return backgroundColor
  }

  return (
    <>
     <div className='temp'>
        <Temp temperature={temperature} backgroundColor={handleBgChange(temperature)}/>
        <Btns increase={handleIncrease} decrease={handleDecrease}/>
     </div>
    </>
  );
}

export default App;
