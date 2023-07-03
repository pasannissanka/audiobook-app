"use client";

import { Dispatch, createContext, useReducer } from "react";

interface PlayerContextData {
  book?: {};
  chapter?: {};
  url?: string;
}

type PlayerContextType = {
  isPlaying: boolean;
  data?: PlayerContextData;
};

export const PlayerDispatchContext = createContext<
  | Dispatch<{
      type: "play" | "close";
      data: PlayerContextData;
    }>
  | undefined
>(undefined);

export const PlayerContext = createContext<PlayerContextType>({
  isPlaying: false,
});

export default function PlayerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(playerReducer, initialValue);
  return (
    <PlayerContext.Provider value={state}>
      <PlayerDispatchContext.Provider value={dispatch}>
        {children}
      </PlayerDispatchContext.Provider>
    </PlayerContext.Provider>
  );
}

function playerReducer(
  state: PlayerContextType,
  action: { type: "play" | "close"; data: PlayerContextData }
): PlayerContextType {
  switch (action.type) {
    case "play":
      return { ...state, isPlaying: true, data: action.data };
    case "close":
      return { isPlaying: false };
  }
}

const initialValue: PlayerContextType = { isPlaying: false };
