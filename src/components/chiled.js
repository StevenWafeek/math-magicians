// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Display({ value }) {
  return <div className="display">{value}</div>;
}

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;
