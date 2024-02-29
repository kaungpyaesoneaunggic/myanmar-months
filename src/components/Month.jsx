import React from "react";
import { Link } from "react-router-dom";

export default function Month({ imageId, monthLabel, monthFestival }) {
  const getImageUrl = (imageId) => {
    return `https://github.com/kaungpyaesoneaunggic/myanmar-months-json/blob/main/img/${imageId}.jpg?raw=true`;
  };
  return (
    <div>
      <Link to={`/${imageId}`} className="text-decoration-none text-dark cornerRounded">
        <div
          className="card bg-warning cornerRounded"
          style={{ height: "100%", overflow: "hidden" }}
        >
          <div
            className="ratio"
            style={{ paddingTop: "100%", position: "relative" }}
          >
            <img
              className="position-absolute top-0 start-0 w-100 h-100 object-cover"
              src={getImageUrl(imageId)}
              alt="month"
            />
          </div>
          {/* month name on image */}
          <div className="glassBg position-absolute bottom-0 start-0 end-0 text-center text-white p-3">
            <h4>{monthLabel}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
}
{
  /* <div className="bg-secondary cornerRounded p-1 row">
        <div className="col-lg-5 leftRounded">
        <img
          className="monthImgSmall leftRounded"
          src={getImageUrl(imageId)}
        />
        </div>
        <div className="col-lg-7  bg-white rightRounded">
        <p className="smallTextBluish p-0">{monthLabel}လ</p>
        <p className="smallTextBluish p-0 mt-3">{monthFestival}</p>
        </div>
      </div> */
}
