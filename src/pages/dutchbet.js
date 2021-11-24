import useSWR from "swr";
import { useState, useEffect } from "react";

import SeasonDay from "@/modules/DutchBet/SeasonDay/SeasonDay";
import Matchups from "@/modules/DutchBet/Matchups/Matchups";

const tyiliana = "https://api.sibr.dev/corsmechanics/";
const blaseballbase = "api.blaseball.com"; // or as I like to call it, Baseball
const baseurl = tyiliana + blaseballbase + "/database/simulationData";
const modurl = tyiliana + blaseballbase + "/bets/availableBets?day=";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DutchBet() {
  const { data: result, error } = useSWR(baseurl, fetcher);
  {
    /* 	const { data: bets, size, setSize} */
  }

  const [day, setDay] = useState(null);
  useEffect(() => {
    if (result) {
      if (day == null) {
        setDay(result.day);
      }
    }
  }, [result]);

  if (error) return <p>oh no</p>;
  if (!result) return <p>Please Wait</p>;

  return (
    <>
      <SeasonDay
        day={day}
        curDay={result.day}
        setDay={setDay}
        season={result.season}
      />
      <Matchups day={day} setday={setDay} />
    </>
  );
}
