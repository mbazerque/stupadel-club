import './globals.css';

export const metadata = {
  title: 'STUPADEL CLUB',
  description: 'Club de pádel premium',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
