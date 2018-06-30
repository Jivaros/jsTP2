import React from "react";
import { Timeline } from "antd";

const MessageList = ({ messages }) => (
  <Timeline>
    {messages.map(m => (
      <Timeline.Item key={m.id}>
        <strong>{new Date(m.date).toDateString()}: {m.text}</strong>
      </Timeline.Item>
    ))}
  </Timeline>
);

export default MessageList;
