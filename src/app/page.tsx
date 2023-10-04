import Image from 'next/image'
import Highscore from "@/components/Highscore/Highscore";

export default function Home() {
  return (
    <main className='background--secondary' style={{minHeight: '100vh', minWidth: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div className='background--tertiary' style={{padding: "var(--spacing-xl)"}}>
        <h1 className='color--on-tertiary'>
          PolarDash
        </h1>
        <p className='color--on-tertiary'>Ready player one...</p>
        <Highscore highscores={
          [
            {username: "rubendijkstra", score: 10},
            {username: "vincentbeekhuis", score: 88},
            {username: "roberthoekstra", score: 10},
            {username: "robertsjoekstra", score: 10},
            {username: "robertswagstra", score: 20},
            {username: "henkwowstra", score: 50},
            {username: "coolstra", score: 70},
          ]
        }></Highscore>
      </div>
    </main>
  )
}
