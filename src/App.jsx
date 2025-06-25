import { useState } from 'react'
import RecipesList from './components/RecipesList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <RecipesList/>
    </>
  )
}

export default App
