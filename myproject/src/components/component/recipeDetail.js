import React, {Component} from 'react';
import {connect} from 'react-redux';

import DetailDirection from './DetailDirection';
import RecipeDetailIngredients from './RecipeDetailIngredients';
import { Grid, Row, Col} from 'react-bootstrap';

class RecipeDetail extends Component{
  render(){

    if(!this.props.recept.title){
       return(<div> </div>)

    } else{
      return(
        <div>
          <h2> {this.props.recept.title}
            <br />
          </h2>
          <p>
            Príprava: <b>{this.props.recept.preparationTime} min</b>,
            Porcie: <b>{this.props.recept.servingCount} </b>
          </p>

          <Grid>
            <Row className="show-grid">
              <Col xs={6} md={4}>
                <h4>Potrebujeme: </h4>
                  <RecipeDetailIngredients
                    ingredients={this.props.recept.ingredients}
                  />
              </Col>
            <Col xs={12} md={8}>

              <h4>Postup: </h4>
                <DetailDirection
                  all={this.props.recept}
                />
            </Col>
          </Row>
        </Grid>
      </div>
     )
    }
 }
}

function mapStateToProps(state){
  return{
    recept: state.activeRecipe,
  }
}

export default connect(mapStateToProps)(RecipeDetail);
