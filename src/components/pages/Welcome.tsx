import React from 'react'

import info from '../../../package.json'

const Welcome = () => {
  return (<h1>Welcome to {info.description} version {info.version}</h1>)
}

export default Welcome