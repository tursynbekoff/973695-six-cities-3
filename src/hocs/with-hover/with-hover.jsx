import React, {PureComponent} from 'react';

const withHover = (Component) => {
  class WithHover extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeMapPin: false,
      };

      this._onHoverActiveMapPin = this._onHoverActiveMapPin.bind(this);
      this._onHoverResetMapPin = this._onHoverResetMapPin.bind(this);
    }

    _onHoverActiveMapPin(id) {
      this.setState({
        activeMapPin: id,
      });
    }


    _onHoverResetMapPin() {
      this.setState({
        activeMapPin: false,
      });
    }

    render() {
      const {activeMapPin} = this.state;

      return (
        <Component
          {...this.props}
          activeMapPin={activeMapPin}
          onHoverActiveMapPin={this._onHoverActiveMapPin}
          onHoverResetMapPin={this._onHoverResetMapPin}
        />
      );
    }
  }

  return WithHover;
};

export default withHover;
