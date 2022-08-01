import React from "react";
function About_Bio_George() {
  return (
    <div className='row my-5'>
      <div className='col col-12 col-md-4 mx-auto px-4 mb-5'>
        <img
          src='./src/assets/images/george-headshot.jpg'
          alt='George J Parnham'
          className='w-100'
        />
      </div>
      <div className='col col-12 col-md-8 pl-md-4'>
        <h2>George J. Parnhamn, J.D.</h2>
        <p className='text-bold italic text-italic font-italic'>
          Associate Director
        </p>
        <p>
          <span className='text-extrabold'>George J. Parnham</span> has over
          fifty years of experience as a practicing attorney. He is Board
          Certified in the area of Criminal Law by the Texas Board of Legal
          Specialization. His practice entails every aspect of the law where
          citizens find themselves accused of a crime.
        </p>
        <p>
          Mr. Parhnam is revolutionary in his support and dedication to maternal
          mental illness as they relate to criminal matters. He was instrumental
          in the successful defense of the Andrea Yates case, and in 2002, Mr.
          Parnham initiated the Yates Children Memorial Fund (YCMF), sponsored
          by the Mental Health Association of Greater Houston. The YCME is named
          after Noah, John, Paul, Luke, and Mary and is a fund that contributes
          to women's mental health education.
        </p>
        <p>
          {" "}
          Mr. Parnham states, "it is our sincere desire that the lives of these
          children will be forever memorialized through this effort.""
        </p>
      </div>
    </div>
  );
}

export default About_Bio_George;
