export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <h1>Welcome to ScrLxrd API</h1>
      <p>A simple, free-to-use REST API without the need for an account, API key, or usage limits.</p>
      <button style={{ padding: '10px 20px', marginTop: '20px' }}>Explore</button>
    </div>
  );
}
