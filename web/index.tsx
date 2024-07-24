import React from 'react'
import ReactDOM from 'react-dom/client'
import './shared/global.css'
import { ProfileCard } from './shared/components/ProfileCard'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="h-lvh w-lvh flex bg-black">
      <div className="m-auto w-96">
        <ProfileCard />
      </div>
    </div>
  </React.StrictMode>,
)
