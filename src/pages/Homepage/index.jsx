import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const HomepagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-altehaasgrotesk sm:gap-10 md:gap-10 gap-[133px] items-center justify-end mx-auto pr-5 pt-5 w-full">
        <div className="md:h-[410px] h-[901px] max-w-[1400px] mt-[19px] mx-auto md:px-5 relative w-full">
          <div className="absolute md:h-[391px] h-[901px] inset-[0] justify-center m-auto w-full">
            <Text
              className="absolute backdrop-opacity-[0.5] blur-[4.00px] h-max inset-y-[0] my-auto right-[0] md:text-5xl text-[300px] text-black-900 text-center"
              size="txtAlteHaasGrotesk300"
            >
              REEL
            </Text>
            <Text
              className="absolute left-[0] md:text-5xl text-[320px] text-black-900 text-center top-[0]"
              size="txtAlteHaasGroteskBold320"
            >
              A
            </Text>
            <Text
              className="absolute bottom-[0] left-[0] md:text-5xl text-[300px] text-black-900 text-center tracking-[-14.50px]"
              size="txtAlteHaasGroteskBold300"
            >
              BOARD
            </Text>
            <div className="absolute bottom-[8%] flex flex-col items-center justify-start right-[1%]">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                size="txtAlteHaasGroteskBold30"
              >
                home . 2023
              </Text>
              <Text
                className="mt-1 text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                size="txtAlteHaasGrotesk30"
              >
                <span className="text-black-900 font-altehaasgrotesk font-bold">
                  11 955{" "}
                </span>
                <span className="text-white-A700 font-altehaasgrotesk font-bold">
                  login
                </span>
                <span className="text-black-900 font-altehaasgrotesk font-normal">
                  {" "}
                </span>
                <span className="text-black-900 font-altehaasgrotesk font-bold">
                  12
                </span>
              </Text>
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                size="txtAlteHaasGroteskBold30"
              >
                <span className="text-black-900 font-altehaasgrotesk font-bold">
                  129 23 . .
                </span>
                <span className="text-white-A700 font-altehaasgrotesk font-bold">
                  about
                </span>
                <span className="text-black-900 font-altehaasgrotesk font-bold">
                  {" "}
                </span>
              </Text>
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                size="txtAlteHaasGroteskBold30"
              >
                <>2023 . &gt;&gt;&gt;</>
              </Text>
              <Text
                className="mt-3.5 md:text-5xl text-[70px] text-black-900 text-center tracking-[-14.50px]"
                size="txt3Of9Barcode70"
              >
                wbite sosmam
              </Text>
            </div>
          </div>
          <Text
            className="absolute bottom-[20%] right-[1%] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
            size="txtAlteHaasGroteskBold30"
          >
            ABOUT
          </Text>
          <div className="absolute bottom-1/4 flex flex-row gap-[23px] items-start justify-center right-[10%] w-[15%]">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-center text-red-400"
              size="txtAlteHaasGroteskBold30Red400"
            >
              HOME
            </Text>
            <Text
              className="mt-[33px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
              size="txtAlteHaasGroteskBold30"
            >
              LOGIN
            </Text>
          </div>
          <div className="absolute bottom-[16%] flex flex-col items-center justify-start right-[1%] w-[24%]">
            <div className="flex flex-col justify-start w-full">
              <div className="flex flex-row gap-[23px] items-start justify-start mr-[115px] w-[65%] md:w-full">
                <Text
                  className="mb-9 text-3xl sm:text-[26px] md:text-[28px] text-center text-red-400"
                  size="txtAlteHaasGroteskBold30Red400"
                >
                  HOME
                </Text>
                <Text
                  className="mt-9 text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                  size="txtAlteHaasGroteskBold30"
                >
                  LOGIN
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[214px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                size="txtAlteHaasGroteskBold30"
              >
                ABOUT
              </Text>
              <Text
                className="md:ml-[0] ml-[75px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                size="txtAlteHaasGroteskBold30"
              >
                CONTACT
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[52px] items-center justify-start max-w-[1180px] mx-auto md:px-5 w-full">
          <div className="backdrop-opacity-[0.5] blur-[4.00px] flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <Text
              className="md:text-5xl text-[100px] text-black-900"
              size="txtAlteHaasGroteskBold100"
            >
              meet the team
            </Text>
            <Text
              className="text-red-400_01 text-right text-xl"
              size="txtAlteHaasGroteskBold20"
            >
              View All
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-[39px] items-center justify-start w-[32%] md:w-full">
              <Img
                className="h-[460px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                src="images/img_rectangle16.png"
                alt="rectangleSixteen"
              />
              <div className="flex flex-col gap-[11px] items-center justify-start">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-800"
                  size="txtAlteHaasGroteskBold25"
                >
                  Emma Shen
                </Text>
                <Text
                  className="text-black-900_68 text-xl"
                  size="txtSourceSansProRegular20"
                >
                  <span className="text-black-900_68 font-sourcesanspro text-left font-normal">
                    {" "}
                  </span>
                  <span className="text-black-900_68 font-altehaasgrotesk text-left font-normal">
                    SCRUM Master
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[35px] items-center justify-start w-[32%] md:w-full">
              <Img
                className="h-[460px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                src="images/img_rectangle15.png"
                alt="rectangleFifteen"
              />
              <div className="flex flex-col gap-[11px] justify-end py-1.5">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-800"
                  size="txtAlteHaasGroteskBold25"
                >
                  Ekamjot Kaire
                </Text>
                <Text
                  className="md:ml-[0] ml-[42px] mr-[55px] text-black-900_68 text-center text-xl"
                  size="txtAlteHaasGrotesk20"
                >
                  DevOps
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[32%] md:w-full">
              <div className="flex flex-col gap-[42px] items-center justify-start w-full">
                <Img
                  className="h-[460px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/img_rectangle17.png"
                  alt="rectangleSeventeen"
                />
                <div className="flex flex-col gap-[11px] items-center justify-start">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-800"
                    size="txtAlteHaasGroteskBold25"
                  >
                    Aliya Tang
                  </Text>
                  <Text
                    className="text-black-900_68 text-center text-xl"
                    size="txtAlteHaasGrotesk20"
                  >
                    Backend Developer
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-sourcesanspro md:gap-10 gap-[392px] items-start max-w-[1419px] mx-auto pr-[109px] md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-[41px] items-center justify-start md:ml-[0] ml-[94px] w-[91%] md:w-full">
            <div className="bg-white-A700 flex flex-col gap-[23px] justify-end md:mt-0 mt-[15px] p-[31px] sm:px-5 rounded-[20px] shadow-bs1 w-[66%] md:w-full">
              <div className="flex flex-col gap-[23px] items-center justify-start md:ml-[0] ml-[81px] mr-[59px] mt-[41px] w-[81%] md:w-full">
                <Input
                  name="groupTwo"
                  placeholder="Send Message"
                  className="font-bold leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-left text-xl w-full"
                  wrapClassName="pr-[35px] w-full"
                ></Input>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[38px] items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-full">
                      <Text></Text>
                      <Text></Text>
                    </div>
                    <div className="bg-gray-100 flex flex-col items-start justify-start p-[19px] rounded-[5px] w-full">
                      <Text
                        className="mb-[149px] mt-[7px] text-base text-gray-400"
                        size="txtSourceSansProBold16"
                      >
                        Your Message
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[182px] md:ml-[0] ml-[147px] mr-[386px]"
                rightIcon={
                  <Img
                    className="h-[18px] mt-[5px] mb-[3px] ml-[13px]"
                    src="images/img_send.svg"
                    alt="send"
                  />
                }
              >
                <div className="leading-[normal] text-left text-xl">Send</div>
              </Button>
            </div>
            <div className="bg-white-A700 flex flex-col items-start justify-center mb-3 p-[33px] sm:px-5 rounded-[20px] shadow-bs1 w-[32%] md:w-full">
              <div className="flex flex-col gap-[30px] items-center justify-start mb-9 mt-[43px] w-[90%] md:w-full">
                <div className="flex flex-col gap-[33px] items-start justify-start w-[98%] md:w-full">
                  <Input
                    name="group762"
                    placeholder="Contact Information"
                    className="font-bold leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-left text-xl w-full"
                    wrapClassName="pr-[35px] w-full"
                    size="sm"
                  ></Input>
                  <div className="flex flex-col gap-[29px] items-start justify-start ml-1 md:ml-[0] w-[92%] md:w-full">
                    <div className="flex flex-row gap-[25px] items-start justify-start w-[74%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_frame666.svg"
                        alt="frame666"
                      />
                      <Text
                        className="mt-0.5 text-[17px] text-gray-400_01"
                        size="txtSourceSansProSemiBold17"
                      >
                        hello@nexus.com
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[25px] items-start justify-start w-[70%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_globe.svg"
                        alt="globe"
                      />
                      <Text
                        className="text-[17px] text-gray-400_01"
                        size="txtSourceSansProSemiBold17"
                      >
                        www.nexus.com
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[25px] items-start justify-start w-full">
                      <Img
                        className="h-6 mt-[3px] w-6"
                        src="images/img_location.svg"
                        alt="location"
                      />
                      <Text
                        className="sm:flex-1 text-[17px] text-gray-400_01 w-4/5 sm:w-full"
                        size="txtSourceSansProSemiBold17"
                      >
                        Sudirman street, holgan, melbourne
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[25px] items-start justify-start w-[54%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_call.svg"
                        alt="call"
                      />
                      <Text
                        className="text-[17px] text-gray-400_01"
                        size="txtSourceSansProSemiBold17"
                      >
                        0361 - 8878
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[41px] justify-start w-full">
                  <div className="flex flex-col gap-6 items-start justify-start mr-2 w-[98%] md:w-full">
                    <Text
                      className="text-gray-600 text-xl"
                      size="txtSourceSansProBold20"
                    >
                      Social Media
                    </Text>
                    <Line className="bg-gray-200 h-px w-full" />
                  </div>
                  <div className="flex flex-row gap-[19px] items-center justify-end md:ml-[0] ml-[31px] w-[89%] md:w-full">
                    <Img
                      className="h-[47px] md:h-auto object-cover w-[47px]"
                      src="images/img_group270.png"
                      alt="group270"
                    />
                    <Img
                      className="h-[47px] md:h-auto object-cover w-[47px]"
                      src="images/img_group271.png"
                      alt="group271"
                    />
                    <Img
                      className="h-[47px] md:h-auto object-cover w-[47px]"
                      src="images/img_group268.png"
                      alt="group268"
                    />
                    <Img
                      className="h-[47px] md:h-auto object-cover w-[47px]"
                      src="images/img_group269.png"
                      alt="group269"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-gray-800_01 flex items-center justify-center rounded-tr-[50px] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center ml-[148px] mr-[47px] mt-[91px] w-[86%]">
              <Text
                className="text-[15px] text-white-A700"
                size="txtSourceSansProBold15"
              >
                A-REEL - All Rights Reserved
              </Text>
              <div className="flex flex-row items-center justify-between md:ml-[0] ml-[227px] w-[33%] md:w-full">
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
              <Img
                className="h-[311px] md:ml-[0] ml-[77px] md:mt-0 mt-[94px]"
                src="images/img_group710.svg"
                alt="group710"
              />
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
