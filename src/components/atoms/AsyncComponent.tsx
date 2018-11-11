import React, { Component } from "react"

interface IState {
  component: any
}

export default function asyncComponent (importComponent: any) {
  class AsyncComponent extends Component<{}, IState> {
    constructor(props: any) {
      super(props);
      this.state = {
        component: null
      }
    }

    async componentDidMount() {
      const x = await importComponent();
      console.log(importComponent, x.default);
      //this.setState({ component: component })
    }

    public render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : <div>...Loading</div>
    }
  }

  return AsyncComponent
}