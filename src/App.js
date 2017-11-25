import React, { Component } from 'react';
import ReactMap from 'react-mapbox-gl';
import { Marker, Layer, Source, Popup } from "react-mapbox-gl"

const accessToken = "pk.eyJ1IjoiYWxleDMxNjUiLCJhIjoiY2o0MHp2cGtiMGFrajMycG5nbzBuY2pjaiJ9.QDApU0XH2v35viSwQuln5w";
const style = "mapbox://styles/mapbox/streets-v9";

const Map = ReactMap({
  accessToken
});

const mapStyle = {
  height: '100vh',
  width: '100vw'
};

class MyMarker extends Component {
  render() {

    const center = [-95.3698, 29.7604]
    const imageUrl = 'https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/114/smiling-face-with-sunglasses_1f60e.png';
    const newCoord = [(Math.random() * 0.06) + center[0], center[1] + (Math.random() * 0.06)];
    return (
      <Marker coordinates={newCoord} >
        <img src={imageUrl} width="50" height="50" />
      </Marker>
    )
  }
}

class App extends Component {
  render() {

    let markers = []
    const center = [-95.3698, 29.7604]

    for (let i = 0; i < 1000; i++) {
      markers.push(<MyMarker key={i} />)
    }
    return (
      <Map
        style={style}
        containerStyle={mapStyle}
        center={center}
      >
        {markers}
      </Map>
    );
  }
}

export default App;
