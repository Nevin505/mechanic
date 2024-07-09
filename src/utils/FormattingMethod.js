export const formatTime = (time) => {
    const date = new Date(time);
    const formatedTime =
      date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    return formatedTime;
  };
  
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
