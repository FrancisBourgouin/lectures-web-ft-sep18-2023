import axios from "axios";
import "./App.css";
import CommitList from "./components/CommitList";
import Header from "./components/Header";
import RepoForm from "./components/RepoForm";
import Spy from "./components/Spy";

import { useState } from "react";
import { useEffect } from "react";

function App() {
  const initialValues = { commits: [], currentRepo: "", currentOwner: "" };
  const [githubInfo, setGithubInfo] = useState(initialValues);

  const fetchCommits = (formData) => {
    const { owner, repo } = formData;

    axios
      .get(`https://api.github.com/repos/${owner}/${repo}/commits`)
      .then((res) => res.data)
      .then((data) => {
        setGithubInfo({ commits: data, currentRepo: repo, currentOwner: owner });
      })
      .catch((err) => {
        console.log(err);
        setGithubInfo(this.initialState);
      });
  };

  // useEffect(() => {
  //   axios.get("")

  // },[])

  return (
    <>
      <Header />
      <Spy repo={githubInfo.currentRepo} />
      <main>
        <RepoForm onSubmit={fetchCommits} />
        {githubInfo.commits.length > 0 && <CommitList commits={githubInfo.commits} />}
      </main>
    </>
  );
}

export default App;
