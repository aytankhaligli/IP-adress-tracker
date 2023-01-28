import React from "react";

export default function Result({ address }) {
  return (
    <div className="flex  justify-center ">
      <div className="mt-5 h-fit p-4 w-96 mx-4 bg-white rounded-2xl flex flex-col items-center justify-center gap-5 lg:flex-row  lg:min-w-fit lg:p-10  lg:mt-16 lg:gap-10 z-50 ">
        <div className="text-center lg:text-left lg:border-r-2 lg:pr-16 ">
          <p className="text-gray-400 uppercase tracking-widest font-semibold text-xs mb-1 lg:text-sm lg:font-medium">
            Ip address
          </p>
          <p className="text-xl lg:text-2xl">{address.ip}</p>
        </div>
        <div className="text-center lg:text-left lg:border-r-2 lg:pr-16">
          <p className="text-gray-400 uppercase tracking-widest font-semibold text-xs mb-1 lg:text-sm lg:font-medium">
            Location
          </p>
          <p className="text-xl lg:text-2xl">
            {address.location.city}, {address.location.region}
          </p>
        </div>
        <div className="text-center lg:text-left lg:border-r-2 lg:pr-16">
          <p className="text-gray-400 uppercase tracking-widest font-semibold text-xs mb-1 lg:text-sm lg:font-medium">
            Timezone
          </p>
          <p className="text-xl lg:text-2xl">UTC{address.location.timezone}</p>
        </div>
        <div className="text-center lg:text-left">
          <p className="text-gray-400 uppercase tracking-widest font-semibold text-xs mb-1 lg:text-sm lg:font-medium">
            isp
          </p>
          <p className="text-xl lg:text-2xl">{address.isp}</p>
        </div>
      </div>
    </div>
  );
}
