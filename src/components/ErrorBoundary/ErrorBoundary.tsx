import React, { Component } from 'react';

interface EBState {
  hasError: boolean;
}

interface EBProps {}

class ErrorBoundary extends Component<EBProps, EBState> {
  constructor(props: EBProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    return (
      <>
        {this.state.hasError ? (
          <h1>Oops!!! Something went wrong please reload the page</h1>
        ) : (
          this.props.children
        )}
      </>
    );
  }
}

export default ErrorBoundary;
