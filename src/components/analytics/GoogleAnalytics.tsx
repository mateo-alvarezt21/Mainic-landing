'use client'

import Script from 'next/script'

interface GoogleAnalyticsProps {
  measurementId: string
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  if (!measurementId) {
    console.warn('Google Analytics measurement ID is missing')
    return null
  }

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}
