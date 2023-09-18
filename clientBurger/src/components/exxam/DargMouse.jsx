import React, {
  useState,
  useCallback,
  useEffect,
  useRef
} from "react";
import {Button,Modal} from 'antd'
import './Mouse.css'

// const useMouseDelta = (initialWidth) => {
//   const [resultX, setResultX] = useState(initialWidth);
//   const [resultY, setResultY] = useState(initialWidth);
//   const draggingging = useRef(false);
//   const previousClientX = useRef(0);
//   const previousClientY = useRef(0);

//   const handleMouseMove = useCallback((e) => {
//     if (!draggingging.current) {
//       return;
//     }
  
//     setResultX((result) => {
//       const change = e.clientX - previousClientX.current;
//       previousClientX.current = e.clientX;
//       return result + change;
//     });
//     setResultY((result) => {
//       const change = e.clientY - previousClientY.current;
//       previousClientY.current = e.clientY;
//       return result + change;
//     });
//   }, []);

//   const handleMouseDown = useCallback((e) => {
//     previousClientX.current = e.clientX;
//     previousClientY.current = e.clientY;
//     draggingging.current = true;
//   }, []);

//   const handleMouseUp = useCallback((e) => {
//     draggingging.current = false;
//   }, []);

//   useEffect(() => {
//     const green = document.getElementById('circle')
//     green.addEventListener("mousedown", handleMouseDown);
//     green.addEventListener("mouseup", handleMouseUp);
//     green.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       green.removeEventListener("mousedown", handleMouseDown);
//       green.removeEventListener("mouseup", handleMouseUp);
//       green.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [handleMouseDown, handleMouseUp, handleMouseMove]);

//   return {resultX,resultY};
// };
const useMouseChange =(initial)=>{
  const [moveX,setMoveX]= useState(initial);
  const [moveY,setMoveY] = useState(initial);
  const dragging = useRef(false);
  const valueX = useRef(0);
  const valueY = useRef(0);
 
  const handleMouseMove = useCallback((e)=>{

    if(!dragging.current){
      return;
    } 
    setMoveX((result)=>{
      const change = e.clientX - valueX.current;
      valueX.current= e.clientX
      return result+change
    })
    setMoveY((result)=>{
      const change = e.clientY - valueY.current;
      valueY.current= e.clientY
      return result+change
    })
    
  },[])
  const handleMouseDown=useCallback((e)=>{
  
    valueX.current = e.clientX;
    valueY.current = e.clientY;
    dragging.current = true
  },[])
  const handleMouseUp = useCallback((e)=>{
    dragging.current=false
  },[])
  useEffect(()=>{ 
    const green = document.getElementById('circle')
        green.addEventListener("mousedown", handleMouseDown);
        green.addEventListener("mouseup", handleMouseUp);
        green.addEventListener("mousemove", handleMouseMove);
    
        return () => {
          green.removeEventListener("mousedown", handleMouseDown);
          green.removeEventListener("mouseup", handleMouseUp);
          green.removeEventListener("mousemove", handleMouseMove);
        };
      }, [handleMouseDown, handleMouseUp, handleMouseMove]);
  return {moveX,moveY}
}
const Test = () => {
  const {moveX,moveY} = useMouseChange(40);
  // const {resultX,resultY} = useMouseDelta(40);
  const [isModalShow,setModal]= useState(false)

  const showModal=()=>{
    setModal(true)
  }
  const handleok=()=>{
    setModal(false)
  }
  // const handleCancle=()=>{
  //   setModal()
  // }
 
 

  return (
    <>
     <div className="container" style={{ width:'400px' }}>
      <div id="resize" className="resize" />
      <div id='circle' onDoubleClick={showModal}  className="circle" style={{margin:`${moveY}px ${moveX}px`}}>

      </div>
      <div className="jumping__area"
      style={{
        position:'relative',
        with:'300px',
        height:'100vh',
        bottom:0,
        right:0,
        background:'none'

      }}
      >
        <div className="icon"
        style={{
          position:'absolute',
          backgroundSize:'cover',
          background: `url:https://icon2.cleanpng.com/20190405/ppb/kisspng-clip-art-portable-network-graphics-computer-icons-call-svg-png-icon-free-download-5-9324-online-5ca6fbd3c2dfc3.5814841315544473157982.jpg`
        }}
        ></div>
      </div>
    </div>
    <Modal
    onOk={handleok}
    open={isModalShow}
    onCancel={handleok}
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, esse!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, esse!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, esse!</p>

    </Modal>
    </>
   
  );
};
export default Test;
