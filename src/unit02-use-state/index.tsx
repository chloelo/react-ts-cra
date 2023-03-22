import { useState } from "react"

import { User } from './interfaces'

const App = () => {
  const [user, setUser] = useState<User | null>(null)
  const fetchUser = () => setUser({
    name: 'Andy',
    age: 24,
    country: 'taiwan',
    address: {
      street: 'Mait st.',
      number: 88,
      zip: 32400
    },
    admin: false
  })

  return (<>
    <button onClick={fetchUser}>Fetch user on Click</button>
    {user && <p>Welcome {user.name}</p>}
  </>)
}
export default App