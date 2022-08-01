import React from "react";
function About_Bio_Gina() {
  return (
    <div className='row my-5'>
      <div className='col col-12 col-md-4  mb-5'>
        <img
          src='https://mmhforensics.s3.us-east-2.amazonaws.com/assets/images/gina-headshot.jpg'
          alt='Dr. Gina Wong'
          className='w-100'
        />
      </div>
      <div className='col col-12 col-md-8 pl-md-4 px-4'>
        <h2>Dr. Gina Wong</h2>
        <p className='text-bold italic text-italic font-italic'>Director</p>
        <p>
          <span className='text-extrabold'>Dr. Gina Wong</span> is a Registered
          Psychologist in Alberta, Canada, and a professor in the Faculty of
          Health Disciplines at Athabasca University. She specializes in
          perinatal mental health and has a program of research focused on
          perinatal mood and anxiety disorders and is an educator on the topic.
          She is the Vice-President of Postpartum Support International Canada
          that launched on World Maternal Mental Health Day in 2022.{" "}
        </p>
        <p>
          She also specializes in maternal mental health forensics and has
          served as a reproductive/perinatal expert witness. Dr. Wong is
          actively involved in developing competency-based understandings in the
          role of the perinatal mental health expert witness. She has published
          4 books, which includes editing{" "}
          <span className=''>Moms Gone Mad</span> published by Demeter Press
          (Wong, 2012) and co-editing{" "}
          <span className='italic text-italic'>
            Infanticide and Filicide: Foundations in Maternal Mental Health
            Forensics
          </span>{" "}
          published by the American Psychiatric Association (Wong &amp; Parnham,
          2021).
        </p>
        <p>
          Dr. Wong received the 2022 Canadian Counselling and Psychotherapy
          Leadership Award and the 2022 Psychologist of the Year Award from the
          Psychologists’ Association of Alberta for her work in racial justice
          and perinatal mental health.
        </p>
      </div>
    </div>
  );
}

export default About_Bio_Gina;
