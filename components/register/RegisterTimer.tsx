import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import FontText from "../common/FontText";
import { useInterval } from "@/hooks/useInterval";
import { IAuthState } from "./RegisterStepTwo";

type TProps = {
  isRunning: boolean;
  authState: IAuthState;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setAuthState: React.Dispatch<React.SetStateAction<IAuthState>>;
};

const RegisterTimer = ({
  isRunning,
  setIsRunning,
  authState,
  setAuthState,
}: TProps) => {
  const [timer, setTimer] = useState(180);

  useInterval(() => {
    setTimer((prev) => prev - 1);

    if (timer === 0) {
      setIsRunning(false);
      setTimer(180);
      setAuthState({ ...authState, isCodeSent: false, authCode: "" });
    }
  });

  return (
    <FontText className="absolute right-0 top-7 text-[15px] text-red-600">
      {`인증 유효 시간: ${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, "0")}`}
    </FontText>
  );
};

export default RegisterTimer;
