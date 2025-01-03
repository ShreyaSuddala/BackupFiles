import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router'

export default function DynamicHead({title}) {

  const location=useLocation()

  return (
    <Helmet>
    <meta charSet="utf-8" />
    <title>{location?.pathname?.slice(7)}</title>
    <link rel="canonical" href="http://mysite.com/example" />
    <link rel="apple-touch-icon" href="http://mysite.com/img/apple-touch-icon-57x57.png" />
   </Helmet>
  )
}
