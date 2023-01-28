import React from "react";

export default function Result({ address }) {
  return (
    <div className="flex  justify-center ">
      <div className="mt-5 h-80 w-96 bg-white rounded-2xl flex flex-col items-center justify-center gap-7 lg:flex-row  lg:min-w-fit lg:p-10  lg:mt-16 lg:gap-10 z-50 lg:h-fit">
        <div className="text-center lg:text-left lg:border-r-2 lg:pr-16 ">
          <h5 className="text-gray-400 uppercase tracking-widest font-semibold text-xs mb-2 lg:text-sm lg:font-medium">
            Ip address
          </h5>
          <p className="text-xl lg:text-2xl">{address.ip}</p>
        </div>
        <div className="text-center lg:text-left lg:border-r-2 lg:pr-16">
          <h5 className="text-gray-400 uppercase tracking-widest font-semibold text-xs mb-2 lg:text-sm lg:font-medium">
            Location
          </h5>
          <p className="text-xl lg:text-2xl">
            {address.location.city}, {address.location.region}
          </p>
        </div>
        <div className="text-center lg:text-left lg:border-r-2 lg:pr-16">
          <h5 className="text-gray-400 uppercase tracking-widest font-semibold text-xs mb-2 lg:text-sm lg:font-medium">
            Timezone
          </h5>
          <p className="text-xl lg:text-2xl">UTC{address.location.timezone}</p>
        </div>
        <div className="text-center lg:text-left">
          <h5 className="text-gray-400 uppercase tracking-widest font-semibold text-xs mb-2 lg:text-sm lg:font-medium">
            isp
          </h5>
          <p className="text-xl lg:text-2xl">{address.isp}</p>
        </div>
      </div>
    </div>
  );
}
