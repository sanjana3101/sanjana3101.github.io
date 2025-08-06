import React from 'react';
import Image from './Image';

const Home = () => {
  return (
    <div className="container">
      <div className="segment"><Image /></div>
      <div className="segment">Hi, I'm Sanjana Pingali!</div>
      <div className="segment">
        I'm a Master's student in Electrical and Computer Engineering at the University of Illinois at Urbana-Champaign
      </div>
      <div className="segment">
      Previously, I completed my Bachelor's degree in Computer Engineering at the same university, graduating as a James Scholar and a member of the Eta Kappa Nu (HKN) Honor Society.
      My research interests span across Machine Learning & Large Language Models, Software Engineering, Heterogeneous and Embedded Computing, as well as Data Engineering.
  </div>
    </div>
  );
};

export default Home;
