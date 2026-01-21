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
      image: "URL_GAMBAR_1",
      audioSrc: "/audio/getout.mp3",
      shortcutKey: "q",
    },
    {
      id: 2,
      title: "Oh Hell Nah",
      author: "PhaseConvoluti...",
      stats: "< 100",
      image: "URL_GAMBAR_2",
      audioSrc: "/audio/hell-na.mp3",
      shortcutKey: "w",
    },
    {
      id: 3,
      title: "Mas Anies Mas A...",
      author: "p0tas51um",
      stats: "126",
      image: "URL_GAMBAR_3",
      audioSrc: "/audio/FAH-with-shotgun.mp3",
      shortcutKey: "e",
    },
    {
      id: 4,
      title: "4",
      author: "PreampOctaveD...",
      stats: "< 100",
      image: "URL_GAMBAR_1",
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
      title: "6",
      author: "p0tas51um",
      stats: "126",
      image: "URL_GAMBAR_3",
      audioSrc: "audio/Baahlil-Ngolah.mp3",
      shortcutKey: "a",
    },
    {
      id: 7,
      title: "7",
      author: "PreampOctaveD...",
      stats: "< 100",
      image: "URL_GAMBAR_1",
      audioSrc: "audio/Baahlil-Ngolah.mp3",
      shortcutKey: "s",
    },
    {
      id: 2,
      title: "siap mas anies",
      author: "PhaseConvoluti...",
      stats: "< 100",
      image: "URL_GAMBAR_2",
    },
    {
      id: 3,
      title: "Mas Anies Mas A...",
      author: "p0tas51um",
      stats: "126",
      image: "URL_GAMBAR_3",
    },
    {
      id: 1,
      title: "anies bigmo GAK ...",
      author: "PreampOctaveD...",
      stats: "< 100",
      image: "URL_GAMBAR_1",
    },
    {
      id: 2,
      title: "siap mas anies",
      author: "PhaseConvoluti...",
      stats: "< 100",
      image: "URL_GAMBAR_2",
    },
    {
      id: 3,
      title: "Mas Anies Mas A...",
      author: "p0tas51um",
      stats: "126",
      image: "URL_GAMBAR_3",
    },
  ];

  return (
    <div>
      <DotBackground>
        <h1 className=" text-center font-bold">Sound Board</h1>
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
