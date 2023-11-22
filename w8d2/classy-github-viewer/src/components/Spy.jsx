import React from "react";

// export default function Spy(props) {
//   document.addEventListener("click", (event) =>
//     console.log("User clicked at position", event.clientX, event.clientY)
//   );

//   return <div>🕵️</div>
// }

export default class Spy extends React.Component {
  constructor(props) {
    super(props);
  }

  report = (event) => {
    console.log("User clicked at position", event.clientX, event.clientY);
    console.log("The current repo is:", this.props.repo);
  };

  componentDidMount() {
    document.addEventListener("click", this.report);
  }

  componentDidUpdate(prevProps) {
    if (this.props.repo !== prevProps.repo) {
      console.log("*******************");
      console.log(`Repo changed from ${prevProps.repo} to ${this.props.repo}`);
      console.log("*******************");
    }
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.report);
  }

  render() {
    return <div>🕵️</div>;
  }
}
