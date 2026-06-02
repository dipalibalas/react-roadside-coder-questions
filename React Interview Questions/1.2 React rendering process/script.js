function Counter(){
    const [counter,setCounter] = React.useState(0);

        console.log("Counter Rendered");
    const handleClick = () =>{
        setCounter(counter => counter+1); // syncronous type operation
        // setCounter(counter+1) // asynchronous type
    }

    return(
        <div>
            <p>Count:{counter}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

function CounterParent (){
    const [showMessage,setShowMessage] = React.useState(false);
      const [showMessage1,setShowMessage1] = React.useState(false);
        const [toggleCount,setToggleCount] = React.useState(false);

        console.log("Parent Rendered");

        const toggleMessages = () =>{
            setShowMessage(!showMessage);
            setShowMessage1(!showMessage1)
        }

        return(
            <div>
                {toggleCount ?<div> <h1>Counter</h1> <Counter /> </div>: <span><p>Counter off</p></span> }
                <button onClick={()=>setToggleCount(!toggleCount)}> Toggle Count</button>
               
                <br/>
                {showMessage && <b>Now you see me</b>}
                {showMessage1 && <b>Now you see me</b>}
                <button onClick={toggleMessages}>Show Message</button>
                <br/>
                <Framework />
            </div>
        )
}

const Framework = () =>{
    // const [framework,setFramework] = React.useState([
    //     "React","Angular"
    // ])
     const [framework,setFramework] = React.useState([
        {name:"React",id:123},{name:"Angular",id:678}
    ])

    return(
        <div>
            <h3>Popular Frameworks</h3>
            <div>
                {framework.map((item)=>(
                    <p key={item.id}>{item.name}</p>
                ))}
            </div>
            <button
            onClick={()=>setFramework([{name:"vue",id:334},...framework])}
            >Add New</button>
        </div>
    )
}

const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(CounterParent))