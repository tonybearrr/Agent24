import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ fill, ...other }) => (
  <svg {...other} width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.989 2.48322L11.4148 2.47501L9.90659 0.230225C9.81592 0.0904299 9.65933 0 9.49449 0H5.43134C5.26649 0 5.11814 0.0904589 5.0275 0.222012L3.4698 2.47501L2.01101 2.48322C0.906604 2.48322 0 3.38773 0 4.48954V10.9772C0 12.0791 0.906604 13 2.01098 13H12.989C14.0934 13 15 12.0791 15 10.9772V4.48954C15 3.38773 14.0934 2.48322 12.989 2.48322ZM14.011 10.9772C14.011 11.5364 13.5495 12.0133 12.989 12.0133H2.01101C1.45056 12.0133 0.989041 11.5364 0.989041 10.9772V4.48954C0.989041 3.93039 1.45059 3.46994 2.01101 3.46994H3.73355C3.8984 3.46994 4.04675 3.37948 4.13739 3.24793L5.69508 0.994932H9.2308L10.7308 3.23151C10.8215 3.36306 10.9781 3.45352 11.1346 3.45352L12.9808 3.46997C13.5413 3.46997 14.0028 3.93045 14.0028 4.48957V10.9773H14.011V10.9772Z" fill={fill} />
    <path d="M7.54182 3.6673C5.60502 3.6673 4.03906 5.23784 4.03906 7.16194C4.03906 9.08604 5.61325 10.6566 7.54182 10.6566C9.4704 10.6566 11.0446 9.08601 11.0446 7.16191C11.0446 5.23781 9.4704 3.6673 7.54182 3.6673ZM7.54182 9.66983C6.15721 9.66983 5.02807 8.54332 5.02807 7.16191C5.02807 5.7805 6.15721 4.65399 7.54182 4.65399C8.92644 4.65399 10.0556 5.7805 10.0556 7.16191C10.0556 8.54332 8.92644 9.66983 7.54182 9.66983Z" fill={fill} />
  </svg>

);

Photo.propTypes = {
  fill: PropTypes.string,
};

Photo.defaultProps = {
  fill: '#999999',
};

export default Photo;