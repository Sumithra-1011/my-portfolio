import "./Myskills.css";
import { Circle } from "rc-progress";
export default function Myskills() {
  return (
    <>
      <div>
        <div>
          <h2 className="ps-3 p-sm-0">SkILLS</h2>
          <div className="d-flex ps-3 p-sm-0">
            <div className="round"></div>
            <div className="line mt-1 ms-2"></div>
          </div>
        </div>
        <h4 className="skillheading mt-5">Technical Skill</h4>

        <div className="skill mx-auto w-75" data-aos="zoom-in">
          <li>
            <div className="d-flex justify-content-between">
              <h3>Html</h3>
              <h3>90%</h3>
            </div>
            <span className="bar">
              <span className="html"></span>
            </span>
          </li>
          <li>
            <div className="d-flex justify-content-between">
              <h3>Css</h3>
              <h3>80%</h3>
            </div>
            <span className="bar">
              <span className="css"></span>
            </span>
          </li>
          <li>
            <div className="d-flex justify-content-between">
              <h3>JavaScript</h3>
              <h3>75%</h3>
            </div>
            <span className="bar">
              <span className="javascript"></span>
            </span>
          </li>
          <li>
            <div className="d-flex justify-content-between">
              <h3>Bootstrap</h3>
              <h3>80%</h3>
            </div>
            <span className="bar">
              <span className="bootstrap"></span>
            </span>
          </li>
          <li className="pb-4 ">
            <div className="d-flex justify-content-between">
              <h3>React Js</h3>
              <h3>70%</h3>
            </div>
            <span className="bar">
              <span className="react"></span>
            </span>
          </li>
        </div>
        <h4 className="skillheading mt-4">Professional Skill</h4>
        <div className="row d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 mb-5">
          <div
            className="overouter col-md-5 col-8 text-center"
            data-aos="zoom-in"
          >
            <div className="outer mx-auto mt-4">
              <Circle
                percent={70}
                strokeWidth={10}
                strokeColor="goldenrod"
                trailColor=""
              />
              <div className="let">
                <h3>70%</h3>
              </div>
              <div className="inner"></div>
            </div>
            <h5 className="mt-4">Porblem Solving</h5>
          </div>
          <div
            className="overouter col-md-5 col-8 text-center"
            data-aos="zoom-in"
          >
            <div className="outer mx-auto mt-4">
              <Circle
                percent={75}
                strokeWidth={10}
                strokeColor="goldenrod"
                trailColor=""
              />
              <div className="let">
                <h3>75%</h3>
              </div>
              <div className="inner"></div>
            </div>
            <h5 className="mt-4">Communication</h5>
          </div>
        </div>
        <div className="row d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 mb-5">
          <div
            className="overouter col-md-5 col-8 text-center"
            data-aos="zoom-in"
          >
            <div className="outer mx-auto mt-4">
              <Circle
                percent={90}
                strokeWidth={10}
                strokeColor="goldenrod"
                trailColor=""
              />
              <div className="let">
                <h3>90%</h3>
              </div>
              <div className="inner"></div>
            </div>
            <h5 className="mt-4">Teamwork</h5>
          </div>
          <div
            className="overouter col-md-5 col-8 text-center"
            data-aos="zoom-in"
          >
            <div className="outer mx-auto mt-4">
              <Circle
                percent={90}
                strokeWidth={10}
                strokeColor="goldenrod"
                trailColor=""
              />
              <div className="let">
                <h3>90%</h3>
              </div>
              <div className="inner"></div>
            </div>
            <h5 className="mt-4">Time management</h5>
          </div>
        </div>
      </div>
    </>
  );
}
