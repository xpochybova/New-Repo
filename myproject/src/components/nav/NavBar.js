import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectRecipe} from '../actions/index';
import { Navbar, NavItem, Nav, MenuItem, NavDropdown} from 'react-bootstrap';

class NavBar extends Component{
createNav(){
  return this.props.recipes.map((r)=>{
  return(
    <MenuItem
        key={r.id}
        eventKey={r.id}
        href="#"
        onClick={()=>this.props.selectRecipe(r)}
    >
       {r.title}
    </MenuItem>
  );

});
}

  render(){
   return(
      <Navbar>
        <Nav>
         <NavItem eventKey={1} href="/login/"> LogIn </NavItem>
          <NavDropdown eventKey={2} title="Recepty" id="basic-nav-dropdown">
           {this.createNav()}
          </NavDropdown>
        </Nav>
     </Navbar>
    );
  }

}

function mapStateToProps(state){
  return{
    recipes: state.recipes
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    selectRecipe: selectRecipe}, dispatch)
  }

export default connect(mapStateToProps, matchDispatchToProps)(NavBar);
