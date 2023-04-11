const heading = React.createElement("h1", {id:"heading"}, "Hello World From React!");

const parent = React.createElement(
    "div", {id:"parent"},
    React.createElement(
        "div", 
        {id:"child"},
        [React.createElement("h1", {}, "I'am H1 Tag Inside the tag"),React.createElement("h2", {}, "I'am H2 Tag Inside the tag")]
    )
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("roots"));
root.render(parent)