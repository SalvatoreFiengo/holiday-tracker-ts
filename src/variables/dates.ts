import Idates from '../interfaces/Idates';

const dates:Idates={
    now: new Date(),
    yearStart: new Date(),
    yearEnd: new Date(),
    firstLastDayOfMonth: ()=>new Date(),
    weeksByMonth: ()=>[]
}
dates.yearStart=new Date(dates.now.getFullYear(),0,1);
dates.yearEnd=new Date(dates.now.getFullYear(),12,0)
dates.firstLastDayOfMonth=(choice?:number, month?:number,year?:number):Date=>{
    const chosenYear:number|undefined = year || dates.now.getFullYear()
    const day:number|undefined = choice || 0;
    const chosenMonth:number|undefined= month || dates.now.getMonth()+1
    
    let result:Date;
    result= new Date(chosenYear, chosenMonth, day)

    return result;
  }
dates.weeksByMonth=(dateFirst:Date, dateSecond:Date, all:boolean|undefined=false,n?:number|undefined):number[] =>{
    const start:number= dateFirst.getDate();
    const end:number = dateSecond.getDate();
    let month:number[]=[];
    let week:number[]=[]
    let weeks:[number[]]=[[]]
    for(let i=start; i<=end; i++){
      month.push(i);
      if(i%7!==0){
        week.push(i);
      }else{
        weeks.push(week);
        week.push(i);
        week=[];
      }
    }
    if(all){
      return month;
    }else if(typeof(n)=== "number" && n>0){

      return weeks[n];
    }else{
      n=1
      console.log(month)
      return weeks[n];

    }
  }
export default dates;