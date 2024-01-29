import { useState } from "react"
import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"
function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  })
  console.log(investment);
  return (
    <>
      <Header />
      <UserInput investment={investment} setInvestment={setInvestment}/>
      <Results investment={investment} />
    </>

  )
}

export default App
