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
      <div className="ball bg-purple-800 w-8 h-8"></div>
      <div className="ball bg-purple-600 w-6 h-6"></div>
      <div className="ball bg-purple-400 w-4 h-4"></div>
    </>
  );
}
