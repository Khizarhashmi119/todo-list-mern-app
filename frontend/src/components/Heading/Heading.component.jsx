import React from "react";

class Heading extends React.Component {
  render() {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date().toLocaleDateString("en-US", options);
    return <h1 className="heading">{date}</h1>;
  }
}

export default Heading;
