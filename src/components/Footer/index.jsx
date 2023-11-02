import React from "react";

import { Img, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center ml-[149px] mr-[47px] mt-[66px] w-[86%]">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex flex-col items-start justify-start">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                <Img
                  className="h-[50px]"
                  src="images/img_group642.svg"
                  alt="group642"
                />
                <div className="flex sm:flex-1 flex-row items-center justify-between sm:mt-0 mt-[25px] w-[47%] sm:w-full">
                  <div className="h-[258px] relative w-[29%]">
                    <div className="absolute flex flex-col gap-[50px] h-full inset-[0] items-start justify-center m-auto w-full">
                      <Text
                        className="text-white-A700 text-xl tracking-[4.00px]"
                        size="txtSourceSansProBold20WhiteA700"
                      >
                        ABOUT
                      </Text>
                      <ul className="flex flex-col gap-[30px] items-start justify-start w-full common-column-list">
                        <li>
                          <Text
                            className="text-lg text-white-A700 tracking-[0.90px]"
                            size="txtSourceSansProSemiBold18"
                          >
                            About
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="text-lg text-white-A700 tracking-[0.90px]"
                            size="txtSourceSansProSemiBold18"
                          >
                            What we do
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="text-lg text-white-A700 tracking-[0.90px]"
                            size="txtSourceSansProSemiBold18"
                          >
                            Works
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="text-lg text-white-A700 tracking-[0.90px]"
                            size="txtSourceSansProSemiBold18"
                          >
                            Testimonial
                          </Text>
                        </li>
                      </ul>
                    </div>
                    <Line className="absolute bg-deep_orange-A100 h-0.5 left-[0] top-[14%] w-[45%]" />
                  </div>
                  <div className="flex flex-col gap-[37px] items-start justify-start w-[38%]">
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-white-A700 text-xl tracking-[4.00px]"
                        size="txtSourceSansProBold20WhiteA700"
                      >
                        FOLLOW US
                      </Text>
                      <Line className="bg-deep_orange-A100 h-0.5 w-[34%]" />
                    </div>
                    <ul className="flex flex-col items-start justify-start md:w-full common-column-list">
                      <li>
                        <Text
                          className="text-lg text-white-A700 tracking-[0.90px]"
                          size="txtSourceSansProSemiBold18"
                        >
                          Dribbble
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="mt-8 text-lg text-white-A700 tracking-[0.90px]"
                          size="txtSourceSansProSemiBold18"
                        >
                          Instagram
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="mt-[27px] text-lg text-white-A700 tracking-[0.90px]"
                          size="txtSourceSansProSemiBold18"
                        >
                          Behance
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="mt-[29px] text-lg text-white-A700 tracking-[0.90px]"
                          size="txtSourceSansProSemiBold18"
                        >
                          Pinterest
                        </Text>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Text
                className="mt-1 text-[15px] text-white-A700"
                size="txtSourceSansProBold15"
              >
                Oracle Brand - All Rights Reserved
              </Text>
            </div>
            <Img
              className="h-[311px] md:mt-0 mt-[120px]"
              src="images/img_group710.svg"
              alt="group710"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
