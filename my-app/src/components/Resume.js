import React from 'react';

const Resume = () => {
  return <div id="example1"><script src="/js/pdfobject.js"></script>
  <script>PDFObject.embed("/Resume.pdf", "#example1");</script></div>;
};
export default Resume;