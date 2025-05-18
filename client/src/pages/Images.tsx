import headerImage from '../assets/headerImage.jpg';
import imageOne from '../assets/imageOne.jpg';
import imageTwo from '../assets/imageTwo.jpg';
import imageThree from '../assets/imageThree.jpg';
import imageFour from '../assets/imageFour.jpg';
import imageFive from '../assets/imageFive.jpg';

const ImagesPage = () => {
  return (
    <main className="images">
      {/* Absolutely positioned content sections */}

      {/* Header Content */}
      <div className="content-section" style={{ top: '46vh' }}>
        <h2>
          Earth, Death, Place <span className="font-serif">and</span> Sound
        </h2>
        <p>
          The Tibetan Book of Living and Dying explores Tibetan Buddhist
          perspectives about life, death, and the interconnectedness of these
          states. It emphasizes the importance of understanding impermanence,
          detachment, compassion and equanimity. Matt Formatt explores these ideas through
          bespoke terrariums immersed in soundtracks that deeply influenced each
          decade of your life. To prepare for death, or support
          those who are dying, we invite you to explore <strong>Terra(<span className='font-serif'>mort</span>)rium <span className='font-serif'>et</span> Sonus.</strong>
        </p>
      </div>

      {/* Content One Terrariums */}
      <div className="content-section" style={{ top: '149vh' }}>
        <h2>Terrariums</h2>
        <p>
          Choose from tropical or arid plants to personalise your terrarium,
          encased in hand-blown glass made by local artisans, or vintage materials.
        </p>
      </div>

      {/* Content Two Soundtrack */}
      <div className="content-section" style={{ top: '240vh' }}>
        <h2>Soundtrack</h2>
        <p>
          Choose the tracks that deeply impressed you from each decade of your
          life, to accompany your terrarium.
        </p>
      </div>

      {/* Content Three Poetry */}
      <div className="content-section" style={{ top: '280vh' }}>
        {/* <h2>Poetry</h2> */}
        <h2>Choose the poems that enriched your life.</h2>
        <p>
          When great trees fall, rocks on distant hills shudder, lions hunker
          down in tall grasses, and even elephants lumber after safety. When
          great trees fall in forests, small things recoil into silence, their
          senses eroded beyond fear. When great souls die, the air around us
          becomes light, rare, sterile. We breathe, briefly. Our eyes, briefly,
          see with a hurtful clarity. Our memory, suddenly sharpened, examines,
          gnaws on kind words unsaid, promised walks never taken. Great souls
          die and our reality, bound to them, takes leave of us. Our souls,
          dependent upon their nurture, now shrink, wizened. Our minds, formed
          and informed by their radiance, fall away. We are not so much maddened
          as reduced to the unutterable ignorance of dark, cold caves. And when
          great souls die, after a period peace blooms, slowly and always
          irregularly. Spaces fill with a kind of soothing electric vibration.
          Our senses, restored, never to be the same, whisper to us. They
          existed. They existed. We can be. Be and be better. For they existed.
        </p>
        <strong className="font-serif">By Maya Angelou </strong>
      </div>

      {/* Content Four Costing */}
      <div className="content-section" style={{ top: '435vh' }}>
        <h2>Costing</h2>
        <p>
          Matt Formatt believes <strong>Terra(<span className='font-serif'>mort</span>)rium <span className='font-serif'>et</span> Sonus</strong> should be accessible to anyone. The base cost is $500.
        </p>
      </div>

      {/* Content Five Contact*/}
      <div className="content-section" style={{ top: '550vh' }}>
        <h2>Contact Matt Formatt</h2>
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
