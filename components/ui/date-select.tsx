import React from "react";
import { ControllerRenderProps } from "react-hook-form";
import { sub } from "date-fns";

type ProType = {
  field: ControllerRenderProps<any>;
  disableDates: boolean;
};
function DateSelect(params: ProType) {
  const disabled = params.disableDates
    ? (date: Date) => date < sub(new Date(), { days: 1 })
    : [];

  return <div>DateSelect</div>;
}

export default DateSelect;
