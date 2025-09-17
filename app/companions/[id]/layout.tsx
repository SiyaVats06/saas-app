// app/companion/[id]/layout.tsx
import React from 'react';

export default function CompanionIdLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}
