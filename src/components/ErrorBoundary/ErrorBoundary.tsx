import { Component, ErrorInfo, ReactNode } from "react";

interface IErrorBoundaryProps {
  children: ReactNode
}

interface IErrorBoundaryState {
  hasError: boolean,
  errorMessage: string
}

export default class ErrorBoundary extends Component <IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { 
      hasError: false,
      errorMessage: ''
     };
  }

  static getDerivedStateFromError(error: Error) {
    console.error('ErrorBoundary caught an error: ', error);
    return { hasError: true,
      errorMessage: error.message
     };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
    this.setState({
      hasError: true,
      errorMessage: error.message
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error!</h1>;
    } else {
      return this.props.children;
    }
  }
}