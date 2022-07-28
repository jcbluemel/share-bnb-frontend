import React from "react";


/** TODO:
 *  CompanyDetail
 *
 *  Props:
 *    - company: details from API as obj { company }
 *
 *  State:
 *    - None
 *
 *  GetCompanyDetail -> CompanyDetail -> JobCardList
 */

function ListingDetail({ listing }) {
  // console.log("CompanyDetail");

  return (
    <div className="ListingDetail">
      <h2>{listing.title} </h2>
      <h4>{listing.description}</h4>
      <hr></hr>
    </div>
  );
}

export default ListingDetail;