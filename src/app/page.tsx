import Image from 'next/image'
import Highscore from "../../components/highscore";
import highscore from "../../components/highscore";

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
              {username: "rubendijkstra", score: 100},
              {username: "vincentbeekhuis", score: 88},
              {username: "roberthoekstra", score: 10},
            ]
          }></Highscore>
        </div>
      </main>
  )
}
