import { useState, useRef } from "react";
import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import { getDays } from "../helpers/getDays";
import daysInWeek from "../static/daysInWeek";
import ClickOutsideHandler from "./ClickOutsideHandler";

interface Props {
  onChange: (date: Date) => void;
}

const DatePicker: React.FC<Props> = ({ onChange }) => {
  const [show, setShow] = useState(false);

  const now = new Date();

  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth() + 1);
  const [day, setDay] = useState(now.getDate());

  const ref = useRef<HTMLDivElement>(null);

  const days = getDays(year, month);

  const showHandle = () => setShow(!show);

  const plusMonthHandle = () => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const minusMonthHandle = () => {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const plusYearHandle = () => setYear(year + 1);

  const minusYearHandle = () => setYear(year - 1);

  const onDayClick = (day: number) => {
    const date = new Date(year, month - 1, day);
    onChange(date);

    setDay(day);
    setShow(false);
  };

  const monthTitle = new Date(year, month - 1).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  const hidden = !show && "hidden";

  const dateBoxStyle =
    "flex cursor-pointer shadow-[rgba(50,50,93,0.25)_0px_2px_5px_-1px,rgba(0,0,0,0.3)_0px_1px_3px_-1px] flex-col items-center py-2 px-4 hover:bg-gray-100 rounded-b-[15px]";
  const celenderStyle = `${hidden} absolute top-[115%] -translate-x-2/4 translate-y-0 left-2/4 z-50 w-[350px] md:w-[450px] rounded-[12px] bg-white px-[10px] py-[25px] shadow-[0px_2px_20px_#00000014]`;

  return (
    <div ref={ref} className="relative select-none">
      <ClickOutsideHandler show={show} setShow={setShow} elementRef={ref} />

      <div onClick={showHandle} className={dateBoxStyle}>
        <span className="text-lg font-bold">Choose Date</span>
        <span>{`${day}.${month}.${year}`}</span>
      </div>

      <div className={celenderStyle}>
        <div className="flex w-full items-center justify-between pb-4 text-lg">
          <div className="flex">
            <HiChevronDoubleLeft
              onClick={minusYearHandle}
              className="cursor-pointer"
            />
            <HiChevronLeft
              onClick={minusMonthHandle}
              className="scale-[1.2] cursor-pointer"
            />
          </div>

          <h1 className="text-center text-xl font-bold">{monthTitle}</h1>

          <div className="flex">
            <HiChevronRight
              onClick={plusMonthHandle}
              className="scale-[1.2] cursor-pointer "
            />
            <HiChevronDoubleRight
              onClick={plusYearHandle}
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="grid w-full grid-cols-7 gap-2">
          {daysInWeek.map((day, i) => (
            <div
              key={i}
              className="text-center text-[8px] md:text-[11px] font-bold text-gray-600"
            >
              {day}
            </div>
          ))}

          {days.map((item, i) => (
            <div
              key={i}
              onClick={() => onDayClick(item)}
              className={`${item && "cursor-pointer hover:bg-gray-200"} ${
                item === day && "bg-gray-300"
              } text-center`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
