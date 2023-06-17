var div1 = React.createElement("div", { className: "div1" }, [
  React.createElement(
    "div",
    { id: "nestedDiv", style: { color: "red", margin: "20px" } },
    [React.createElement("h1", { id: "title" }, "this is my heading")]
  ),
]);

var div2 = React.createElement("div", { id: "div2" }, [
  React.createElement("h2", { id: "subHeading" }, "this is my sub-heading"),
  React.createElement("h2", { id: "subHeading2" }, "this is my sub-heading2"),
]);
var root = ReactDOM.createRoot(document.getElementById("root"));

root.render([div1, div2]);


