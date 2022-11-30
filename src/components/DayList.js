import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList(props) {
  let { days } = props;
  let dayListData = days.map((day) => {
    return (
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === props.value}
        setDay={props.onChange}
      />
    );
  });

  return <ul>{dayListData}</ul>;
}
