import React from 'react'

import PropTypes from 'prop-types'

const Numbersurbanrenewal = (props) => {
  return (
    <>
      <div className="numbersurbanrenewal-numbersurbanrenewal">
        <div className="numbersurbanrenewal-container">
          <div className="numbersurbanrenewal-center">
            <span className="numbersurbanrenewal-text">
              <span className="numbersurbanrenewal-text01">
                אנחנו מחלוצי החברות
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="numbersurbanrenewal-text02">
                בתחום ההתחדשות העירונית
              </span>
            </span>
            <div className="numbersurbanrenewal-numbersstars">
              <div className="numbersurbanrenewal-bignumbers">
                <div className="numbersurbanrenewal-numberrowcontainer">
                  <div className="numbersurbanrenewal-bignumberblock">
                    <div className="numbersurbanrenewal-numbertext">
                      <img
                        alt={props.vectorAlt}
                        src={props.vectorSrc}
                        className="numbersurbanrenewal-vector"
                      />
                      <span className="numbersurbanrenewal-text03">
                        <span>23</span>
                      </span>
                    </div>
                    <div className="numbersurbanrenewal-bignumbertitleandicon">
                      <img
                        alt={props.frameAlt}
                        src={props.frameSrc}
                        className="numbersurbanrenewal-frame"
                      />
                      <span className="numbersurbanrenewal-text05">
                        <span>פרויקטים של תמ״א 38/2</span>
                      </span>
                    </div>
                  </div>
                  <div className="numbersurbanrenewal-bignumberblock1">
                    <div className="numbersurbanrenewal-numbertext1">
                      <img
                        alt={props.vectorAlt1}
                        src={props.vectorSrc1}
                        className="numbersurbanrenewal-vector1"
                      />
                      <span className="numbersurbanrenewal-text07">
                        <span>21</span>
                      </span>
                    </div>
                    <div className="numbersurbanrenewal-bignumbertitleandicon1">
                      <img
                        alt={props.buildingsiconAlt}
                        src={props.buildingsiconSrc}
                        className="numbersurbanrenewal-buildingsicon"
                      />
                      <span className="numbersurbanrenewal-text09">
                        <span>מתחמי פינוי בינוי</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="numbersurbanrenewal-numberrowcontainer1">
                  <div className="numbersurbanrenewal-bignumberblock2">
                    <div className="numbersurbanrenewal-numbertext2">
                      <img
                        alt={props.vectorAlt2}
                        src={props.vectorSrc2}
                        className="numbersurbanrenewal-vector2"
                      />
                      <span className="numbersurbanrenewal-text11">
                        <span>13,000</span>
                      </span>
                    </div>
                    <div className="numbersurbanrenewal-bignumbertitleandicon2">
                      <div className="numbersurbanrenewal-frame1">
                        <img
                          alt={props.frame1261158145Alt}
                          src={props.frame1261158145Src}
                          className="numbersurbanrenewal-frame1261158145"
                        />
                      </div>
                      <span className="numbersurbanrenewal-text13">
                        <span>יח״ד חדשות בהקמה</span>
                      </span>
                    </div>
                  </div>
                  <div className="numbersurbanrenewal-bignumberblock3">
                    <div className="numbersurbanrenewal-numbertext3">
                      <img
                        alt={props.vectorAlt3}
                        src={props.vectorSrc3}
                        className="numbersurbanrenewal-vector3"
                      />
                      <span className="numbersurbanrenewal-text15">
                        <span>3,900</span>
                      </span>
                    </div>
                    <div className="numbersurbanrenewal-bignumbertitleandicon3">
                      <img
                        alt={props.usersThreeAlt}
                        src={props.usersThreeSrc}
                        className="numbersurbanrenewal-users-three"
                      />
                      <span className="numbersurbanrenewal-text17">
                        <span>בעלי דירות שותפים</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <img
                alt={props.starsAlt}
                src={props.starsSrc}
                className="numbersurbanrenewal-stars"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .numbersurbanrenewal-numbersurbanrenewal {
            gap: 50px;
            width: 100%;
            height: auto;
            display: flex;
            padding: 130px 0 50px;
            overflow: hidden;
            position: relative;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-carasso-backgroundcolor);
          }
          .numbersurbanrenewal-container {
            gap: 60px;
            display: flex;
            padding: 0 90px;
            z-index: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .numbersurbanrenewal-center {
            gap: 70px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .numbersurbanrenewal-text {
            color: var(--dl-color-carasso-primaryblack);
            width: 563px;
            height: auto;
            font-size: 50px;
            font-style: Light;
            text-align: right;
            font-family: 'Ploni ML v2 AAA';
            font-weight: 300;
            line-height: 110%;
            font-stretch: normal;
            text-decoration: none;
          }
          .numbersurbanrenewal-text01 {
            font-weight: 300;
          }
          .numbersurbanrenewal-text02 {
            font-weight: 700;
          }
          .numbersurbanrenewal-numbersstars {
            gap: 56px;
            display: flex;
            padding: 0 40px;
            align-items: center;
          }
          .numbersurbanrenewal-bignumbers {
            gap: 70px;
            width: 636px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .numbersurbanrenewal-numberrowcontainer {
            gap: 70px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .numbersurbanrenewal-bignumberblock {
            gap: 30px;
            width: 283px;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .numbersurbanrenewal-numbertext {
            gap: 20px;
            display: flex;
            align-items: flex-end;
          }
          .numbersurbanrenewal-vector {
            width: 15px;
            height: 15px;
            box-sizing: content-box;
          }
          .numbersurbanrenewal-text03 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 80px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .numbersurbanrenewal-bignumbertitleandicon {
            gap: 37px;
            display: flex;
            padding: 9px 0 0;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(115, 119, 123, 1);
            border-style: solid;
            border-width: 0.5px 0 0;
            justify-content: space-between;
          }
          .numbersurbanrenewal-frame {
            width: 19px;
            height: 24px;
          }
          .numbersurbanrenewal-text05 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .numbersurbanrenewal-bignumberblock1 {
            gap: 30px;
            width: 283px;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .numbersurbanrenewal-numbertext1 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
          }
          .numbersurbanrenewal-vector1 {
            width: 15px;
            height: 15px;
            box-sizing: content-box;
          }
          .numbersurbanrenewal-text07 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 80px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .numbersurbanrenewal-bignumbertitleandicon1 {
            gap: 37px;
            display: flex;
            padding: 9px 0 0;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(115, 119, 123, 1);
            border-style: solid;
            border-width: 0.5px 0 0;
            justify-content: space-between;
          }
          .numbersurbanrenewal-buildingsicon {
            width: 24px;
            height: 24px;
          }
          .numbersurbanrenewal-text09 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            flex-grow: 1;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .numbersurbanrenewal-numberrowcontainer1 {
            gap: 70px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .numbersurbanrenewal-bignumberblock2 {
            gap: 30px;
            width: 283px;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .numbersurbanrenewal-numbertext2 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
          }
          .numbersurbanrenewal-vector2 {
            width: 15px;
            height: 15px;
            box-sizing: content-box;
          }
          .numbersurbanrenewal-text11 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 80px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .numbersurbanrenewal-bignumbertitleandicon2 {
            gap: 37px;
            display: flex;
            padding: 9px 0 0;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(115, 119, 123, 1);
            border-style: solid;
            border-width: 0.5px 0 0;
            justify-content: space-between;
          }
          .numbersurbanrenewal-frame1 {
            width: 24px;
            height: 24px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .numbersurbanrenewal-frame1261158145 {
            top: 2px;
            left: 1px;
            width: 22px;
            height: 20px;
            position: absolute;
          }
          .numbersurbanrenewal-text13 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .numbersurbanrenewal-bignumberblock3 {
            gap: 30px;
            width: 283px;
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
          }
          .numbersurbanrenewal-numbertext3 {
            gap: 20px;
            display: flex;
            align-items: flex-end;
          }
          .numbersurbanrenewal-vector3 {
            width: 15px;
            height: 15px;
            box-sizing: content-box;
          }
          .numbersurbanrenewal-text15 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 80px;
            font-style: Medium;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .numbersurbanrenewal-bignumbertitleandicon3 {
            gap: 37px;
            display: flex;
            padding: 9px 0 0;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(115, 119, 123, 1);
            border-style: solid;
            border-width: 0.5px 0 0;
            justify-content: space-between;
          }
          .numbersurbanrenewal-users-three {
            width: 24px;
            height: 24px;
          }
          .numbersurbanrenewal-text17 {
            color: var(--dl-color-carasso-primaryblack);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: right;
            font-family: Ploni ML v2 AAA;
            font-weight: 400;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .numbersurbanrenewal-stars {
            width: 88px;
            height: 296px;
          }
        `}
      </style>
    </>
  )
}

Numbersurbanrenewal.defaultProps = {
  vectorAlt3: 'Vector5030',
  vectorAlt: 'Vector5030',
  vectorSrc1: '/external/vector5030-csy.svg',
  frame1261158145Src: '/external/frame12611581455030-zkvw.svg',
  starsSrc: '/external/stars5030-ljg.svg',
  vectorAlt2: 'Vector5030',
  frameSrc: '/external/frame5030-mfrp.svg',
  starsAlt: 'stars5030',
  vectorSrc3: '/external/vector5030-lub.svg',
  vectorSrc2: '/external/vector5030-x3zf.svg',
  vectorSrc: '/external/vector5030-gx13.svg',
  buildingsiconAlt: 'buildingsicon5030',
  usersThreeAlt: 'UsersThree5030',
  usersThreeSrc: '/external/usersthree5030-kv9a.svg',
  frameAlt: 'Frame5030',
  buildingsiconSrc: '/external/buildingsicon5030-9de.svg',
  frame1261158145Alt: 'Frame12611581455030',
  vectorAlt1: 'Vector5030',
}

Numbersurbanrenewal.propTypes = {
  vectorAlt3: PropTypes.string,
  vectorAlt: PropTypes.string,
  vectorSrc1: PropTypes.string,
  frame1261158145Src: PropTypes.string,
  starsSrc: PropTypes.string,
  vectorAlt2: PropTypes.string,
  frameSrc: PropTypes.string,
  starsAlt: PropTypes.string,
  vectorSrc3: PropTypes.string,
  vectorSrc2: PropTypes.string,
  vectorSrc: PropTypes.string,
  buildingsiconAlt: PropTypes.string,
  usersThreeAlt: PropTypes.string,
  usersThreeSrc: PropTypes.string,
  frameAlt: PropTypes.string,
  buildingsiconSrc: PropTypes.string,
  frame1261158145Alt: PropTypes.string,
  vectorAlt1: PropTypes.string,
}

export default Numbersurbanrenewal
