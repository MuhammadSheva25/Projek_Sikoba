'use client';

import { useEffect } from 'react';

export default function RootLayout({ children }) {
  // Ini akan menekan warning hydration mismatch setelah mount pertama
  useEffect(() => {
    // Konsol kosong untuk mencegah warning setelah hydration
  }, []);

  return (
    <html lang="id">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}