import React from 'react';

function ellipse_handle(event,x,y,chamber,options)
{
  var ln=null;
  var obj=null;
  var disx=null;
  var disy=null;
  if(event.type==="click" &&  chamber===null)
  {
    ln=<ellipse cx={x} cy={y} r="0" stroke={options.stroke} strokeWidth={options.strokeWidth} fill={options.fill}/>;
    obj={store:"chambered",add:ln};
    
  }
  if(event.type==="mousemove"  && chamber!==null)
  {
    disx=Math.abs(parseFloat(chamber.props.cx)-x);
    disy=Math.abs(parseFloat(chamber.props.cy)-y);
    ln = <ellipse cx={chamber.props.cx} cy={chamber.props.cy} rx={disx} ry={disy} stroke={options.stroke} strokeWidth={options.strokeWidth} fill={options.fill}/>;
    console.log(ln);
    obj={store:"chambered",add:ln};
  }
  if(event.type==="click" && chamber!==null)
  {
    disx=Math.abs(parseFloat(chamber.props.cx)-x);
    disy=Math.abs(parseFloat(chamber.props.cy)-y);
    ln = <ellipse cx={chamber.props.cx} cy={chamber.props.cy} rx={disx} ry={disy} stroke={options.stroke} strokeWidth={options.strokeWidth} fill={options.fill}/>;
    obj={store:"final",add:ln};
    
  }
  return obj;
  
}

export var ellipse={handle:ellipse_handle,info:"click once for center,click second time for radius"}; 
/*
export class Line extends React.Component 
{
  state={init:false,x1:0,y1:0,x2:0,y2:0};
  setFirst=(x,y)=>
  {
      this.setState({x1:x,y1:y});
  }
  setLast=(x,y)=>
  {
      this.setState({x2:x,y2:y});
  }
  componentWillReceiveProps(nextProps) 
  {
      
  }
  render()
  {
    return (
      <line x1={this.state.x1} y1={this.state.y1} x2={this.state.x2} y2={this.state.y2} stroke="black" strokeWidth="2" fill="none"/>
    );
  }
}
*/
