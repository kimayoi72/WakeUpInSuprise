import React from 'react'

import Loadable, { LoadingComponentProps } from 'react-loadable'

function Loading(props: LoadingComponentProps) {
  if (props.error) {
    return (<div>Error! <button onClick={ props.retry }>Retry</button></div>)
  } else if (props.timedOut) {
    return (<div>Taking a long time... <button onClick={ props.retry }>Retry</button></div>)
  } else if (props.pastDelay) {
    return (<div>Loading...</div>)
  } else {
    return null;
  }
}

interface LoaderOptions<P> {
  loader(): Promise<React.ComponentType<P> | { default: React.ComponentType<P> }>;
}

function asAsync<P>(opts: LoaderOptions<P> ) {
  return Loadable({ 
    ...opts, 
    loading: Loading,
    delay: 100,
    timeout: 10000
  });
}

export const Welcome = asAsync({ loader: () => import('../pages/Welcome') })
export const Alarm = asAsync({ loader: () => import('../pages/Alarm') })
export const Upload = asAsync({ loader: () => import('../pages/Upload') })