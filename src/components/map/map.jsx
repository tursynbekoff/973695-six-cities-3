import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import leaflet from 'leaflet';
import {CityCoordinates} from "../../const.js";
import {AppRoute} from '../../const.js';

const zoom = 12;

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;

    this.mapRef = createRef();
  }

  getIcon(isActive) {
    return leaflet.icon({
      iconUrl: isActive ? AppRoute.ROOT + `img/pin-active.svg` : AppRoute.ROOT + `img/pin.svg`,
      iconSize: [20, 30],
    });
  }

  componentDidMount() {
    const city = CityCoordinates[this.props.currentCity];

    this.map = leaflet.map(this.mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(city, zoom);

    leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this.map);
    this._getMap();
  }

  _getMap() {

    this.makersGroup = leaflet.layerGroup().addTo(this.map);

    this.props.offerList.forEach((it) => {
      const isActive = (this.props.activeMapPin === it.id);

      leaflet.marker(it.coordinate, {
        icon: this.getIcon(isActive)
      }).addTo(this.makersGroup);
    });
  }

  componentWillUnmount() {
    this.map = null;
  }

  componentDidUpdate(prevProps) {

    if (
      this.props.currentCity !== prevProps.currentCity
    ) {
      this.map.setView(CityCoordinates[this.props.currentCity], this.zoom);
    }
    this._getMap();
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}
        ref={this.mapRef}
      ></div>
    );
  }

}

Map.propTypes = {

  offerList: PropTypes.arrayOf(
      PropTypes.shape({
        coordinate: PropTypes.arrayOf(PropTypes.number.isRequired)
      })).isRequired,
  currentCity: PropTypes.string.isRequired,
  activeMapPin: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),

};

export default Map;

