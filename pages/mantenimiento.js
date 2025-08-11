export default function Mantenimiento() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #e0e7ef 0%, #f8fafc 100%)',
      fontFamily: 'Segoe UI, Arial, sans-serif',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(30,41,59,0.12)',
        padding: '3rem 2.5rem',
        maxWidth: '420px',
        textAlign: 'center',
      }}>
        <svg width="64" height="64" fill="none" viewBox="0 0 24 24" style={{ marginBottom: '1.5rem' }}>
          <circle cx="12" cy="12" r="10" fill="#fbbf24"/>
          <path d="M12 7v5l3 3" stroke="#b45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h1 style={{ fontSize: '2rem', color: '#1e293b', marginBottom: '0.75rem', fontWeight: 700 }}>
          Sitio en Mantenimiento
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#334155', marginBottom: '1.5rem' }}>
          Estamos realizando mejoras para brindarte una mejor experiencia.<br />
          Por favor, vuelve a intentarlo más tarde.
        </p>
        <div style={{ fontSize: '0.95rem', color: '#64748b' }}>
          &copy; {new Date().getFullYear()} DentalMás. Todos los derechos reservados.
        </div>
      </div>
    </div>
  );
}
