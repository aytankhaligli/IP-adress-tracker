import { useEffect, useState } from "react";
import bgImage from "./assets/images/pattern-bg.png";
import Result from "./components/Result";
import Searchbar from "./components/Searchbar";
import Map from "./components/Map";

function App() {
  const [address, setAddress] = useState(null);
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${
            import.meta.env.VITE_API_KEY
          }&ipAddress=${ipAddress}`
        );
        const data = await res.json();
        setAddress(data);
      };
      getData();
    } catch (error) {}
  }, [ipAddress]);

  return (
    <div className="relative flex flex-col  h-screen w-screen">
      <div className="w-full absolute -z-10">
        <img
          src={bgImage}
          alt="background blue pattern image"
          className="h-80 top-0  "
        />
      </div>
      <h1 className="text-3xl text-white mt-6 lg:text-4xl text-center ">
        IP Address Tracker
      </h1>

      <Searchbar ipAddress={ipAddress} setIpAddress={setIpAddress} />
      {address && !address?.code && <Result address={address} />}
      {address && !address?.code && <Map address={address} />}
      {address?.code && (
        <div className="flex items-center justify-center">
          <p className="text-lg absolute top-96 text-red-700 lg:text-3xl ">{`Error ${address.code}: ${address.messages}`}</p>
        </div>
      )}
    </div>
  );
}
export default App;
