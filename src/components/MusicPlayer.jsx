import React, { useEffect } from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import { HeartIcon } from "../assets/icons/HeartIcon";
import { IoPauseCircle, IoPlayCircle } from "react-icons/io5";
import { NextIcon } from "../assets/icons/NextIcon";
import { PreviousIcon } from "../assets/icons/PreviousIcon";
import { RepeatOneIcon } from "../assets/icons/RepeatOneIcon";
import { ShuffleIcon } from "../assets/icons/ShuffleIcon";
import useSound from "use-sound";
import Song from "../assets/Song.mp3";

export default function MusicPlayer() {
  const [liked, setLiked] = React.useState(true);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [play, { pause, duration, sound }] = useSound(Song);
  const [currTime, setCurrTime] = React.useState({
    min: "",
    sec: "",
  });
  const [seconds, setSeconds] = React.useState();

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

  return (
    <Card className="border-none bg-transparent rounded-md" shadow="none">
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="col-span-6 md:col-span-4 flex flex-col w-full items-center">
            <Image
              alt="Album cover"
              className="object-cover md:w-full rounded-md"
              height={200}
              width={200}
              shadow="xs"
              src="src\assets\MusicCover.png"
            />
          </div>
          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90 text-lg">
                  Where'd All the Time Go?
                </h3>
                <h1 className="text-md font-medium">Dr. Dog</h1>
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
            <p className="text-sm text-foreground/50">3:55</p>
          </div>
        </div>

        <div className="flex w-full items-center justify-center">
          <Button
            isIconOnly
            className="data-[hover]:bg-foreground/10"
            radius="full"
            variant="light"
          >
            <RepeatOneIcon className="text-foreground/80" />
          </Button>
          <Button
            isIconOnly
            className="data-[hover]:bg-foreground/10"
            radius="full"
            variant="light"
          >
            <PreviousIcon className="text-zinc-800" />
          </Button>
          <Button
            isIconOnly
            className="w-auto h-auto data-[hover]:bg-foreground/10 text-zinc-800"
            radius="full"
            variant="light"
            onClick={playingButton}
          >
            {isPlaying ? (
              <IoPauseCircle size={54} />
            ) : (
              <IoPlayCircle size={54} />
            )}
          </Button>
          <Button
            isIconOnly
            className="data-[hover]:bg-foreground/10"
            radius="full"
            variant="light"
          >
            <NextIcon className="text-zinc-800" />
          </Button>
          <Button
            isIconOnly
            className="data-[hover]:bg-foreground/10"
            radius="full"
            variant="light"
          >
            <ShuffleIcon className="text-foreground/80" />
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
