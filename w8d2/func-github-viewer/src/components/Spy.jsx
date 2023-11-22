import React from "react";
import { useEffect } from "react";

export default function Spy(props) {
  const { repo } = props;

  // Escape hatch for everything that causes a side effect
  useEffect(() => {
    if (repo) {
      console.log("NEW REPO ALERT!");
    }

    const report = (event) => {
      console.log("User clicked at position", event.clientX, event.clientY);
      console.log("The current repo is:", repo);
    };

    document.addEventListener("click", report);

    return () => document.removeEventListener("click", report);
  }, [repo]);

  useEffect(() => {
    const boo = () => console.log("Boo! 👻");

    document.addEventListener("click", boo);

    return () => document.removeEventListener("click", boo);
  });

  return <div>🕵️</div>;
}

// export default class Spy extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   report = (event) => {
//     console.log("User clicked at position", event.clientX, event.clientY);
//     console.log("The current repo is:", this.props.repo);
//   };

//   componentDidMount() {
//     document.addEventListener("click", this.report);
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props.repo !== prevProps.repo) {
//       console.log("*******************");
//       console.log(`Repo changed from ${prevProps.repo} to ${this.props.repo}`);
//       console.log("*******************");
//     }
//   }

//   componentWillUnmount() {
//     document.removeEventListener("click", this.report);
//   }

//   render() {
//     return <div>🕵️</div>;
//   }
// }
