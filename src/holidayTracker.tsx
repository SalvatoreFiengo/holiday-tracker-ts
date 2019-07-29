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
  weekIsSelected:boolean
};

class HolidayTracker extends React.Component<IProps,IState> {
    
  constructor(props:IProps){
    super(props)
  
    this.state={
      user: [usersMock],
      dates: dates,
      weeks: dates.weeksByMonth(dates.firstLastDayOfMonth(1),dates.firstLastDayOfMonth(),true),
      selectedWeek: [],
      weekIsSelected:false
    }
  };
  
  render(){

    let updateWeeks=(n?:number)=>{
      const weeks= this.state.dates.weeksByMonth;
      const month = dates.firstLastDayOfMonth;
      if(n!== undefined){
        this.setState({
          selectedWeek:weeks(month(1),month(),false,n),
          weekIsSelected:true
        })
      }else{
        this.setState({
          selectedWeek:weeks(month(1),month(),true),
          weekIsSelected:false
        })       
      }
    }
    return (
      <div>
        <header>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Holiday Tracker</NavbarBrand>
            <Nav className="w-50 pr-5" navbar pills>
              <NavItem className="mx-auto">
                  <NavLink href="#">
                      Home
                  </NavLink>
              </NavItem>
              <NavItem className="mx-auto">
                  <NavLink href="#">
                      New
                  </NavLink>
              </NavItem>
              <NavItem className="mx-auto">
                  <NavLink href="#">
                      Credits
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
              <Button onClick={()=>updateWeeks()}>all weeks</Button>
            </Col>
          </Row> 
          <Row>
            <Col md="8">
              <HolidayTableComponent user={this.state.user} date={dates.firstLastDayOfMonth().toString()}/> 
            </Col>
            <Col md="4">
              <Row>
              {this.state.weeks.map((week,i)=>{
              return(
                <Col md="4" key={i}> 
                  <Card>
                    {this.state.weekIsSelected? this.state.selectedWeek:week}
                  </Card>
                </Col>
                )
              })}
              </Row>
            </Col>
          </Row>
        </section>
      </div>
    );
  }
}
export default HolidayTracker;
