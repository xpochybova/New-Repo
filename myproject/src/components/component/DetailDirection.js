import React from 'react';
import PropTypes from 'prop-types';

function createListItems(dir){
    let i=1;
    dir.shift();
    return dir.map((riadok)=>{
      if(riadok.includes("*")){
        return(
          <p key={i} > {i++}{')'} { bold(riadok)} </p>
        );
      } else if(riadok.includes("_")){
        return(
          <p key={i} > {i++}{')'} { ital(riadok)} </p>
        );
      } else{
        return(
        <p key={i} > {i++}) {riadok}</p>
        );
      }
    });
}

function bold(string){
  let i=0;

    return string.split("*").map(s=>{
      i++;
     if( i%2 === 0 ){
       return(
         <b key={i}> {s} </b>
       );
      } else{
        return(
          <span key={i}> {s} </span>)
        }
    });
}

function ital(string){
  let i=0;
    return string.split("_").map(s=>{
      i++;
     if( i%2 === 0 ){
       return(
         <i key={i}> {s} </i>
       );
      } else{
        return(
          <i key={i}> {s} </i>)
        }
    });
}


function DetailDirection(props) {
const wellStyles = {padding: '10px',margin: '10px', fontSize: 16, border: '1px solid grey', borderRadius: '5px'};


  return (
    <div style={wellStyles}>
        {createListItems(props.all.directions.split("*)"))}
  </div>
  );

}

DetailDirection.propTypes = {
  all: PropTypes.object,
};

export default DetailDirection;
