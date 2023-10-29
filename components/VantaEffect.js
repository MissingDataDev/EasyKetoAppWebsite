import { useEffect } from 'react';

export default function VantaEffect() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.VANTA && window.VANTA.TOPOLOGY) {
      const effect = window.VANTA.TOPOLOGY({
        el: "#vantaEffect",
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
      });

      // Clean up effect on unmount
      return () => {
        if (effect) effect.destroy();
      };
    }
  }, []);

  return (
    <div id="vantaEffect" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0 }}></div>
  );
}
