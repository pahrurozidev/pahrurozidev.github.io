import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../components/app/metaWallet/Detail';
import Main from '../components/app/metaWallet/Main'

export default function App() {

  const { slug } = useParams();

  return (
    <Fragment>
      {!slug && <Main />}
      {slug && <Detail />}
    </Fragment>
  )
}
