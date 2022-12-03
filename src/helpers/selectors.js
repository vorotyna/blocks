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


export function getInterviewersForDay(state, dayOfWeek) {
  let daysInterviewerIDs = [];
  for (let day of state.days) {
    if (day.name === dayOfWeek) {
      daysInterviewerIDs = day.interviewers;
    }
  };
  if (daysInterviewerIDs.length === 0) {
    return [];
  };
  let daysInterviewer = [];
  for (let interview of daysInterviewerIDs) {
    daysInterviewer.push(state.interviewers[interview]);
  };
  return daysInterviewer;
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
