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
      .then(setState((prev) => ({ ...prev, appointments })))
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
      .then(setState((prev) => ({ ...prev, appointments })))
      .catch((error) => {
        console.log("error:", error.response);
        return Promise.reject(error);
      });
  }




  useEffect(() => {
    const hostURL = "http://localhost:8001";
    const days = axios.get(`${hostURL}/api/days`);
    const appointments = axios.get(`${hostURL}/api/appointments`);
    const interviewers = axios.get(`${hostURL}/api/interviewers`);
    const promises = [days, appointments, interviewers];

    Promise.all(promises)
      .then((promisesArray) => {
        setState(prev => ({ ...prev, days: promisesArray[0].data, appointments: promisesArray[1].data, interviewers: promisesArray[2].data }));
      })
      .catch(error => console.log("error:", error.response));
  }, [state]);


  return { state, setDay, bookInterview, cancelInterview };
}








