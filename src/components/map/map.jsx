import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import leaflet from 'leaflet';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;

    this._mapDiv = createRef();
  }

  componentDidMount() {
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [20, 30]
    });

    const zoom = 12;

    const map = leaflet.map(this._mapDiv.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(map);

    this.props.offerList.forEach((it) => {
      leaflet.marker(it.coordinate, {icon}).addTo(map);
    });
  }


  render() {
    return (
      <div id="map" style={{height: `100%`}} ref={this._mapDiv}></div>
    );
  }

}

Map.propTypes = {

  offerList: PropTypes.arrayOf(
      PropTypes.shape({
        price: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        coordinate: PropTypes.arrayOf(PropTypes.number.isRequired)
            .isRequired
      })).isRequired

};

export default Map;

