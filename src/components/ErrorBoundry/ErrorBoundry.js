import React, { Component } from "react";
import ErrorBlock from '../ErrorBlock'

import './ErrorBoundry.css'

export default class ErrorBoundry extends Component {
  state = {
    hasError: false,
  }
  componentDidCatch() {
    this.setState({
      hasError: true,
    })
  }
  render() {
    if (this.state.hasError) {
      return <ErrorBlock />
    }
    return this.props.children
  }
}
