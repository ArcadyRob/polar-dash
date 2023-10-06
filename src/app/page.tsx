import { Timer } from '@/components/Timer';
import Image from 'next/image';

export default function Home() {
  return (
    <main
      className="background--secondary"
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        className="background--tertiary"
        style={{ padding: 'var(--spacing-xl)' }}
      >
        <h1 className="color--on-tertiary">PolarDash</h1>
        <p className="color--on-tertiary">Ready player one...</p>
        <Timer />
      </div>
    </main>
  );
}
