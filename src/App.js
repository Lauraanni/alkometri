import './App.css';
import { useState } from 'react'

function App() {

  const selectBottles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  const selectTime = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(selectBottles[0])
  const [time, setTime] = useState(selectTime[0])
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0)


  const calculate = () => {
    let alcoholLewel = 0
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * time)


    if (gender === 'male') {
      alcoholLewel = gramsLeft / (weight * 0.7)
    } else {
      alcoholLewel = gramsLeft / (weight * 0.6)
    }

    setResult(alcoholLewel)


  }

  if (result < 0) {
    setResult(0)
  }

  return (

    <div id="container">

      <div>
        <h1>Calculating alcohol blood level</h1>
      </div>

      <div>
        <label>Weight</label>
        <input value={weight} onChange={e => setWeight(e.target.value)} type="number" />
      </div>

      <div>
        <label>Bottles</label>
        <select
          value={bottles}
          onChange={e => setBottles(e.target.value)}>
          {selectBottles.map((selectBottle) => (
            <option value={selectBottle} key={selectBottle}>
              {selectBottle}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Time</label>
        <select
          value={time}
          onChange={e => setTime(e.target.value)}>
          {selectTime.map((selectTime) => (
            <option value={selectTime} key={selectTime}>
              {selectTime}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
      </div>

      <div>
        <label>Result</label>
        <output>{result.toFixed(2)}</output>

      </div>
      <button type="button" onClick={calculate}>Calculate</button>
    </div>

  );
}

export default App;


