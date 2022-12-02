export default function getAppointmentsForDay(state, dayOfWeek) {
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
