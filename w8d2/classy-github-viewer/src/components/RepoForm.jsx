import React from "react";

export default class RepoForm extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = { repo: "", owner: "" };
    this.state = this.initialState;

    this.handleChangeOld = this.handleChangeOld.bind(this);
  }

  handleChangeOld = function (event) {
    const { name, value } = event.currentTarget;

    this.setState({ ...this.state, [name]: value });
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;

    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    return (
      <form className="RepoForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="owner"
          value={this.state.owner}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="repo"
          value={this.state.repo}
          onChange={this.handleChange}
        />
        <button>Fetch repo info</button>
      </form>
    );
  }
}
// export default function RepoForm(props) {
//   return (
//     <form className="RepoForm">
//       <input type="text" />
//       <input type="text" />
//       <button>Fetch repo info</button>
//     </form>
//   );
// }
