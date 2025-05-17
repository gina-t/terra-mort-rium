
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
      <div className="content-section" style={{ top: '30vh' }}>
        <h2>Earth, Death, Place <span className='font-serif'>and</span> Sound</h2>
        <p>
          The Tibetan Book of Living and Dying explores Tibetan Buddhist perspectives about life, death, and the interconnectedness of these states. It emphasizes the importance of understanding impermanence, the nature of mind, and the processes of karma and rebirth. Matt Formatt explores these ideas through personalised terrariums and sound tracks that deeply influenced you through each decade of your life, to prepare for death, and compassionately assist those who are dying. 

        </p>
      </div>
      
      <div className="content-section" style={{ top: '95vh' }}>
        <h2>Terrariums</h2>
        <p>Pink heather creates a stunning contrast against green grass, demonstrating nature's artistic palette.</p>
      </div>
      
      <div className="content-section" style={{ top: '146vh' }}>
        <h2>Sound Tracks</h2>
        <p>Ancient trees stand as silent witnesses to the passage of time, providing both shelter and serenity.</p>
      </div>

      <div className="content-section" style={{ top: '240vh' }}>
        <h2>Poems</h2>
        <h3>By Maya Angelou</h3>
        <p>
          
          When great trees fall,
          rocks on distant hills shudder,
          lions hunker down
          in tall grasses,
          and even elephants
          lumber after safety.
          When great trees fall
          in forests,
          small things recoil into silence,
          their senses
          eroded beyond fear.
          When great souls die,
          the air around us becomes
          light, rare, sterile.
          We breathe, briefly.
          Our eyes, briefly,
          see with
          a hurtful clarity.
          Our memory, suddenly sharpened,
          examines,
          gnaws on kind words
          unsaid,
          promised walks
          never taken.
          Great souls die and
          our reality, bound to
          them, takes leave of us.
          Our souls,
          dependent upon their
          nurture,
          now shrink, wizened.
          Our minds, formed
          and informed by their
          radiance, fall away.
          We are not so much maddened
          as reduced to the unutterable ignorance of
          dark, cold
          caves.
          And when great souls die,
          after a period peace blooms,
          slowly and always
          irregularly. Spaces fill
          with a kind of
          soothing electric vibration.
          Our senses, restored, never
          to be the same, whisper to us.
          They existed. They existed.
          We can be. Be and be
          better. For they existed.
        </p>
      </div>

      <div className="content-section" style={{ top: '435vh' }}>
        <h2>Costing</h2>
        <p>Ancient trees stand as silent witnesses to the passage of time, providing both shelter and serenity.</p>
      </div>

      <div className="content-section" style={{ top: '550vh' }}>
        <h2>Contact Matt Formatt</h2>
        <p>Ancient trees stand as silent witnesses to the passage of time, providing both shelter and serenity.</p>
      </div>


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

        {/* image one content one */}
        <div className="image_cont" id="image-one">
          <img
            data-speed="auto"
            src={imageOne}
            alt=""
          />
        </div>

        {/* image two content two */}
        <div className="image_cont">
          <img
            data-speed="auto"
            src={imageTwo}
            alt=""
          />
        </div>

        {/* image three content three */}
        <div className="image_cont">
          <img
            data-speed="auto"
            src={imageThree}
             className='opacity-50'
            alt=""
          />
        </div>

        {/* image four content four */}
        <div className="image_cont">
          <img
            data-speed="auto"
            src={imageFour}
            alt=""
          />
        </div>

        {/* image five content five */}
        <div className="image_cont">
          <img
            data-speed="auto"
            src={imageFive}
            alt=""
          />
        </div>

      </section>
      <div className="spacer"></div>
    </main>
  );
};

export default ImagesPage;
