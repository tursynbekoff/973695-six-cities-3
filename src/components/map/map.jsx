import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import leaflet from 'leaflet';
import {CityCoordinates} from "../../const.js";

const zoom = 12;

const icon = leaflet.icon({
  iconUrl: `/img/pin.svg`,
  iconSize: [20, 30]
});

const activeIcon = leaflet.icon({
  iconUrl: `/img/pin-active.svg`,
  iconSize: [20, 30]
});

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;

    this.mapRef = createRef();
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
    this.pinRerender();
  }

  pinRerender() {
    this.props.offerList.map((it) => {
      if (it.id === this.props.activeMapPin) {
        leaflet.marker(it.coordinate, {activeIcon}).addTo(this.map);
        console.log(it.id);
        return false;
      }
      leaflet.marker(it.coordinate, {icon}).addTo(this.map);
      console.log(it.id);
      return true;
    });
  }

  componentWillUnmount() {
    this.map.current = null;
    // this.map.removeLayer();
    // this.map.removeControl();
  }

  componentDidUpdate(prevProps) {

    if (this.props.activeMapPin) {
      this.componentWillUnmount();
      this.pinRerender();
    }
    // if (this.props.disabledMapPin) {
    //   this.componentWillUnmount();
    //   this.pinRerender();
    // }

    if (
      this.props.currentCity !== prevProps.currentCity
    ) {
      this.map.setView(CityCoordinates[this.props.currentCity], this.zoom);
      this.pinRerender();
    }

    // console.log(this.props.activeMapPin);
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
  cities: PropTypes.array,
  currentCity: PropTypes.string,
  activeMapPin: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  disabledMapPin: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,

};

export default Map;

