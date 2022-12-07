import { useState, useEffect } from "react";
import axios from "axios";




export default function useApplicationData() {
  const setDay = day => setState({ ...state, day });
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: []
  });




  function updateSpots(days, appointments) {
    const currentDay = days.find(day => day.name === state.day);
    const currentDayIndex = days.findIndex(day => day.name === state.day);
    const appointmentIds = currentDay.appointments;
    const nullInterviews = appointmentIds.filter((id) => !appointments[id].interview);
    const spotsAvailable = nullInterviews.length;
    const updatedDay = { ...currentDay, spots: spotsAvailable };
    const updatedDays = [...days];
    updatedDays[currentDayIndex] = updatedDay;

    setState(prev => ({ ...prev, days: updatedDays }));
  }




  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios
      .put(`/api/appointments/${id}`, appointment)
      .then(
        setState((prev) => ({ ...prev, appointments })),
        updateSpots(state.days, appointments)
      )
      // update state with spots
      .catch((error) => {
        console.error("error:", error.response);
        return Promise.reject(error);
      });
  }





  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios
      .delete(`/api/appointments/${id}`, appointment)
      .then(
        setState((prev) => ({ ...prev, appointments })),
        updateSpots(state.days, appointments)
      )
      // update state with spots
      .catch((error) => {
        console.log("error:", error.response);
        return Promise.reject(error);
      });
  }




  useEffect(() => {
    const days = axios.get(`/api/days`);
    const appointments = axios.get(`/api/appointments`);
    const interviewers = axios.get(`/api/interviewers`);
    const promises = [days, appointments, interviewers];

    Promise.all(promises)
      .then((promisesArray) => {
        setState(prev => ({ ...prev, days: promisesArray[0].data, appointments: promisesArray[1].data, interviewers: promisesArray[2].data }));
      })
      .catch(error => console.log("error:", error.response));
  }, []);


  return { state, setDay, bookInterview, cancelInterview };
}








