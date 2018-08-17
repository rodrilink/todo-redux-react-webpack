import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        dispatch(addTodo(input.value, getDate()));
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};

let getDate = () => {
  const date = new Date();

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hour = date.getHours();

  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }

  return day + '/' + month + '/' + year + ' ' + hour + ':' + minutes + ':' + seconds ;
}
export default connect()(AddTodo);