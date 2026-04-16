export default function Page() {
  return (
    <main style={{
      background: 'linear-gradient(black, #111)',
      color: 'white',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <header style={{display:'flex', alignItems:'center', gap:'12px'}}>
        <img src="/logo.jpg" alt="VerseCraft Logo" style={{height:'50px'}} />
        <h1 style={{color:'#facc15'}}>VerseCraft</h1>
      </header>

      <section style={{textAlign:'center', marginTop:'40px'}}>
        <h2 style={{color:'#facc15', fontSize:'36px'}}>Words with Impact</h2>
        <p style={{maxWidth:'600px', margin:'10px auto'}}>
          Transforming ideas into custom-written poetry for individuals, events, and organizations.
        </p>
      </section>
    </main>
  );
}
