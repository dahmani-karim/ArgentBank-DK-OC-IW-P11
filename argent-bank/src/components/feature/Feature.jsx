// Component for the features section

import { PropTypes } from "prop-types";

const Feature = ({alt,image,paragraph,title}) => {
    return (
        <div className="feature-item">
          <img
            src={image}
            alt={alt}
            className="feature-icon"
          />
          <h3 className="feature-item-title">{title}</h3>
          <p>
            {paragraph}
          </p>
        </div>
    );
};

Feature.propTypes = {
  alt:PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Feature;