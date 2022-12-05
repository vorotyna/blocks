import React, { /*Fragment*/ } from 'react';

import "./styles.scss";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status";
import Confirm from "components/Appointment/Confirm";
import useVisualMode from 'hooks/useVisualMode';


export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETE = "DELETE";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);

    props.bookInterview(props.id, interview);

    transition(SHOW);
  };


  function cancel() {
    transition(DELETE);

    props.cancelInterview(props.id);

    transition(EMPTY);
  }


  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && <Show student={props.interview.student} interviewer={props.interview.interviewer} onDelete={() => transition(CONFIRM)} onEdit={() => transition(EDIT)} />}
      {mode === SAVING && <Status message={'Saving...'} />}
      {mode === CONFIRM && <Confirm onCancel={() => back()} onConfirm={cancel} />}
      {mode === DELETE && <Status message={'Deleting...'} />}
      {mode === EDIT && <Form student={props.interview.student} interviewer={props.interview.interviewer.id} interviewers={props.interviewers} onCancel={() => back(EMPTY)} onSave={save} />}
      {mode === CREATE && <Form interviewers={props.interviewers} onCancel={() => back(EMPTY)} onSave={save} />}
    </article >
  );
}