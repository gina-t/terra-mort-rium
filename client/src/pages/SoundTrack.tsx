import SoundTrackCard from "../components/SoundTrackCard";

export default function SoundTrack() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-center">Tao's Soundtrack</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <SoundTrackCard
          year="1970-1980"
          dj1="Blondie Atomic"
          dj2="Donna Summer I feel love"
          dj3="The Police The bed's too big without you"
          dj4="The Doors Cars hiss by my window"
          dj5="David Bowie Heroes"
          title=""
          content=""
          color="bg-[#B7B1F2]"
          cornerClass="rounded-tl-lg rounded-tr-lg"
        />
        <SoundTrackCard
          year="1980-1990"
          dj1="New Order Blue Monday"
          dj2="New Order Ceremony"
          dj3="Joy Division Love will tear us apart"
          dj4="Depeche Mode Just can't get enough"
          dj5="Soft Cell Tainted love"
          title=""
          content=""
          color="bg-[#78C1F3]"
          cornerClass="rounded-bl-lg rounded-br-lg"
          
        />
        <SoundTrackCard
          year="1990-2000"
          dj1="Lennie De Ice We are IE"
          dj2="Beastie Boys Sabotage"
          dj3="Nirvana Come as you are"
          dj4="Massive Attack Teardrop"
          dj5="Tricky Maxinquaye"
          title=""
          content=""
          color="bg-[#9BE8D8]"
          cornerClass="rounded-tl-lg rounded-tr-lg"
   
        />
        <SoundTrackCard
          year="2000-2010"
          dj1="Radiohead Backdrifts"
          dj2="The Chemical Brothers Hey girls hey boys"
          dj3="Madonna Music"
          dj4="Moby Great Escape"
          dj5="La Roux In for the kill"
          title=""
          content=""
          color="bg-[#FFFA8D]"
          cornerClass="rounded-bl-lg rounded-br-lg"
        />
        <SoundTrackCard
          year="2010-2020"
          dj1="Booka Shade Regenerate"
          dj2="Green Velvet Flash Nicky Romero remix"
          dj3="Xenia Beliayeva Analog Effekt"
          dj4="Ben Klock Subzero"
          dj5="Massive Attck Paradise Circus"
          title=""
          content=""
          color="bg-[#FF8A8A]"
          cornerClass="rounded-tl-lg rounded-tr-lg"
        />
        <SoundTrackCard
          year="2020-2025"
          dj1="Donato Dozzy Magda"
          dj2="Donato Dozzy Lucrezia"
          dj3="Donato Dozzy Velluto"
          dj4="Voices From The Lake Iyo"
          dj5="Luigi Tozzi Dune"

          title=""
          content=""
          color="bg-[#FF6363]"
          cornerClass="rounded-bl-lg rounded-br-lg"
        />
      </div>
    </div>
  );
}