import MusicCard from "./components/card";
import FloatingHeader from "./components/header";
import DotBackground from "./components/dotBG";
const App = () => {
  const data = [
    {
      id: 1,
      title: "Get Out",
      author: "PhaseConvoluti...",
      stats: "< 100",
      image: "/image/getout.png",
      audioSrc: "/audio/getout.mp3",
      shortcutKey: "q",
    },
    {
      id: 2,
      title: "Oh Hell Nah",
      author: "PhaseConvoluti...",
      stats: "< 100",
      image: "/image/HELNA.png",
      audioSrc: "/audio/hell-na.mp3",
      shortcutKey: "w",
    },
    {
      id: 3,
      title: "FAHHHH",
      author: "p0tas51um",
      stats: "126",
      image: "/image/fahh.png",
      audioSrc: "/audio/FAH-with-shotgun.mp3",
      shortcutKey: "e",
    },
    {
      id: 4,
      title: "4",
      author: "PreampOctaveD...",
      stats: "< 100",
      image: "/image/China.jpg",
      audioSrc: "/audio/myinstants-3.mp3",
      shortcutKey: "r",
    },
    {
      id: 5,
      title: "5",
      author: "PhaseConvoluti...",
      stats: "< 100",
      image: "URL_GAMBAR_2",
      audioSrc: "/audio/myinstants-2.mp3",
      shortcutKey: "t",
    },
    {
      id: 6,
      title: "Bahlil Ngolaah",
      author: "p0tas51um",
      stats: "126",
      image: "image/Bahlil.jpg",
      audioSrc: "audio/BaahlilNgolah.MP3",
      shortcutKey: "a",
    },
    {
      id: 7,
      title: "Lagu Kebangsaan",
      author: "PreampOctaveD...",
      stats: "< 100",
      image: "image/big.jpg",
      audioSrc: "audio/bigmo-sound.mp3",
      shortcutKey: "s",
    },
    {
      id: 2,
      title: "Iziiiin",
      author: "PhaseConvoluti...",
      stats: "< 100",
      image: "image/iziin.jpg",
      audioSrc: "audio/izin.mp3",
      shortcutKey: "d",
    },
    {
      id: 2,
      title: "Coin",
      author: "PhaseConvoluti...",
      stats: "< 100",
      image: "image/coin.png",
      audioSrc: "audio/money-soundfx.mp3",
      shortcutKey: "d",
    },
  ];

  return (
    <div>
      <DotBackground>
        <h3 className=" text-center font-bold">
          _______________________________________________________________________________________________________________
        </h3>
        <div className="min-h-screen p-10 flex gap-6 flex-wrap justify-center">
          <FloatingHeader></FloatingHeader>
          {data.map((item) => (
            <MusicCard
              key={item.id}
              title={item.title}
              author={item.author}
              stats={item.stats}
              imageUrl={item.image}
              audioSrc={item.audioSrc}
              shortcutKey={item.shortcutKey}
            />
          ))}
        </div>
      </DotBackground>
      <footer className="bg-black h-15"></footer>
    </div>
  );
};

export default App;
