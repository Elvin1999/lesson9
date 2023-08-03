import React, { Fragment } from "react";

export default function MyList() {
  return (
    // <Fragment>
    //   <Fragment>
    //     <li>WaterMelon</li>
    //     <li>Apple</li>
    //     <li>Mango</li>
    //   </Fragment>
    //   <Fragment>
    //     <li>Mercedes</li>
    //     <li>Geely</li>
    //     <li>BMW</li>
    //     <li>Maserati</li>
    //   </Fragment>
    // </Fragment>

    <>
      <>
        <li>WaterMelon</li>
        <li>Apple</li>
        <li>Mango</li>
      </>
      <>
        <li>Mercedes</li>
        <li>Geely</li>
        <li>BMW</li>
        <li>Maserati</li>
      </>
    </>
  );
}
