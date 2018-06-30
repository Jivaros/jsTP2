import { connect } from "react-redux";
import React from "react";
import LoginForm from "./authentication/LoginForm";
import VerticallyCenteredModal from "./modals/VerticallyCenteredModal";
import authenticate from "../actions/authentication";

function mapStateToProps({ authentication }, baseProps) {
    return { ...baseProps, authentication }
}
export default function (WrappedComponent) {
    class wrappedaux extends React.Component {
        render() {
            return (
                <div>
                    <VerticallyCenteredModal visible={!this.props.authentication.isLoggedIn}>
                        <LoginForm onSubmit={this.props.authenticate} />
                    </VerticallyCenteredModal>
                    <WrappedComponent />
                </div>
            );
        }
    }

    return connect(mapStateToProps, { authenticate })(wrappedaux);
}