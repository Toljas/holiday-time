//timeCelebration =[YYYY, M, D]
//M = 0 for January, 1 for February...
function timeToHolidays(timeCelebration, nameCelebration) {
  const now = new Date();
  const holiday = new Date(timeCelebration[0],timeCelebration[1], timeCelebration[2]);
  const diff = holiday.getTime() - now.getTime();
  console.log(`There are
  ${Math.trunc(diff/(1000*3600*24))} days
  ${Math.trunc((diff/(1000*3600*24)-Math.trunc(diff/(1000*3600*24)))*24)} hours
  ${Math.trunc((diff/(1000*3600)-Math.trunc(diff/(1000*3600)))*60)} minutes
  ${Math.trunc((diff/(1000*60)-Math.trunc(diff/(1000*60)))*60)} seconds
  ${Math.trunc((diff/(1000)-Math.trunc(diff/(1000)))*1000)} milliseconds
to ${nameCelebration}`);
}
timeToNewYear([2018, 1, 15],`Anniversary 1 year`);
