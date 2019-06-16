import React from 'react'
// state
import {useStateValue} from '../store/StateContext'

const AdminArea = () => {
  const [{isAuth}, ] = useStateValue()

  return (
    <section style={{ flex: '1 0 auto' }}>
      { isAuth ? (<div>hola usuario!</div>)
        : (<div>No autorizado.</div>) }
    </section>
  )
}

export default AdminArea
