//-------------------------------------------//
// 2. Attendance Record Processing
//-------------------------------------------//
function processAttendance(attendanceData) {
  const summary = {
    employeeId: attendanceData.employeeId,
    date: attendanceData.date,
    status: "error",
    totalMinutes: 0,
    overtimeMinutes: 0,
    note: "",
    errorMessage: "",
  };

  const input = JSON.parse(JSON.stringify(attendanceData));

  try {
    const { checkIn, checkOut, breakStart, breakEnd, overtimeApproved, date } = input;

    if (!checkIn || !checkOut) {
      summary.status = "incomplete";
      summary.note = "Missing check-in or check-out";
      return summary;
    }

    // Safely create date-time objects
    const makeTime = (time) => new Date(`${date}T${time}`);

    const start = makeTime(checkIn);
    const end = makeTime(checkOut);

    if (isNaN(start) || isNaN(end)) {
      throw new Error("Invalid time format");
    }

    let diff = (end - start) / (1000 * 60); // total working minutes

    // Break deduction
    if (breakStart) {
      const bStart = makeTime(breakStart);
      const bEnd = breakEnd ? makeTime(breakEnd) : new Date(bStart.getTime() + 30 * 60000);

      if (isNaN(bStart) || isNaN(bEnd)) throw new Error("Invalid break time");

      diff -= (bEnd - bStart) / (1000 * 60);
    }

    if (diff < 0) {
      summary.status = "invalid";
      summary.note = "Negative working hours";
      return summary;
    }

    summary.status = "complete";
    summary.totalMinutes = diff;

    // Overtime
    if (overtimeApproved && diff > 480) {
      summary.overtimeMinutes = diff - 480;
      summary.note = "Overtime included";
    } else {
      summary.note = "Normal day";
    }

    return summary;

  } catch (err) {
    summary.status = "error";
    summary.errorMessage = err.message;
    return summary;

  } finally {
    console.log("Attendance processed (finally)");
  }
}


// Example
const record = {
  employeeId: "EMP204",
  date: "2025-03-14",
  checkIn: "09:00",
  checkOut: "18:30",
  breakStart: "14:00",
  breakEnd: "14:45",
  overtimeApproved: true
};

console.log(processAttendance(record));
