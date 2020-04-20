import React from "react";
import "./displayError.css";

let hid =() =>{
  document.getElementById("pop")
    .classList
    .toggle("close");
}


class DisplayError extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       error: "",
        errorInfo: "",
      hasError: false };
  }

  // static getDerivedStateFromError(error, errorInfo) {
  //   // Update state so the next render will show the fallback UI.
  //   return { hasError: true, errorInfo: errorInfo };
  // }
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <div id="pop" className="popup">
            <div className="innerPopup" >
          <article>
              <h3>{this.props.title}</h3>
              <div>
                  <p>{this.props.information}</p>
              </div>
              <footer>
                <p id="close" onClick={hid} >x</p>
              </footer>
         </article>
            </div>
          </div>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
  }

export default DisplayError;
