import React, { useEffect, useRef, memo, use } from "react";
import { createRain, destroyRain } from "./regl/main";
import makeConfig from "./utils/config";
/**
 * //TODO - add props based on the configs
 *
 */
export const DigitalRain = memo((props) => {
  const matrix = useRef(null);
  const rainRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.style.width  = '100%';
    canvas.style.height = '100%';
    canvasRef.current = canvas;
  }, []);

  // const config = useMemo(() => makeConfig(props));
  //effects on mount and unmount
  useEffect(() => {
    matrix.current.appendChild(canvasRef.current);
    const gl = canvasRef.current.getContext("webgl");
    createRain(canvasRef.current, makeConfig(props), gl).then((handles) => {
      rainRef.current = handles;
      // console.log('handles', handles);
    })
    console.log('regenerate')

    return () => {
      if (rainRef.current) {
        destroyRain(rainRef.current);
        console.log('destroy')
      }
    };
  }, [props]);

  return <div ref={matrix}></div>;
})

