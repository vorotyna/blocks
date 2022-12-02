export function getAppointmentsForDay(state, dayOfWeek) {
  let appointmentIDs = [];
  for (let day of state.days) {
    if (day.name === dayOfWeek) {
      appointmentIDs = day.appointments;
    }
  };
  if (appointmentIDs.length === 0) {
    return [];
  };
  let daysAppointments = [];
  for (let appointment of appointmentIDs) {
    daysAppointments.push(state.appointments[appointment]);
  };
  return daysAppointments;
};



export function getInterview(state, interview) {
  let interviewObj = {};
  if (interview === null) {
    return null;
  } else {
    interviewObj.student = interview.student;
    interviewObj.interviewer = state.interviewers[interview.interviewer];
  }
  return interviewObj;
}
