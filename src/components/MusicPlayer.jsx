import { useEffect, useState } from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import { HeartIcon } from "../../public/assets/icons/HeartIcon";
import { IoPause, IoPlay } from "react-icons/io5";
import { NextIcon } from "../../public/assets/icons/NextIcon";
import { PreviousIcon } from "../../public/assets/icons/PreviousIcon";
import { RepeatOneIcon } from "../../public/assets/icons/RepeatOneIcon";
import { ShuffleIcon } from "../../public/assets/icons/ShuffleIcon";
import useSound from "use-sound";
import songs from "../data/songs.json";

export default function MusicPlayer() {
  const [liked, setLiked] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(Math.floor(Math.random() * 4));
  const [play, { pause, duration, sound }] = useSound(
    songs[currentSongIndex].file
  );
  const [seconds, setSeconds] = useState();
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
   };

  const nextSong = () => {
    pause();
    setIsPlaying(false); 
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
   };
   
   const previousSong = () => {
    pause();
    setIsPlaying(false);
    setCurrentSongIndex((currentSongIndex - 1 + songs.length) % songs.length);
   };
   
  return (
    <Card className="border-none bg-transparent rounded-md" shadow="none">
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="col-span-6 md:col-span-4 flex flex-col w-full items-center">
            <Image
              alt="Album cover"
              className="object-cover md:w-full rounded-md shadow-sm hover:shadow-md cursor-pointer"
              height={200}
              width={200}
              shadow="xs"
              src={songs[currentSongIndex].cover}
            />
          </div>
          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90 text-md">
                  {songs[currentSongIndex].title}
                </h3>
                <h1 className="text-sm font-medium text-foreground/70">
                  {songs[currentSongIndex].artist}
                </h1>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-pink-50 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "pink" : "none"}
                />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-3 gap-1">
          <Slider
            aria-label="Music progress"
            classNames={{
              track: "bg-default-500/30",
              thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
            }}
            color="foreground"
            defaultValue={0}
            value={seconds}
            onChangeEnd={(e) => {
              sound.seek([e]);
            }}
            maxValue={duration / 1000}
            size="sm"
          />
          <div className="flex justify-between">
            <p className="text-sm text-foreground/50">
              {currTime.min}:{currTime.sec}
            </p>
            <p className="text-sm text-foreground/50">{formatDuration(duration)}</p>
          </div>
        </div>

        <div className="flex w-full items-center justify-center">
          <Button
            isIconOnly
            className="data-[hover]:bg-foreground/10"
            radius="full"
            variant="light"
          >
            <RepeatOneIcon className="text-foreground/50" />
          </Button>
          <Button
            isIconOnly
            className="data-[hover]:bg-foreground/10"
            radius="full"
            variant="light"
            onClick={previousSong}
          >
            <PreviousIcon className="text-foreground/60" />
          </Button>
          <Button
            isIconOnly
            className="w-auto h-auto data-[hover]:bg-foreground/10 text-foreground/60"
            radius="full"
            variant="light"
            onClick={playingButton}
          >
            {isPlaying ? (
              <IoPause size={25} className="m-2" />
            ) : (
              <IoPlay size={25} className="m-2" />
            )}
          </Button>
          <Button
            isIconOnly
            className="data-[hover]:bg-foreground/10"
            radius="full"
            variant="light"
            onClick={nextSong}
          >
            <NextIcon className="text-foreground/60" />
          </Button>
          <Button
            isIconOnly
            className="data-[hover]:bg-foreground/10"
            radius="full"
            variant="light"
          >
            <ShuffleIcon className="text-foreground/60" />
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
