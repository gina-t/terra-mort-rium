import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const HomePage = () => {
  const container = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: '.box-c',
        start: 'center center',
        end: '+=300',
        pin: true,
        markers: true,
      });
    },
    { scope: container }
  );

  return (
    <main className="home" ref={container}>
      <div className="header">
        <h1 className="title">ScrollSmoother &amp; React Router</h1>
        <p>
          Simple example for setting up GSAP ScrollSmoother in a React App using{' '}
          <strong>
            <i>React</i> <i>Router</i>
          </strong>
        </p>
      </div>
      <div className="box box-a gradient-blue" data-speed="0.5">
        a
      </div>
      <div className="content-section">
        <h2>About Smooth Scrolling</h2>
        <p>
          Smooth scrolling enhances the user experience by creating fluid transitions
          between different sections of a webpage. This demo showcases the power of
          GSAP's ScrollSmoother combined with React Router.
        </p>
      </div>
      <div className="box box-b gradient-orange" data-speed="0.8">
        b
      </div>
      <div className="content-section">
        <h2>Interactive Elements</h2>
        <p>
          Notice how the colored boxes move at different speeds and interact with
          the scroll position. This creates an engaging parallax effect that adds
          depth to the page.
        </p>
      </div>
      <div className="box box-c gradient-purple" data-speed="1.5">
        c
      </div>
      <div className="content-section">
        <h2>Advanced Animations</h2>
        <p>
          The purple box demonstrates pinning functionality, where elements can be
          fixed in place while the user continues to scroll, creating interesting
          visual effects.
        </p>
      </div>
      <div className="line"></div>
    </main>
  );
};

export default HomePage;
// import { useRef } from 'react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useGSAP } from '@gsap/react';

// const HomePage = () => {
//   const container = useRef<HTMLDivElement | null>(null);
//   useGSAP(
//     () => {
//       ScrollTrigger.create({
//         trigger: '.box-c',
//         start: 'center center',
//         end: '+=300',
//         pin: true,
//         markers: true,
//       });
//     },
//     { scope: container }
//   );

//   return (
//     <main className="home" ref={container}>
//       <div className="header">
//         <h1 className="title">ScrollSmoother &amp; React Router</h1>
//         <p>
//           Simple example for setting up GSAP ScrollSmoother in a React App using{' '}
//           <strong>
//             <i>React</i> <i>Router</i>
//           </strong>
//         </p>
//       </div>
//       <div className="box box-a gradient-blue" data-speed="0.5">
//         a
//       </div>
//       <div className="box box-b gradient-orange" data-speed="0.8">
//         b
//       </div>
//       <div className="box box-c gradient-purple" data-speed="1.5">
//         c
//       </div>
//       <div className="line"></div>
//     </main>
//   );
// };

// export default HomePage;
