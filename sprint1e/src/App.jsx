// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [scorec,setScorec]=useState({Score: 76,
                                    Wicket: 2,
                                    Ball: 50}) ;
    const [winner,setWinner]=useState("");
    var a;
    var b;
    a=Math.floor(scorec.Ball/6);
    b=(scorec.Ball-(6*8))%6;
    console.log(b)
    var bag=a+"."+b;
    const [bags,setBag]=useState(bag); 
    
    function handlechanges(value)
    {
      scorec.Score=scorec.Score+value;
      if(scorec.Score>=100)
      {
        setWinner("India Won");
        return;
      }      
      setScorec({Score:scorec.Score,
                Wicket: scorec.Wicket,
                Ball: scorec.Ball})
    a=Math.floor(scorec.Ball/6);
    b=(scorec.Ball-(6*8))%6;
    console.log(b)
    var bag=a+"."+b;
    setBag(bag);
    }
    

    function handlechangew(value)
    {
      if(scorec.Score>=100)
      {
        setWinner("India Won");
        return;
      }   
      scorec.Wicket=scorec.Wicket+value;  
      if(scorec.Wicket>12)
      {
        return;
      }    
      setScorec({Score:scorec.Score,
                Wicket: scorec.Wicket,
                Ball: scorec.Ball})
      a=Math.floor(scorec.Ball/6);
                b=(scorec.Ball-(6*8))%6;
                console.log(b)
                var bag=a+"."+b;
                setBag(bag);
    }
    function handlechangeb(value)
    {   
      if(scorec.Score>=100)
      {
        setWinner("India Won");
        return;
      }       

      scorec.Ball=scorec.Ball+value;

      setScorec({Score:scorec.Score,
                Wicket: scorec.Wicket,
                Ball: scorec.Ball});

      a=Math.floor(scorec.Ball/6);
                b=(scorec.Ball-(6*8))%6;
                console.log(b)
                var bag=a+"."+b;
                setBag(bag);
    }
    

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              scorec.Score

            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              scorec.Wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              bags
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>{handlechanges(1)}}>Add 1</button>
        <button className="addScore4" onClick={()=>{handlechanges(4)}}>Add 4</button>
        <button className="addScore6" onClick={()=>{handlechanges(6)}}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>{handlechangew(1)}}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>{handlechangeb(1)}}>Add 1</button>
      </div>
            <h1 className='status'>{winner}</h1>
      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}

    </div>
  );
}



export default App;
