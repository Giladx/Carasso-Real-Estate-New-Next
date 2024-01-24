import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Projectcard1 = (props) => {
  return (
    <>
      <div
        id="image-container"
        className={`projectcard projectcard1-projectcard ${props.rootClassName} `}
      >
        <div className="project-inner">
          <div className="projectcard1-projectstatus">
            <span className="projectcard1-text">{props.cardTag}</span>
            <img
              alt={props.vectorStrokeAlt}
              src={props.vectorStrokeSrc}
              className="projectcard1-vector-stroke"
            />
          </div>
          <div className="projectcard1-projectcontent">
            <img
              id="btn-1"
              alt={props.projectarrowbuttonAlt}
              src={props.projectarrowbuttonSrc}
              loading="lazy"
              className="projectcard1-projectarrowbutton"
            />
            <div className="projectcard1-projectdetails">
              <div
                id="info"
                className="projectinfo projectcard1-projectnamelocation"
              >
                <span className="projectcard1-text1">{props.cardSubTitle}</span>
                <span className="projectcard1-text2">{props.cardTitle}</span>
                <span className="projectcard1-text3">{props.exp}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="projectcard1-circle"></div>
        <div className="project-img-small">
          <img
            id="mask"
            alt={props.imageAlt}
            src={props.imageSrc}
            className="mask"
          />
        </div>
        <div>
          <div className="projectcard1-container1">
            <Script
              html={`<style>
#image-container:hover #mask {
   opacity: 1;
   transition: .35s all 0.3s ease-in-out;
}
#image-container:hover #info {
   top: -150px;
   transition: .35s all 0.3s ease-in-out;
}

#image-container:hover #btn-1 {
   top: -30px;
   transition: .35s all 0.3s ease-in-out;
}
#mask {
transition: .35s all 0.3s ease-in-out;
}
#info {
transition: .35s all 0.3s ease-in-out;
}
#btn-1 {
transition: .35s all 0.3s ease-in-out;
}
</style>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .projectcard1-projectstatus {
            gap: 9px;
            cursor: pointer;
            display: flex;
            padding: 8px 15px;
            align-items: center;
            border-radius: 9999px;
            justify-content: flex-end;
            background-color: rgba(255, 255, 255, 0.30000001192092896);
          }
          .projectcard1-text {
            color: var(--dl-color-carasso-plainwhite);
            height: auto;
            font-size: 14px;
            font-style: DemiBold;
            text-align: right;
            font-weight: 400;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .projectcard1-vector-stroke {
            width: 12px;
            height: 12px;
          }
          .projectcard1-projectcontent {
            gap: 15px;
            width: 322px;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .projectcard1-projectarrowbutton {
            top: 0;
            left: 0px;
            width: auto;
            cursor: pointer;
            height: auto;
            position: absolute;
          }
          .projectcard1-projectdetails {
            gap: 24px;
            width: auto;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .projectcard1-text1 {
            color: var(--dl-color-carasso-plainwhite);
            height: 5px;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-weight: 700;
            font-stretch: normal;
            text-decoration: none;
          }
          .projectcard1-text2 {
            color: var(--dl-color-carasso-plainwhite);
            height: 40px;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-weight: 300;
            font-stretch: normal;
            text-decoration: none;
          }
          .projectcard1-text3 {
            color: var(--dl-color-carasso-plainwhite);
            width: 75%;
            height: auto;
            font-size: 14px;
            align-self: flex-end;
            font-style: Light;
            text-align: right;
            font-weight: 300;
            line-height: 140%;
            font-stretch: normal;
          }
          .projectcard1-circle {
            top: 36px;
            flex: 0 0 auto;
            left: -72px;
            width: 303px;
            height: 303px;
            display: flex;
            z-index: 1;
            position: absolute;
            align-items: flex-start;
            border-color: var(--dl-color-carasso-red);
            border-style: solid;
            border-width: 1px;
            border-radius: 100%;
            flex-direction: column;
            pointer-events: none;
          }
          .projectcard1-container1 {
            display: contents;
          }

          @media (max-width: 1200px) {
            .projectcard1-projectcard {
              margin-left: 20px;
            }
          }
          @media (max-width: 991px) {
            .projectcard1-projectcard {
              margin-left: 20px;
            }
          }
          @media (max-width: 479px) {
            .projectcard1-projectcard {
              width: 350px;
            }
            .projectcard1-projectnamelocation {
              right: 70px;
            }
          }
        `}
      </style>
    </>
  )
}

Projectcard1.defaultProps = {
  cardSubTitle: 'קריית אונו',
  imageSrc: '13c2adeb-f2f6-42e4-8373-e90c1ea0f10c',
  vectorStrokeAlt: 'VectorStroke3708',
  vectorStrokeSrc: '/external/vectorstroke3708-4itf.svg',
  imageAlt: 'image',
  cardTitle: 'אומאמי',
  rootClassName: '',
  projectarrowbuttonSrc: '421fdc50-5820-4581-8039-8f2fc0574b34',
  cardTag: 'בתכנון',
  projectarrowbuttonAlt: 'projectarrowbutton3708',
  exp: 'בבסיס התכנון של המתחם עומדת האהבה לבישול ולאירוח, אהבה שניתן להרגיש החל במרחבים המשותפים, דרך הדירות עצמן ועד למטבחים.',
}

Projectcard1.propTypes = {
  cardSubTitle: PropTypes.string,
  imageSrc: PropTypes.string,
  vectorStrokeAlt: PropTypes.string,
  vectorStrokeSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  cardTitle: PropTypes.string,
  rootClassName: PropTypes.string,
  projectarrowbuttonSrc: PropTypes.string,
  cardTag: PropTypes.string,
  projectarrowbuttonAlt: PropTypes.string,
  exp: PropTypes.string,
}

export default Projectcard1
