import React, {Component} from "react";
import {validURL} from "../api";

class Fprm extends Component {
  constructor(props) {
    super(props);
    this.state = {formName: "", formAvatar: ""};
  }

  handleSumbit = (event) => {
    const {formName, formAvatar} = this.state;
    if (formName.split("").length < 7) {
      alert("Please enter name larger than 5");
      return;
    } else if (!validURL(formAvatar)) {
      alert("Please enter valid url");
      return;
    }
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({formName: "", formAvatar: ""});
  };

  render() {
    const {formName, formAvatar} = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col mt-2">
            <h4>Add product: </h4>
          </div>
        </div>
        <div className="row ">
          <div className="col m-3">
            <form onSubmit={(event) => this.handleSumbit(event)}>
              <div className="form-group">
                <label>Name</label>
                <input
                  value={formName}
                  onChange={(event) =>
                    this.setState({formName: event.target.value})
                  }
                  type="text"
                  className="form-control"
                  placeholder="Enter name..."
                ></input>
              </div>
              <div className="form-group">
                <label>Avatar</label>
                <input
                  value={formAvatar}
                  onChange={(event) =>
                    this.setState({formAvatar: event.target.value})
                  }
                  type="text"
                  className="form-control"
                  placeholder="Enter Avatar url..."
                ></input>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Fprm;
