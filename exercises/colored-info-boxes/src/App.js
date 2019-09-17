import React from 'react';
import './App.css';
import Box from './components/Box'

function App() {
  return (
  <div className="main">
    <Box color="red" title="My Example" subtitle="Some Elaboration" info="Hello, my Dear. I am adding this in a different way."/>

    <Box color="orange" title="Two" subtitle="This is the Second" info=" And here is anything else."/>

    <Box color="yellow" title="Three" subtitle="The third is here" info="It is easy to make many."/>

    <Box color="green" title="Four" subtitle="The fourth" info="This is monotonous."/>

    <Box color="blue" title="Five" subtitle="Five?" info="SO much repitition"/>

    <Box color="purple" title="Six" subtitle="Already" info="We are over halfway there."/>

    <Box color="violet" title="Seven" subtitle="A lucky number" info="only a few left"/>

    <Box color="pink" title="Eight" subtitle="SO CLOSE!!" info="almost done."/>

    <Box color="red" title="Nine" subtitle="nineth" info="we can repeat stuff"/>

    <Box color="orange" title="Ten" subtitle="The last!!" info="That took so long."/>
  </div>
  );
}

export default App;
