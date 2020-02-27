import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import leaflet from 'leaflet';

const city = [52.38333, 4.9];
const zoom = 12;

const icon = leaflet.icon({
  iconUrl: `/img/pin.svg`,
  iconSize: [20, 30]
});
class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;

    this.map = createRef();
  }

  componentDidMount() {
    const map = leaflet.map(this.map.current, {
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

    this.props.offerList.map((it) => {
      leaflet.marker(it.coordinate, {icon}).addTo(map);
    });
  }

  componentWillUnmount() {
    this.map.current = null;
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}} ref={this.map}></div>
    );
  }

}

Map.propTypes = {

  offerList: PropTypes.arrayOf(
      PropTypes.shape({
        coordinate: PropTypes.arrayOf(PropTypes.number.isRequired)
      })).isRequired

};

export default Map;

