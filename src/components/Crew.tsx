import ImageDouglasHurley from "../assets/crew/image-douglas-hurley.png";

export default function Crew() {
  return (
    <div className="flex flex-col w-full max-w-[1110px] gap-300 my-600 mx-auto h-full">
      <div className="flex gap-300">
        <div className="text-preset-5 text-white/25 uppercase font-bold">
          02
        </div>
        <div className="text-preset-5 uppercase">meet your crew</div>
      </div>
      <div className="flex w-full h-full gap-400">
        <div className="flex flex-col w-full h-full gap-500">
          <div className="flex flex-col h-full w-full justify-center gap-300">
            <div className="flex flex-col text-preset-8 uppercase gap-200">
              <div className="text-preset-4 uppercase text-white/50">
                commander
              </div>
              <div className="text-preset-3 uppercase">douglas hourley</div>
            </div>
            <div className="flex flex-col gap-200">
              <div className="text-preset-9 text-blue-300">
                Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former NASA astronaut. He launched into space
                for the third time as commander of Crew Dragon Demo-2.
              </div>
            </div>
          </div>
          <div className="flex w-full gap-500 mb-600">
            <div className="w-[15px] h-[15px] rounded-full bg-white"></div>
            <div className="w-[15px] h-[15px] rounded-full bg-white/17"></div>
            <div className="w-[15px] h-[15px] rounded-full bg-white/17"></div>
            <div className="w-[15px] h-[15px] rounded-full bg-white/17"></div>
          </div>
        </div>

        <div className="flex w-full h-full items-center justify-center">
          <img
            src={ImageDouglasHurley}
            alt="Douglas Hurley"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
