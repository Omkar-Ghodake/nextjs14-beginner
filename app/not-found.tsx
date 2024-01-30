import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h1>Page NotFound</h1>
      <p>Sorry, the page you are looking for does not exists.</p>
      <Link href={'/'}>Return to Home</Link>
    </div>
  )
}

export default NotFound
