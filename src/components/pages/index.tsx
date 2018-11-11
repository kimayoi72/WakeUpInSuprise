import React from 'react'

import Loadable, { LoadingComponentProps } from 'react-loadable'

function Loading(props: LoadingComponentProps) {
  if (props.error) {
    return (<div>Error! <button onClick={ props.retry }>Retry</button></div>)
  } else if (props.pastDelay) {
    return (<div>Loading...</div>)
  } else {
    return null;
  }
}

export const Welcome = Loadable({
  loader: () => import('../pages/Welcome'),
  loading: Loading,
})
export const Alarm = Loadable({
  loader: () => import('../pages/Alarm'),
  loading: Loading,
})
export const Upload = Loadable({
  loader: () => import('../pages/Upload'),
  loading: Loading,
})
