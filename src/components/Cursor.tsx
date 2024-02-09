import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Cursor() {
  useEffect(() => {
    gsap.set('.ball', { xPercent: -50, yPercent: -50 });
    let targets = gsap.utils.toArray('.ball');
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(targets, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        ease: 'power1.out',
        overwrite: 'auto',
        stagger: 0.02,
      });
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div className="ball bg-purple-800 w-5 h-5"></div>
      <div className="ball bg-purple-700 w-4 h-4"></div>
      <div className="ball bg-purple-600 w-3 h-3"></div>
      <div className="ball bg-purple-500 w-2 h-2"></div>
      <div className="ball bg-purple-400 w-1 h-1"></div>
    </>
  );
}
