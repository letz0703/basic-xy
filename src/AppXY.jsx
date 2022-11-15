import React, {useState, useEffect} from "react"
import "./AppXY.css"

export default function AppXY() {
  const [coords, setCoords] = useState({x: 0, y: 0})
  const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0})

  useEffect(() => {
    const handleWindowMouseMove = e => {
      setGlobalCoords({
        x: e.screenX,
        y: e.screenY
      })
    }
    window.addEventListener("mousemove", handleWindowMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove)
    }
  }, [])

  const handleMouseMove = e => {
    setCoords({
      x: e.clientX - e.target.offsetLeft,
      y: e.clientY - e.target.offsetTop
    })
  }
  return (
    <div
      className="container"
      onPointerMove={e => {
        setCoords({x: e.clientX, y: e.clientY})
      }}
    >
      <div onMouseMove={handleMouseMove}>
        <h2>
          Coords: x:{coords.x}
          y:{coords.y}
        </h2>
      </div>
      <div className="pointer" style={{transform: `translateX(${coords.x}px) translateY(${coords.y}px)`}}></div>
    </div>
  )
}
