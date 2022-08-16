export default {
  github: 'https://github.com/patternina/learn-ios-dev',
  docsRepositoryBase: 'https://github.com/patternina/learn-ios-dev/blob/main',
  titleSuffix: ' – Now You Know Swift',
  darkMode: true,
  font: false,
  logo: (
    <>
      <svg
        width={40}
        height={40}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.568.495H0v15.777h5.847V7.765c0-1.702.897-3 2.382-3 1.516 0 2.196 1.082 2.196 2.721v8.786h5.847V6.063c0-3.62-1.887-6.063-5.537-6.063C8.538 0 6.93.928 5.66 2.66h-.093V.495ZM18.657 21.5h4.052c3.187 0 5.043-1.33 6.373-5.228L34.465.495h-5.816l-1.918 6.342c-.495 1.608-.96 3.836-.96 3.836h-.06s-.434-2.228-.929-3.836L22.833.495h-6.156l5.042 13.055c.372.928.712 1.763.712 2.258 0 .835-.526 1.176-1.825 1.176h-1.95V21.5Zm-8.541 17.974h6.62l-5.878-9.961 5.26-5.816H9.559l-3.805 4.702V17.355H0v22.12h5.754v-4.332l1.207-1.33 3.155 5.661ZM24.182 40c4.331 0 7.765-1.64 7.765-5.414 0-4.393-3.65-5.042-6.527-5.444-1.795-.248-3.249-.434-3.249-1.33 0-.805.805-1.145 1.67-1.145.96 0 1.826.247 1.98 1.423h5.507c-.216-3.094-2.722-4.888-7.517-4.888-3.867 0-7.177 1.794-7.177 5.042 0 3.96 3.062 4.672 5.723 5.074 2.042.31 3.867.464 3.867 1.763 0 .96-.866 1.361-2.01 1.361-1.486 0-2.29-.773-2.383-2.072h-5.6c.032 3.62 3.28 5.63 7.951 5.63Z"
          fill="#174DD5"
        />
        <path
          d="M36.644 39.808c1.745 0 3.156-1.225 3.156-3.155 0-1.893-1.411-3.156-3.156-3.156-1.782 0-3.155 1.263-3.155 3.156 0 1.93 1.373 3.155 3.155 3.155Z"
          fill="#F29228"
        />
      </svg>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Nextra: the Next.js site builder" />
      <meta name="og:description" content="Nextra: the Next.js site builder" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://nextra.vercel.app/og.png" />
      <meta name="twitter:site:domain" content="nextra.vercel.app" />
      <meta name="twitter:url" content="https://nextra.vercel.app" />
      <meta name="og:title" content="Nextra: Next.js static site generator" />
      <meta name="og:image" content="https://nextra.vercel.app/og.png" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: `Copyright © ${new Date().getFullYear()} Mauricio Paternina. All rights reserved.`,
  unstable_faviconGlyph: '📱',
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'es', text: 'Español' },
  ],
}
