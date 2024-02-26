const heading = React.createElement('h1', {},"hello world from react")
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)


const div= React.createElement("div",{id : "div1"},
[ React.createElement("div",{id : "div2"},"chil2" ),
React.createElement("div",{id : "div3"},"chil2")])
root.render(div)


console.log(heading);