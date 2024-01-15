import { useState } from "react";
import Icon from "../src/assets/images/icon-arrow.svg";

function App() {
  const [day, setDay] = useState<string>();
  const [month, setMonth] = useState<string>();
  const [year, setYear] = useState<string>();
  const [age, setAge] = useState({ years: 0, days: 0, months: 0 });

  const calculateAge = () => {
    const present = new Date();
    const birthDate = new Date(`${year}-${month}-${day}`);
    let years = present.getFullYear() - birthDate.getFullYear();
    let months = present.getMonth() - birthDate.getMonth();
    let days = present.getDate() - birthDate.getDate();

    // Adjust for negative days or months
    if (days < 0) {
      const lastMonth = new Date(
        present.getFullYear(),
        present.getMonth() - 1,
        birthDate.getDate()
      );
      days = Math.floor(
        (present.getTime() - lastMonth.getTime()) / (24 * 60 * 60 * 1000)
      );
    }
    if (months < 0) {
      years--;
      months += 12;
    }
    setAge({
      years,
      months,
      days,
    });
  };

  return (
    <div className="flex flex-col h-screen bg-gray- justify-center items-center">
      <section className="bg-white w-[50%] p-10 rounded-2xl rounded-br-[9rem]">
        <div id="inputs" className="flex space-x-7">
          <div className="flex flex-col w-28">
            <label className="mb-2 text-xs">DAY</label>
            <input
              className="border rounded-md h-12 text-2xl outline-[#864CFF] pl-5"
              onChange={(e) => {
                setDay(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col w-28">
            <label className="mb-2 text-xs">MONTH</label>
            <input
              className="border rounded-md h-12 text-2xl outline-[#864CFF] pl-5"
              onChange={(e) => {
                setMonth(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col w-28">
            <label className="mb-2 text-xs">YEAR</label>
            <input
              className="border rounded-md h-12 text-2xl outline-[#864CFF] pl-5"
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />
          </div>
        </div>
        {/* Divider + Button */}
        <div className="flex w-full items-center">
          <div className="h-[2px] flex-1 mr-1 bg-gray-300" />
          <button
            onClick={calculateAge}
            className="w-20 h-20 flex justify-center items-center bg-[#864CFF] rounded-full hover:bg-black duration-300 hover:cursor-pointer"
          >
            <img src={Icon} />
          </button>
        </div>
        {/* Age Section */}
        <div className="text-8xl">
          <span className="text-[#864CFF]">{age.years}</span> years
        </div>
        <div className="text-8xl">
          <span className="text-[#864CFF]">{age.months}</span> months
        </div>
        <div className="text-8xl">
          <span className="text-[#864CFF]">{age.days}</span> days
        </div>
      </section>
    </div>
  );
}

export default App;
