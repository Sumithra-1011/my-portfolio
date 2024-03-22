import './Education.css'

export default function Education() {
; 
  return (
    <>
    <div>
    <div >
        <h2 className="ps-3 p-sm-0">EDUCATION</h2>
        <div className="d-flex ps-3 p-sm-0">
          <div className="round"></div>
          <div className="line mt-1 ms-2"></div>
        </div>
      </div>
      {/* ***** Eduation start ******** */}
      <div className='education pb-3'>
      <div data-aos="flip-left">
          <h5 className='year'>Jun 2023-Present</h5>
          <h4>Front-End Development</h4>
          <h5>Self-Learning on YouTube and Udemy</h5>
          <p>Currently I am learnin Web Designing,HTML, CSS, JavaScript, Bootstrap, React JS, Git and GitHub.</p>
         
        </div>
        <div data-aos="flip-right">
          <h5 className='year'>2021-2023</h5>
          <h4>MSc in Computer Science</h4>
          <h5>Periya University</h5>
          <p> Proficient in data structures and algorithms, Java programming, computer networking, and machine learning.</p>
        </div>
        <div data-aos="flip-left">
          <h5 className='year'>2018-2021</h5>
          <h4>BSc in Computer Science</h4>
          <h5>Sri Sakthikailssh Women College</h5>
          <p> Proficient in C programming, C++ programming, statistics, and operating systems.</p>
        </div>
        <div data-aos="flip-right">
          <h5 className='year' >2017-2018</h5>
          <h4>Higher Secondary</h4>
          <h5>Government Higher Secondary School</h5>
          <p>Studied basics of computer science, programming languages, and mathematics. </p>
        </div>
        
      </div>
      {/* ******** Education end ********* */}
    </div> 
    </>
  );
}
