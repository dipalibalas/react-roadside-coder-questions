function Counter(){
    const [counter,setCounter] = React.useState(0);

    const handleClick = () =>{
        setCounter(counter => counter+1);
    }

    return React.createElement(
        "div",
        null,
        React.createElement("p",null,`Count: ${counter}`),
        React.createElement("button",{onClick:handleClick},`Increment`)
    )
}

const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(Counter))