import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>@andercalph</h1>
      <div className="profile-photo">
        <img src="https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/474953157_1642726659662585_8146335685764231558_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFRq_ko-GW5Wu37iixJf58F3QqaSeYknVTdCppJ5iSdVPEXWjRFI_nhgHokaK0u7EaMkM7j8zljVEZcPRltH9c9&_nc_ohc=4DtEXwToFZcQ7kNvgFxhvvK&_nc_oc=Adk1uhcfrLy2eUku1Sh4goLcz-1UWtFKK61yHiLi56YBvHAa_DyjboLqaXJMmrFf6dk&_nc_zt=23&_nc_ht=scontent.fbog14-1.fna&_nc_gid=JWo96AsnvR1b4aTajUIIvQ&oh=00_AYHCIyD7KLMFf1y6OgnlGPRoU7grzayI3Jh6EwEIuGKTjA&oe=67F45744" alt="foto anderson" />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </>
  )
}

export default App
