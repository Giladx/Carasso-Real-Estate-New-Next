import React from 'react'

import PropTypes from 'prop-types'

const ProjectMiniatre = (props) => {
  return (
    <>
      <div className="project-miniatre-container">
        <div className="project-miniatre-projectcardgridviewnarrow">
          <div className="project-miniatre-projectimageandtags">
            <img
              alt={props.imagealt1}
              src={props.imagesrc1}
              className="project-miniatre-image"
            />
            <div className="project-miniatre-projectstatus">
              <span className="project-miniatre-text">
                <span>בתכנון</span>
              </span>
              <img
                alt="VectorStroke3669"
                src="/external/vectorstroke3669-pe45.svg"
                className="project-miniatre-vector-stroke"
              />
            </div>
          </div>
          <div className="project-miniatre-projectdetails">
            <div className="project-miniatre-projectdetails1">
              <div className="project-miniatre-projectnamelocation">
                <span className="project-miniatre-text2">
                  <span>קריית אונו</span>
                </span>
                <span className="project-miniatre-text4">
                  <span>אומאמי</span>
                </span>
              </div>
              <span className="project-miniatre-text6">
                <span>
                  התאמה לסביבת המגורים התל אביבית התוצאה היא שילוב מרשים של
                  נוחות, איכות, נוסטלגיה וחדשנות.
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .project-miniatre-container {
            width: 400px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .project-miniatre-projectcardgridviewnarrow {
            gap: 30px;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .project-miniatre-projectimageandtags {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-self: stretch;
            box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10000000149011612);
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 20px;
            justify-content: flex-end;
          }
          .project-miniatre-image {
            width: 100%;
            height: 430px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius20);
          }
          .project-miniatre-projectstatus {
            gap: 7px;
            top: 30px;
            right: 30px;
            width: auto;
            display: flex;
            padding: 8px 15px;
            position: absolute;
            align-items: center;
            border-radius: 9999px;
            justify-content: flex-end;
            background-color: rgba(255, 255, 255, 0.8500000238418579);
          }
          .project-miniatre-text {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 14px;
            font-style: DemiBold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .project-miniatre-vector-stroke {
            width: 12px;
            height: 12px;
          }
          .project-miniatre-projectdetails {
            gap: 108px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .project-miniatre-projectdetails1 {
            gap: 30px;
            width: 360px;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .project-miniatre-projectnamelocation {
            gap: 20px;
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .project-miniatre-text2 {
            color: var(--dl-color-carasso-primaryblack);
            width: 100%;
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .project-miniatre-text4 {
            color: var(--dl-color-carasso-primaryblack);
            width: 100%;
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .project-miniatre-text6 {
            color: var(--dl-color-carasso-primaryblack);
            width: 100%;
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Light;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 300;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

ProjectMiniatre.defaultProps = {
  imagesrc1: '/824d0c2137cb905341761b2e68e150d3-500h.jpeg',
  imagesrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imagealt1: 'image',
  imagealt: 'image',
}

ProjectMiniatre.propTypes = {
  imagesrc1: PropTypes.string,
  imagesrc: PropTypes.string,
  imagealt1: PropTypes.string,
  imagealt: PropTypes.string,
}

export default ProjectMiniatre
