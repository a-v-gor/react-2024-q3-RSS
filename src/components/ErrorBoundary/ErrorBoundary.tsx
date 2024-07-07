import { Component, ErrorInfo, ReactNode } from "react";
import './error-boundary.css'

interface IErrorBoundaryProps {
  children: ReactNode
}

interface IErrorBoundaryState {
  hasError: boolean,
  errorMessage: ErrorInfo | null
}

export default class ErrorBoundary extends Component <IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { 
      hasError: false,
      errorMessage: null
     };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
    this.setState({
      hasError: true,
      errorMessage: errorInfo
    })
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="error">It is error in application! Please reload page.</h1>;
    } else {
      return this.props.children;
    }
  }
}