import React from "react";
import { connect } from "react-redux";
import { add as addMessage } from "../actions/messages";
import MessageLayout from "./MessagesLayout";
import aux from "../components/aux";

const mapStateToProps = ({ messages }, ownProps) => ({
  messages,
  ...ownProps
});

class Messages extends React.Component {
  constructor(props) {
    super();

    this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
  }

  handleSubmitMessage(message) {
    this.props.dispatch(addMessage(message));
  }

  render() {
    return <MessageLayout messages={this.props.messages} handleSubmitMessage={this.handleSubmitMessage} />;
  }
}

export default aux(connect(mapStateToProps)(Messages));
