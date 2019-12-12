import React, { useState, useMemo, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual
} from "date-fns";
import pt from "date-fns/locale/pt";
import { utcToZonedTime } from "date-fns-tz";

import { parseISO } from "date-fns/esm";
import api from "~/services/api";
import { Container, Time } from "./styles";

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [schedule, setSchedule] = useState([]);

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get("schedule", {
        params: { date }
      });
      console.log(response.data);
      const timezone = Intl.DateTimeFormat().resolvedOptions();

      const data = range.map(hour => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);

        console.log(format(checkDate, "MM/dd/yyyy HH"));
        console.log(format(parseISO(response.data[1].date), "MM/dd/yyyy HH"));

        const a = response.data.find(
          a =>
            format(checkDate, "MM/dd/yyyy HH") ==
            format(parseISO(response.data[1].date), "MM/dd/yyyy HH")
        );
        console.log(a);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find(
            a =>
              format(checkDate, "MM/dd/yyyy HH") ==
              format(parseISO(a.date), "MM/dd/yyyy HH")
          )
        };
      });

      setSchedule(data);
    }

    loadSchedule();
  }, [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft color="#fff" size={36} />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight color="#fff" size={36} />
        </button>
      </header>

      <ul>
        {schedule.map(time => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : "Em aberto"}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
