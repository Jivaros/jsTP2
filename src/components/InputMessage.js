import React from "react";
import { Input } from "antd";

const Search = Input.Search;

const InputMessage = props => (
  <Search
    placeholder="input message"
    onSearch={value => props.onSubmit(value)}
    enterButton="Send"
  />
);

export default InputMessage;
