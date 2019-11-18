import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      age: null,
      errMessage: "",
      emtBox: ""
    };
  }
  mySubmitHandler = event => {
    let ebox = "";
    event.preventDefault();
    if (Number(this.state.age) && this.state.userName !== "") {
      alert("you are submitting " + this.state.userName);
    } else {
      ebox = <strong>please fill all the box</strong>;
    }
    this.setState({ emtBox: ebox });
  };
  myChangeHandler = event => {
    let num = event.target.name;
    let val = event.target.value;
    let err = "";
    if (num === "age") {
      if (!Number(val) && val !== "") {
        err = <strong>your age must be a number</strong>;
      }
    }
    this.setState({ [num]: val });
    this.setState({ errMessage: err });
  };
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <p>Enter your name:</p>
        <input type="text" name="userName" onChange={this.myChangeHandler} />
        <p>Enter your age:</p>
        <input type="text" name="age" onChange={this.myChangeHandler} />
        {this.state.errMessage}
        <br />

        <br />
        <input type="submit" />
        <br />
        <br />
        {this.state.emtBox}
      </form>
    );
  }
}

export default App;
