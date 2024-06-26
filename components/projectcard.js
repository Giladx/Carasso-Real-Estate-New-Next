import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Projectcard = (props) => {
  return (
    <>
      <div
        id="image-container"
        className={`projectcard projectcard-projectcard ${props.rootClassName} `}
      >
        <div className="project-inner">
          <div className="projectcard-projectstatus">
            <span className="projectcard-text">בתכנון</span>
            <img
              alt="VectorStroke3708"
              src="/external/VectorStroke3708-4itf1.svg"
              className="projectcard-vector-stroke"
            />
          </div>
          <div className="projectcard-projectcontent">
            <img
              id="btn-1"
              alt="projectarrowbutton3708"
              src="/projectarrowbutton3708-a4n2.svg"
              loading="lazy"
              className="projectcard-projectarrowbutton"
            />
            <div className="projectcard-projectdetails">
              <div
                id="info"
                className="projectinfo projectcard-projectnamelocation"
              >
                <span className="projectcard-text1">קריית אונו</span>
                <span className="projectcard-text2">אומאמי</span>
                <span className="projectcard-text3">
                  בבסיס התכנון של המתחם עומדת האהבה לבישול ולאירוח, אהבה שניתן
                  להרגיש החל במרחבים המשותפים, דרך הדירות עצמן ועד למטבחים.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="projectcard-circle"></div>
        <div className="project-img-small">
          <img id="mask" alt="image" src="/elipse-image.png" className="mask" />
        </div>
        <div>
          <div className="projectcard-container1">
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
          .projectcard-projectstatus {
            gap: 9px;
            cursor: pointer;
            display: flex;
            padding: 8px 15px;
            align-items: center;
            border-radius: 9999px;
            justify-content: flex-end;
            background-color: rgba(255, 255, 255, 0.30000001192092896);
          }
          .projectcard-text {
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
          .projectcard-vector-stroke {
            width: 12px;
            height: 12px;
          }
          .projectcard-projectcontent {
            gap: 15px;
            width: 322px;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .projectcard-projectarrowbutton {
            top: 0;
            left: 0px;
            width: auto;
            cursor: pointer;
            height: auto;
            position: absolute;
          }
          .projectcard-projectdetails {
            gap: 24px;
            width: auto;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .projectcard-text1 {
            color: var(--dl-color-carasso-plainwhite);
            height: 5px;
            font-size: 16px;
            font-style: Bold;
            text-align: right;
            font-weight: 700;
            font-stretch: normal;
            text-decoration: none;
          }
          .projectcard-text2 {
            color: var(--dl-color-carasso-plainwhite);
            height: 40px;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-weight: 300;
            font-stretch: normal;
            text-decoration: none;
          }
          .projectcard-text3 {
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
          .projectcard-circle {
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
          .projectcard-container1 {
            display: contents;
          }

          @media (max-width: 1200px) {
            .projectcard-projectcard {
              margin-left: 20px;
            }
          }
          @media (max-width: 991px) {
            .projectcard-projectcard {
              margin-left: 20px;
            }
          }
          @media (max-width: 479px) {
            .projectcard-projectcard {
              width: 350px;
            }
            .projectcard-projectnamelocation {
              right: 70px;
            }
          }
        `}
      </style>
    </>
  )
}

Projectcard.defaultProps = {
  exp: 'בבסיס התכנון של המתחם עומדת האהבה לבישול ולאירוח, אהבה שניתן להרגיש החל במרחבים המשותפים, דרך הדירות עצמן ועד למטבחים.',
  cardSubTitle: 'קריית אונו',
  vectorStrokeAlt: 'VectorStroke3708',
  imageAlt: 'image',
  rootClassName: '',
  imageSrc: '68b146ea-2613-4f67-b260-076640602c64',
  vectorStrokeSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bd438ef8-05f7-4c29-9c01-eea7ae17edea/d720de71-e904-4c17-bdd7-1c66629a63fe?org_if_sml=1356',
  cardTitle: 'אומאמי',
  projectarrowbuttonAlt: 'projectarrowbutton3708',
  projectarrowbuttonSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bd438ef8-05f7-4c29-9c01-eea7ae17edea/1592175b-1fbf-4011-b5fb-ce9e8256ba9e?org_if_sml=1595',
  cardTag: 'בתכנון',
}

Projectcard.propTypes = {
  exp: PropTypes.string,
  cardSubTitle: PropTypes.string,
  vectorStrokeAlt: PropTypes.string,
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  vectorStrokeSrc: PropTypes.string,
  cardTitle: PropTypes.string,
  projectarrowbuttonAlt: PropTypes.string,
  projectarrowbuttonSrc: PropTypes.string,
  cardTag: PropTypes.string,
}

export default Projectcard
