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
      My research interests span across Machine Learning & Large Language Models, Software Engineering, Heterogeneous Systems and Embedded Computing.
  </div>
    {/* Papers Published */}
    <section>
        <h2 className="text-2xl font-semibold mb-3">Papers Published</h2>
        <ol className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
          <li>
           “OpenRTLSet: A Fully Open-Source Dataset for Large Language Model-based Verilog Module Design,” pp. 212–218, Jun. 2025, doi: https://doi.org/10.1109/iclad65226.2025.00038.
          </li>
          
        </ol>
      </section>
    </div>
  );
};

export default Home;
