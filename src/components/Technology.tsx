import { useState } from "react";
import { technology, type TechnologyItem } from "../data/data";
import Button from "./ui/Button";

export default function Technology() {
  const [currentTechnologyItem, setCurrentTechnologyItem] =
    useState<TechnologyItem>(technology[0]);

  return (
    <div className="flex flex-col w-full max-w-[1275px] my-600 gap-300 ml-600 ml-auto h-full">
      <div className="flex gap-300">
        <div className="text-preset-5 text-white/25 uppercase font-bold">
          03
        </div>
        <div className="text-preset-5 uppercase">space launch 101</div>
      </div>
      <div className="flex flex-row items-center justify-center h-full gap-500">
        <div className="flex w-full gap-800 min-w-[635px] items-center">
          <div className="flex flex-col items-center justify-center gap-400">
            {technology.map((item, index) => (
              <Button
                key={item.name}
                variant="numberIndicator"
                className={`
                  ${item.name === currentTechnologyItem.name ? "bg-white !text-blue-900" : ""}
                `}
                onClick={() => setCurrentTechnologyItem(item)}
              >
                {index + 1}
              </Button>
            ))}
          </div>
          <div className="flex flex-col gap-300">
            <div className="flex flex-col text-preset-8 uppercase gap-200">
              <div className="text-preset-4 uppercase text-white/50 uppercase">
                the terminology...
              </div>
              <div className="text-preset-3 uppercase">
                {currentTechnologyItem.name}
              </div>
            </div>

            <div className="flex flex-col gap-200">
              <div className="text-preset-9 text-blue-300">
                {currentTechnologyItem.description}
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full gap-500 items-center">
          <img
            src={currentTechnologyItem.images.portrait}
            alt={currentTechnologyItem.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
