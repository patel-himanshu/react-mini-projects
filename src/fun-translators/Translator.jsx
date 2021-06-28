import React, { Component } from "react";
import axios from "axios";
import "./FunTranslators.css";

export default class Translator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translatorType: "minion",
      inputTxt: "",
      outputTxt: "",
    };
    // this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelectChange = (e) => {
    this.setState({ translatorType: e.target.value });
  };

  handleInputChange = (e) => {
    this.setState({ inputTxt: e.target.value });
  };

  async handleSubmit(e) {
    let response;
    e.preventDefault();
    try {
      response = await axios.get(
        `https://api.funtranslations.com/translate/${this.state.translatorType}.json?text=${this.state.inputTxt}`
      );
      this.setState({ outputTxt: response.data.contents.translated });
    } catch (e) {
      this.setState({
        outputTxt: "Some error occurred. Please try again later.",
      });
    }
    // console.log(response.data);
    // console.log(this.state.outputTxt);
  }

  render() {
    const { translatorType, inputTxt, outputTxt } = this.state;

    const formats = [
      { name: "Minion", value: "minion" },
      { name: "Yoda", value: "yoda" },
      { name: "Gungan", value: "gungan" },
      { name: "Mandalorian", value: "mandalorian" },
      { name: "Pirate", value: "pirate" },
    ];

    let isDisabled = inputTxt.length > 0 ? false : true;

    let outputMsg;
    if (outputTxt === "Some error occurred. Please try again later.") {
      outputMsg = <div className="text-danger text-center">{outputTxt}</div>;
    } else {
      outputMsg = (
        <div className="text-center" id="Translation">
          <hr />
          <h3 className="font-weight-bold">Translation: </h3>
          <h5>{outputTxt}</h5>
        </div>
      );
    }

    return (
      <>
        <div className="container" id="Translator">
          <form className="form-group text-center" onSubmit={this.handleSubmit}>
            <label htmlFor="translationType">
              <h4>Translate to</h4>
            </label>
            <select
              htmlFor="translationType"
              value={translatorType}
              onChange={this.handleSelectChange}
            >
              {formats.map((format, idx) => (
                <option key={idx} value={format.value}>
                  {format.name}
                </option>
              ))}
            </select>
            <br />
            <label htmlFor="inputTxt">
              <h4>Enter the message to be translated:</h4>
            </label>
            <textarea
              className="form-control"
              type="text"
              name="inputTxt"
              value={inputTxt}
              onChange={this.handleInputChange}
            />
            <br />
            <input
              className="form-control btn btn-primary w-25 font-weight-bold"
              type="submit"
              value="SUBMIT"
              disabled={isDisabled}
            />
          </form>
          {outputTxt && outputMsg}
        </div>
      </>
    );
  }
}
