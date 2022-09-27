import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('FirstName: ' + this.state.firstName + '\nlastName: ' + this.state.lastName);
    event.preventDefault();
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '50px' }}>
        <div style={{ width: '500px' }}>
          <form onSubmit={this.handleSubmit} className="ui form">
            <div className="field">
              <label>First Name</label>
              <input type="text" name="first-name" placeholder="First Name" value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })} />
            </div>
            <div className="field">
              <label>Last Name</label>
              <input type="text" name="last-name" placeholder="Last Name" value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })} />
            </div>
            <input type="submit" value="Submit" className="ui button" />
          </form>
        </div>
      </div>
    );
  }
}
