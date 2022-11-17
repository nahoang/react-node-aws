import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

const Layout = ({children}) => {

  const head = () => (
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>
  )

  const nav = () => (
    <ul className="nav nav-tabs bg-warning">
      <li className="nav-item">
        <Link href="/" legacyBehavior>
        <a className="nav-link text-dark">Home</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/login" legacyBehavior>
        <a className="nav-link text-dark">Login</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/register" legacyBehavior>
        <a className="nav-link text-dark">Register</a>
        </Link>
      </li>
    
    </ul>
  )
  

  return <React.Fragment>
    {head()}{nav()} <div className="container pt-5 pb-5">{children}</div>
  </React.Fragment>
}

export default Layout;