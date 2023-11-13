import { Progress, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const PageProgressBar = () => {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      console.log(scroll);

      setProgressValue(scroll * 100);
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });

  return (
    <Progress
      size={"xs"}
      value={progressValue}
      colorScheme={useColorModeValue("blackAlpha", "orange")}
    />
  );
};

export default PageProgressBar;
