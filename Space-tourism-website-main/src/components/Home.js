import '../styles/home.scss';

export default function Home() {
  return (
    <main className="home">
      <div className="hero">
        <div className="hero-text">
          <p className="big-text">So, you go to </p>
          <h1>Space?</h1>
          <p className="text">
           We can take you there! We are a company specialized in 
          space travel. Whether you want to go to the Moon or to Saturn, 
         “Plan it- planet” is here for all of your intergalactic needs. 
          So sit back, relax and enjoy an out of this world experience. 
          </p>
        </div>

        <button className="main-button">Explore</button>
      </div>
    </main>
  );
}
