import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import scrollBG from "../imgs/temp.png";
import SideNavBar from "../components/SideNavBar";

export default function DetailPage() {
  const { id } = useParams();
  const {
    error,
    isPending,
    data: month,
  } = useFetch(
    `https://myanmar-months-json-server.vercel.app/Tbl_Months/${id}`
  );
  const getImageUrl = (imageId) => {
    return `https://github.com/kaungpyaesoneaunggic/myanmar-months-json/blob/main/img/months/${imageId}.jpg?raw=true`;
  };
  return (
    <div className=" overflow-hidden bg-white minHeight">
      {error && <div>{error}</div>}
      {isPending && (
        <div className="h1 d-flex justify-content-center mt-3 align-items-center minHeight">
          ခေတ္တစောင့်ပေးပါ...
        </div>
      )}
      {month && (
        <div
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="row"
        >
          <div className="col-lg-1">
            <SideNavBar/>
          </div>
          <div className="col-lg-11 overflow-auto" style={{ marginBottom: "3vh" , height:'90vh'}}>
            <p className="h4 mt-3 text-center">
              <span>{month.MonthMm}</span>
              <span>&#40; {month.MonthEn} &#41;</span>
            </p>
            <p className="h3 mt-2 text-center">
              <span>{month.FestivalMm}</span>
              <span>&#40; {month.FestivalEn} &#41;</span>
            </p>
            <div className="p-3 row">
              <div
                className="column col-md-6"
                style={{ backgroundImage: scrollBG }}
              >
                <img className="w-100 px-4" src={getImageUrl(month.id)} />
                <p className="mt-3 border p-3 rounded">{month.Description}</p>
              </div>
              <p className="column col-md-6  border p-3 rounded">
                {month.Detail}
              </p>
              <div className="d-flex justify-content-center">
                <Link to="/" className="btn btn-dark col-md-3">
                  ပင်မစာမျက်နှာသို့
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
