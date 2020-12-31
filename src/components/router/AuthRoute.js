import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'

export const AuthRoute = (props) => {
  const [user] = useAuthState(auth)

  if (!user) return <Redirect to="/" />

  return <Route {...props} />
}