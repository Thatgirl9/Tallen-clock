import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import moment from "moment";

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(moment().format("HH:mm:ss"));
  const [currentDate, setCurrentDate] = useState(
    moment().format("dddd, MMMM DD, YYYY")
  );
  const [timeInLogged, setTimeInLogged] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format("HH:mm"));
      setCurrentDate(moment().format("dddd, MMMM/DD/YYYY"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Function to handle logging time in
  function handleTimeIn() {
    // Here you would make an API call to log the current date and time to the database table
    console.log("Time In Logged:", currentTime);
    setTimeInLogged(true);
  }

  // Function to handle logging time out
  function handleTimeOut() {
    // Here you would make an API call to log the current date and time as TimeOut
    console.log("Time Out Logged:", currentTime);
    setTimeInLogged(false);
  }

  return (
    <body className="h-[100vh]">
      {/* <nav className="bg-[#0ca678] flex justify-between items-center px-[3em] py-[0.5em] text-white ">
        <div>
          <h2>Clocking</h2>
          <p className="pr-[0.9em] bg-[#b49f96]">tallen@tallen.tech</p>
        </div>

        <ul className="flex gap-[1.7em]">
          <NavLink to="/report">Report</NavLink>
          <NavLink to="/ash">Users</NavLink>
          <NavLink to="">Log Out</NavLink>
        </ul>
      </nav> */}

      <main className="flex justify-center items-center">
        <div>
          <Outlet />
        </div>

        <div className="flex flex-col justify-center items-center gap-[2em] mt-[2em]">
          <h1 className="text-5xl font-medium">{currentTime} Hrs</h1>
          <p className="text-gray-400 font-medium text-lg">{currentDate}</p>
          {timeInLogged ? (
            <button
              onClick={handleTimeOut}
              className="bg-red-500 text-white py-[0.6em] px-[0.8em] rounded-[0.2em] "
            >
              Time Out
            </button>
          ) : (
            <button
              onClick={handleTimeIn}
              className="bg-[#0ca678] text-white py-[0.6em] px-[0.8em] rounded-[0.2em] "
            >
              Time In
            </button>
          )}
        </div>
      </main>
    </body>
  );
};

export default Dashboard;
