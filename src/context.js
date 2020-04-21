import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    heading: 'top 10',
    track_list: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=a50b286ff1812356a7a1ecfd3f307931	`
      )
      .then((res) => {
        // console.log(res.data);
        this.setState({ track_list: res.data.message.body.track_list });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <Context.Provider value={this.state}> {this.props.children} </Context.Provider>
      </div>
    );
  }
}

export const Consumer = Context.Consumer;
