export default interface Idates{
    now:Date,
    yearStart:Date,
    yearEnd:Date,
    firstLastDayOfMonth:(choice?:number, month?:number,year?:number)=>Date,
    weeksByMonth:(dateFirst:Date,dateSecond:Date,all:boolean|undefined,n?:number)=> number[]
}