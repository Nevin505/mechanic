import { useEffect, useState } from "react";

const GREETINGS = ["Good Morning", "Good AfterNoon", "Good Evening"];

const TIMEPERIOD=["AM","PM"];

const getTime = () => {
  const time = new Date();
  let hour = time.getHours();
  const minute = time.getMinutes();
  if(hour>13){
    hour=hour-12;
    return `${hour} : ${minute} ${TIMEPERIOD[1]}` 
  }
  return `${hour} : ${minute} ${TIMEPERIOD[0]}`
};

const userName=sessionStorage.getItem('userName')

const GreetingBanner = () => {

  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const intervalTimeOut = setInterval(() => {
      const fromattedTime=getTime();
      setTime(fromattedTime);
    }, 60000);
    return () => {
      clearInterval(intervalTimeOut);
    };
  }, [time]);

  return <div className="flex  gap-4  w-full py-2 px-8  justify-between bg-gray-900 text-white">
    <p>Hello {userName || ''}</p>
    {time}
  </div>;
};

export default GreetingBanner;
