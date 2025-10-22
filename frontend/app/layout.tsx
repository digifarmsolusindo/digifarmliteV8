
export const metadata = {
  title: 'DIGIFARM.Lite',
  description: 'Aplikasi investasi ternak digital',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
