import React from 'react';
import Card, { CardVariant } from './components/Card';

function App() {
  const arr = new Array(5).fill("_")

  return (
    <div className="row">
      <div className="container">
        <h1>Hello React!</h1>
        <div className="flex">
          {
            arr.map(i =>  {
              return (
                <Card 
                  onClick={(num) =>  console.log('clicked', num)}
                  width="150px"
                  height="200px"
                  variant={CardVariant.outline}
                >
                  {i}
                </Card>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
