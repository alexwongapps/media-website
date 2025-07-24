import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';

const Home = () => {
  return (
    <div className="container">
      <header className="mb-5 text-center">
        <h1 className="display-5">Alex Wong Media Portfolio</h1>
        <p className="lead">Broadcaster, engineer, podcaster, storyteller</p>
      </header>

      <Card
        colorClass='bg-kalx'
        title="Play-by-Play Sports Broadcasting"
        image="src/assets/kalx.png"
        description="Listen to the best highlights from my 30+ games calling Cal football, basketball, and baseball for KALX student radio. On many broadcasts, I also served as the on-site engineer, setting up and monitoring audio equipment."
        buttonInfos={[["Reel", "https://www.youtube.com/watch?v=WWzAd0XiQZo&list=PLJWNICg0Qac7jYHMgjn51ra1FDaq-rIBl"]]}
      />

      <Card
        colorClass='bg-assassin'
        title="This is Assassin Podcast"
        image="src/assets/assassin.png"
        description="The game of Assassin is a battle royale where players covertly ambush each other by tapping them with a spoon. So what happens when you play it at work? Includes interviews with eight participants and narration by me."
        buttonInfos={[["Apple Podcasts", "https://podcasts.apple.com/us/podcast/this-is-assassin/id1735184325"],
        ["Spotify", "https://open.spotify.com/show/0ujwnoEYf6VAEZng6VA1DV?si=9e3d56716c3a4bf1"]]}
      />

      <Card
        colorClass='bg-community'
        title="The Story of Community Podcast"
        image="src/assets/community.jpg"
        description="NBC's Community revolutionized broadcast television, but the trials and tribulations it endured to get and stay on the air were just as thrilling as what made it onto the screen. Researched, written, and narrated by me."
        buttonInfos={[["Apple Podcasts", "https://podcasts.apple.com/us/podcast/the-story-of-community/id1559785397"],
        ["Spotify", "https://open.spotify.com/show/2bNXUPNFN3O7XVWPDHbK8P"],
        ["YouTube", "https://www.youtube.com/playlist?list=PLmfM3-HCmq0XLsfyUvbRCredyHc8h0uWf"]]}
      />
    </div>
  );
};

export default Home;
