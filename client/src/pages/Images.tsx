import headerImage from '../assets/headerImage.jpg';
import imageOne from '../assets/imageOne.jpg';
import imageTwo from '../assets/imageTwo.jpg';
import imageThree from '../assets/imageThree.jpg';
import imageFour from '../assets/imageFour.jpg';
import imageFive from '../assets/imageFive.jpg';
import ReadMoreButton from '../components/ReadMoreButton';
import Header from '../components/Header';
import LearnMoreButton from '../components/LearnMoreButton';


const ImagesPage = () => {
  return (
    <main className="images">
      <Header />
      {/* Absolutely positioned content sections */}
      {/* Header Content */}
      <div className="content-section" style={{ top: '43vh' }}>
        <h2>
          Earth, Death, Place <span className="font-serif">and</span> Sound
        </h2>
        <p>
          The Tibetan Book of Living and Dying explores Tibetan Buddhist
          perspectives about life, death, and the interconnectedness of these
          states. It emphasizes the importance of understanding impermanence,
          detachment, compassion and equanimity. Matt Format explores these ideas through
          bespoke terrariums immersed in soundtracks that deeply influenced each
          decade of your life. To prepare for death, or support
          those who are dying, we invite you to explore <strong>Terra(<span className='font-serif'>mort</span>)rium <span className='font-serif'>et</span> Sonus.</strong>
        </p>
      </div>

      {/* Content One Terrariums */}
      <div className="content-section" style={{ top: '162vh' }}>
        <h2>Terrariums</h2>
        <p>
          Choose from tropical or arid plants to personalise your terrarium,
          encased in hand-blown glass made by local artisans, or vintage materials.
        </p>
      </div>

      {/* Content Two Soundtrack */}
      <div className="content-section" style={{ top: '265vh' }}>
        <h2>Soundtracks</h2>
        <p>
          Choose the music that deeply impressed you from each decade of your
          life, to compliment your terrarium.
        </p>
      </div>

      {/* Content Three Poetry */}
      <div className="content-section" style={{ top: '347vh' }}>
        <h2>Poetry</h2>
        <p>
          When great trees fall, <br />
          rocks on distant hills shudder, <br />
          lions hunker down <br />
          in tall grasses, <br />
          and even elephants <br />
          lumber after safety. <br /> <br />
          When great trees fall <br />
          in forests, <br />
          small things recoil into silence, <br />
          their senses <br />
          eroded beyond fear. <br /><br />
          </p>
          <ReadMoreButton /> 
      </div>

      {/* Content Four Costing */}
      <div className="content-section" style={{ top: '473vh' }}>
        <h2>Costing</h2>
        <p>
          Matt Format believes <strong>Terra(<span className='font-serif'>mort</span>)rium <span className='font-serif'>et</span> Sonus</strong> should be accessible to anyone. The base cost is $500.
        </p>
      </div>

      {/* Content Five Contact*/}
      <div className="content-section" style={{ top: '495vh' }}>
        <h2>Contact</h2>
        <p>
          Matt Format
        </p>
        <a href="mailto:terramoriam@gmail.com" className="email-link">
          terramoriam@gmail.com
        </a>    
      </div>

      {/* Content Six Tao's Story */}
      <div className="content-section" style={{ top: '580vh' }}>
        <h2>Tao's Story</h2>
        <p>
          Tao chose a cerulean hand-blown glass terrarium, accompanied by a soundtrack of electronic music, from the early 1980s pioneers of electro, to downtempo Italian techno, hynotic and alluring.
        </p>
         <LearnMoreButton />
      </div>

      {/* Header Image */}
      <section className="image-grid container">
        <picture className="image_cont">
          <source srcSet={headerImage} media="(min-width: 1500px)" />
          <source srcSet={headerImage} media="(min-width: 700px)" />
          <img
            data-speed="auto"
            className=""
            src={headerImage}
            alt="Header image"
          />
        </picture>

        {/* Image One */}
        <div className="image_cont" id="image-one">
          <img data-speed="auto" src={imageOne} alt="" />
        </div>

        {/* Image Two */}
        <div className="image_cont">
          <img data-speed="auto" src={imageTwo} alt="" />
        </div>

        {/* Image Three */}
        <div className="image_cont">
          <img
            data-speed="auto"
            src={imageThree}
            className="opacity-50"
            alt=""
          />
        </div>

        {/* Image Four */}
        <div className="image_cont">
          <img data-speed="auto" src={imageFour} alt="" />
        </div>

        {/* Image Five */}
        <div className="image_cont">
          <img data-speed="auto" src={imageFive} alt="" />
        </div>
      </section>
      <div className="spacer"></div>
    </main>
  );
};

export default ImagesPage;
