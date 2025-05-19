import headerImage from '../assets/headerImage.jpg';
import imageOne from '../assets/imageOne.jpg';
import imageTwo from '../assets/imageTwo.jpg';
import imageThree from '../assets/imageThree.jpg';
import imageFour from '../assets/imageFour.jpg';
import imageFive from '../assets/imageFive.jpg';
import ReadMoreButton from '../components/ReadMoreButton';

const ImagesPage = () => {
  return (
    <main className="images">
      {/* Absolutely positioned content sections */}

      {/* Header Content */}
      <div className="content-section" style={{ top: '44vh' }}>
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
      <div className="content-section" style={{ top: '163vh' }}>
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
      <div className="content-section" style={{ top: '350vh' }}>
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
          <ReadMoreButton />
          {/* When great souls die, <br />
          the air around us becomes <br />
          light, rare, sterile. <br />  
          We breathe, briefly. <br />
          Our eyes, briefly, <br />
          see with <br />
          a hurtful clarity. <br />
          Our memory, suddenly sharpened, <br />
          examines, <br />
          gnaws on kind words <br />
          unsaid, <br />
          promised walks <br />
          never taken. <br /><br />
          Great souls die and <br />
          our reality, bound to <br />
          them, takes leave of us. <br />
          Our souls, <br />
          dependent upon their <br />
          nurture, <br />
          now shrink, wizened. <br />
          Our minds, formed <br />
          and informed by their <br />
          radiance, fall away. <br />
          We are not so much maddened <br />
          as reduced to the unutterable ignorance of <br />
          dark, cold <br />
          caves. <br /><br />
          And when great souls die, <br />
          after a period peace blooms, <br />
          slowly and always <br />
          irregularly. Spaces fill <br />
          with a kind of <br />
          soothing electric vibration. <br />
          Our senses, restored, never <br />
          to be the same, whisper to us. <br />
          They existed. They existed. <br />
          We can be. Be and be <br />
          better. For they existed. */}
        </p>
        
      </div>

      {/* Content Four Costing */}
      <div className="content-section" style={{ top: '475vh' }}>
        <h2>Costing</h2>
        <p>
          Matt Formatt believes <strong>Terra(<span className='font-serif'>mort</span>)rium <span className='font-serif'>et</span> Sonus</strong> should be accessible to anyone. The base cost is $500.
        </p>
      </div>

      {/* Content Five Contact*/}
      <div className="content-section" style={{ top: '580vh' }}>
        <h2>Contact Matt Format at terramoriam@gmail.com</h2>
        <p>
          To register your interest, click the register button below.
        </p>
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
