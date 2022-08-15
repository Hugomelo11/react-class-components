import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    //this.props = props
    super(props);

    this.state = {
      count: props.count,
      coffee: [],
      // color: props.color
    };
  }

  componentDidMount() {
    /// loading coffee from API
    // like useEffect
    console.log("component did mount");
    let url = "https://api.sampleapis.com/coffee/hot";
    fetch(url) // fetching data from url
      .then((res) => res.json()) // transfering data into json
      .then(
        (
          data /// displaying data
        ) =>
          this.setState({
            count: this.state.count,
            coffee: data,
          })
      );
  }
  // return
  render() {
    return (
      <>
        <h1>This is a class component {this.state.count}</h1>
        <button
          onClick={() => {
            // update the count to count+1
            this.setState({
              count: this.state.count + 1,
              coffee: this.state.coffee,
            });
          }}
        >
          Add one
        </button>

        {/* map through coffee */}
        {this.state.coffee.map((coffee) => (
          <h1 key={coffee.id}>{coffee.title}</h1>
        ))}
      </>
    );
  }
}

export default ClassComponent;
