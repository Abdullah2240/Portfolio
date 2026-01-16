import './globals.css'

export const metadata = {
  title: 'My Portfolio',
  description: 'A creative portfolio with stunning effects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary text-white">{children}</body>
    </html>
  )
}
