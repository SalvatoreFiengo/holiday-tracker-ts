import React from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink, Row, Col, Card, Button} from 'reactstrap';

import Iuser from './interfaces/Iusers';
import Idates from './interfaces/Idates';

import HolidayTableComponent from './components/holidayTableComponent';
import dates from './variables/dates';
import usersMock from './variables/usersMock';



interface IProps{}
interface IState {
  user:[Iuser],
  dates:Idates,
  weeks:number[],
  selectedWeek: number[],
  weekIsSelected:boolean,
  selectedMonth:number,
  count:number
};

class HolidayTracker extends React.Component<IProps,IState> {
    
  constructor(props:IProps){
    super(props)
  
    this.state={
      user: [usersMock],
      dates: dates,
      weeks: dates.weeksByMonth(dates.firstLastDayOfMonth(1),dates.firstLastDayOfMonth(0),true),
      selectedWeek: dates.weeksByMonth(dates.firstLastDayOfMonth(1,dates.now.getMonth()),dates.firstLastDayOfMonth(0,dates.now.getMonth()),true),
      weekIsSelected: false,
      selectedMonth:  dates.now.getMonth(),
      count:dates.now.getMonth()
    }
  };
  
  render(){
    let prev=(count:number)=>{
      let counter=count;
      counter--
      console.log(counter)
      if(counter<=0)counter=0
      this.setState({
        count:counter,
        selectedMonth:counter
      },()=>updateWeeks(0,this.state.selectedMonth))
      
    }
    let next=(count:number)=>{
      let counter=count;
      counter++
      console.log(counter)
      if(counter>=12)counter=12
      this.setState({
        count:counter,
        selectedMonth:counter
      },()=>updateWeeks(0,counter))
      
    }
    let updateWeeks=(n:number,count:number)=>{
      const weeks= dates.weeksByMonth;
      const month = dates.firstLastDayOfMonth;
      console.log(month(1,this.state.selectedMonth-1)+" "+month(0,this.state.selectedMonth))
      if(n!==0 && count>=0){
        this.setState({
          selectedWeek:weeks(month(1,count-1),month(0,count),false,n),
          weekIsSelected:true
        })
      }else if(n===0 && count>=0){
        this.setState({
          selectedWeek:weeks(month(1,count-1),month(0,count),true),
          weekIsSelected:false
        })       
      }else{
        count=0;
        return
      }

      console.log("state"+this.state.count)
    }
    return (
      <div>
        <header>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Holiday Tracker</NavbarBrand>
            <Nav className="w-50 pr-5" navbar pills>
              <NavItem className="mx-auto">
                  <NavLink href="#">
                      HOME
                  </NavLink>
              </NavItem>
              <NavItem className="mx-auto">
                  <NavLink href="#">
                      NEW
                  </NavLink>
              </NavItem>
              <NavItem className="mx-auto">
                  <NavLink href="#">
                      CREDITS
                  </NavLink>
              </NavItem>
              <NavItem className="mx-auto">
                  <NavLink href="#">
                      Credits
                  </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </header>
        <section className="mt-5">
          <Row>
            <Col>
              <Button >all weeks</Button>
            </Col>
          </Row> 
          <Row>
            <Col md="8">
              <HolidayTableComponent prev={(count)=>prev(count)} next={next} count={this.state.selectedMonth} month={dates.months[this.state.selectedMonth-1]} user={this.state.user} date={dates.firstLastDayOfMonth().toString()}/> 
            </Col>
            <Col md="4">
              <Row>
                <Col md="12">
                  <Card>
                    <Row> 
                      {this.state.selectedWeek.map((chose,i)=>{
                      return(
                        <Col md="3" key={i}>
                          <Card>
                            {chose}
                          </Card>
                        </Col>
                        )
                      })}
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </div>
    );
  }
}
export default HolidayTracker;
