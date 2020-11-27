import React, { Component } from "react";
import { Col, Row, Image } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class Home extends Component {
  state = {
    requestDetails: {},
    loading: true,
  };

  componentDidMount = async () => {
    console.log("Comp has finished mounting");

    this.fetcher();
  };

  //   componentDidUpdate = (props, state) => {
  //     if (state.Albums !== this.state.Albums) {
  //       this.fetcher();
  //     }
  //   };

  fetcher = async () => {
    this.setState({ loading: true });
    try {
      let response = await fetch(
        "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + this.props.query,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "dadb0572d1mshf513c7c09dbd153p184fa1jsndbdedc59fd83",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );

      if (response.ok) {
        let results = await response.json();

        this.setState({
          requestDetails: results.data[0].album,
          loading: false,
        });

        console.log(results.data[0].album, "ssssssssssss");
      } else {
        console.log("an error happened!");
        this.setState({ loading: false });
      }
    } catch (e) {
      console.log(e);
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <div
        className="mb-2 d-flex  justify-content-between px-1"
        style={{ width: "200px" }}
      >
        <Image
          className="img-fluid h-100"
          src={this.state.requestDetails.cover_medium}
          alt="album picture"
          onClick={() =>
            this.props.history.push(`/Detail/${this.state.requestDetails.id}`)
          }
        />
      </div>
    );
  }
}

export default withRouter(Home);
