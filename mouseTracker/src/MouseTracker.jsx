import { useEffect } from "react";
import { useState } from "react";

function MouseTracker()
{
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() =>
    {
        const handleMouseMove = (event) =>
        {
            setMousePosition({ x: event.clientX, y: event.clientY })
        };
        window.addEventListener(`mousemove`, handleMouseMove);
        console.log(`Mouse move listener added`);

        return () =>
        {
            window.removeEventListener(`mousemove`, handleMouseMove);
            console.log(`Mouse move listener removed`);
        };

    }, []);

    return (
        <div>
            <h2>Mouse Tracker Position</h2>
            <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
        </div>
    )
}
export default MouseTracker;