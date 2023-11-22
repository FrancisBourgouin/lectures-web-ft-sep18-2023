import axios from "axios";
import "./App.css";
import CommitList from "./components/CommitList";
import Header from "./components/Header";
import RepoForm from "./components/RepoForm";
import Spy from "./components/Spy";

import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.initialState = { commits: [], currentRepo: "", currentOwner: "" };
    this.state = this.initialState;
  }

  fetchCommits = (formData) => {
    const { owner, repo } = formData;

    axios
      .get(`https://api.github.com/repos/${owner}/${repo}/commits`)
      .then((res) => res.data)
      .then((data) => {
        this.setState({ commits: data, currentRepo: repo, currentOwner: owner });
      })
      .catch((err) => {
        console.log(err);
        this.setState(this.initialState);
      });
  };

  render() {
    return (
      <>
        <Header />
        <Spy repo={this.state.currentRepo} />
        <main>
          <RepoForm onSubmit={this.fetchCommits} />
          {this.state.commits.length > 0 && <CommitList commits={this.state.commits} />}
        </main>
      </>
    );
  }
}

// function App() {
//   return (
//     <>
//       <Header />
//       <main>
//         <RepoForm />
//         <CommitList />
//       </main>
//     </>
//   );
// }

// export default App;
