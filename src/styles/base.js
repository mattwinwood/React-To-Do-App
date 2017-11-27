import * as colors from './colors';
import * as fonts from './fonts';
import './bootstrap.css';

const base = `
  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font-family: ${fonts.LATO};
    background: ${colors.WHITE};
  }
  ul.list-group {
    margin-bottom: 50px;
  }
  .todo-desc {
    display: inline-block;
    color: #888;
    cursor: pointer;
  }
  h2 {

  }
  .list-group-item {
    padding-left: 0px;
    cursor: pointer;
  }
  .alert.not_started {
    display: block;
  }
  .alert, .alert.complete {
    display: none;
  }
  .todo-desc {
    color: #333;
   }
  .circle {
    width: 15px;
    cursor: pointer;
    height: 15px;
    float: left;
    display: block;
    margin: 0 10px;
    margin-top: 5px;
    border-radius: 100%;
    color: black;
    border: 1px solid #ff4d4d;
  }
  .circle.active:hover, .list-group-item:hover .circle.active {
    background: rgba(255, 77, 77, 0.3);
  }
  .circle.complete:hover, .list-group-item:hover .circle.complete{
    background: white;
  }
  .circle.active {
    background: #fff;
    border: 1px solid #ff4d4d;
  } 
  .circle.complete {
    background: #888;
    border: 1px solid #888;
  }
`;

export default base;
