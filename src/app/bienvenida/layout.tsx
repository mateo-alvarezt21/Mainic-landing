import { ThemeProvider } from '@/contexts/ThemeContext'

export default function BienvenidaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}
