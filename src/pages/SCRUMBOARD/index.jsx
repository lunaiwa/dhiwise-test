import React from "react";

import { Img, Line, Text } from "components";
import Footer from "components/Footer";

const SCRUMBOARDPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-altehaasgrotesk sm:gap-10 md:gap-10 gap-[2537px] justify-end mx-auto md:pr-10 sm:pr-5 pr-[97px] pt-[97px] w-full">
        <div className="flex flex-col items-center mt-[37px] md:pl-10 sm:pl-5 pl-[97px] w-full">
          <div className="flex flex-col justify-start">
            <Text
              className="backdrop-opacity-[0.5] blur-[4.00px] md:ml-[0] ml-[806px] md:text-5xl text-[90px] text-black-900 text-center"
              size="txtAlteHaasGroteskBold90"
            >
              CONTACT
            </Text>
            <Text
              className="backdrop-opacity-[0.5] blur-[4.00px] mt-[18px] md:text-5xl text-[90px] text-black-900 text-center"
              size="txtAlteHaasGroteskBold90"
            >
              HOME
            </Text>
            <Text
              className="backdrop-opacity-[0.5] blur-[4.00px] md:ml-[0] ml-[412px] mt-10 md:text-5xl text-[90px] text-black-900 text-center"
              size="txtAlteHaasGroteskBold90"
            >
              ABOUT
            </Text>
            <Text
              className="backdrop-opacity-[0.5] blur-[4.00px] md:ml-[0] ml-[699px] mt-[133px] md:text-5xl text-[90px] text-black-900 text-center"
              size="txtAlteHaasGroteskBold90"
            >
              LOGIN
            </Text>
          </div>
        </div>
        <Footer className="bg-gray-800_01 flex font-sourcesanspro items-center justify-center mr-[33px] md:px-5 rounded-tr-[50px] w-full" />
      </div>
    </>
  );
};

export default SCRUMBOARDPage;
