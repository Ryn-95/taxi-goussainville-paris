import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Taxi Goussainville Paris - Service Professionnel 24/7'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFD700',
          backgroundImage: 'linear-gradient(45deg, #FFD700 0%, #FDB347 100%)',
        }}
      >
        <div style={{ marginTop: 40, display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              fontSize: 80,
              marginRight: 30,
            }}
          >
            🚕
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                fontSize: 60,
                fontWeight: 'bold',
                color: '#1A1A1A',
                lineHeight: 1.2,
              }}
            >
              Taxi Goussainville
            </div>
            <div
              style={{
                fontSize: 40,
                color: '#1A1A1A',
                marginTop: 10,
              }}
            >
              Service Professionnel 24/7
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 30,
            color: '#1A1A1A',
            marginTop: 40,
            textAlign: 'center',
          }}
        >
          Transferts Aéroports • Paris • Courses Locales
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 40,
            fontWeight: 'bold',
            color: '#1A1A1A',
            marginTop: 30,
            backgroundColor: '#1A1A1A',
            color: '#FFD700',
            padding: '15px 30px',
            borderRadius: 15,
          }}
        >
          📞 01 23 45 67 89
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
