/** 
  Task 1: In the Vote box, add a downvote button to the right of Upvote.
  Task 2: The number in the red box indicates the number of total vote received. It should be incremented by 1 when Upvote is pressed and decremented by 1 when downvote is pressed.
  Task 3: Each button will remain in the pressed position after it is clicked. If it is clicked again, the vote will be canceled. For instance, if Upvote is clicked, then the total vote is 1, but if Upvote is clicked again, total vote becomes 0. Only one button can remain in the pressed position. For instance, if Upvote is pressed down and the vote is 1, when Downvote is clicked, Upvote will automatically bounce and Downvote will be pressed down. Total vote changes from 1 to -1. This guarantess that the vote can only have 3 possible values: -1, 0, and 1 
**/
function Vote() {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("div", null, "Vote"), /*#__PURE__*/
    React.createElement("button", null, "Upvote")));


}

function Credit() {
  const [value, setValue] = React.useState("0");

  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("div", null, "Total vote received:"), /*#__PURE__*/

    React.createElement("div", { className: "box-wrapper" }, value)), /*#__PURE__*/


    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement(Vote, null))));



}

ReactDOM.render( /*#__PURE__*/React.createElement(Credit, null), document.getElementById("root"));