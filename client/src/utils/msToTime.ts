const padTo2Digits = (num: number): string => {
  return num.toString().padStart(2, '0');
};

export const convertMsToTime = (ms: number): string => {
  let seconds: number = Math.floor(ms / 1000);
  let minutes: number = Math.floor(seconds / 60);
  let hours: number = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  // hours = hours % 24;

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
    seconds
  )}`;
};
