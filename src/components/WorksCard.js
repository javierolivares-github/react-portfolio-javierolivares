import React from 'react';
import "./WorksCard.css";
import { Link } from "react-router-dom";

function WorksCard({
  path,
  src,
  alt,
  title,
  copy
}) {
  return (
    <div className="works__card">
      <Link to={path} className="works__card__link" target="_blank">
        <picture className='works__card__pic-wrapper'>
          <img src={src} alt={alt} className="works__card__img" />
        </picture>
      </Link>

      <div className="works__card__texts">
        <h3 className="works__card__title">{title}</h3>
        <p className="works__card__copy">
          {copy}
        </p>
      </div>
    </div>
  )
}

export default WorksCard