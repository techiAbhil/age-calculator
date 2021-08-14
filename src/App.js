import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import Form from "./components/form";
import AppContext from "./app-context";
import * as moment from "moment";

const emptyStateValues = {
  dateOfBirth: null,
  tillDate: null,
  error: null,
  ageDiffMsg: null,
  isAgeCalculated: false
}

const getDaysMonthYearDiff = (oldDate, newDate) => {
  const momentOldDate = moment(oldDate);
  const momentTillDate = moment(newDate);

  const yearDiff = momentTillDate.diff(momentOldDate, 'year');
  momentOldDate.add('year', yearDiff);

  const monthDiff = momentTillDate.diff(momentOldDate, 'months');
  momentOldDate.add('months', monthDiff);

  const daysDiff = momentTillDate.diff(momentOldDate, 'days');

  return {
    yearDiff, monthDiff, daysDiff
  }

}

function App() {

  const [state, setState] = useState(emptyStateValues);

  const onClearBtnClick = () => setState({ emptyStateValues });

  const onCalculateAgeBtnClick = () => {
    const { dateOfBirth, tillDate } = state;
    if (moment(dateOfBirth) > moment(tillDate)) {
      setState({
        ...state,
        ageDiffMsg: null,
        isAgeCalculated: true,
        error: "Till date should be greater than Birthdate🍰!"
      });
      return;
    }

    try {
      const { yearDiff, monthDiff, daysDiff } = getDaysMonthYearDiff(dateOfBirth, tillDate);
      let ageDiffMsg = null;
      if (yearDiff || monthDiff || daysDiff) {
        ageDiffMsg = "You are ";
        ageDiffMsg += yearDiff > 0 ? `${yearDiff} year ` : "";
        ageDiffMsg += monthDiff > 0 ? `${monthDiff} month's ` : "";
        ageDiffMsg += daysDiff > 0 ? `${daysDiff} day's ` : "";
        ageDiffMsg += "old🥂!";
      } else {
        ageDiffMsg = "You just born Today!"
      }

      setState({
        ...state,
        ageDiffMsg: ageDiffMsg,
        error: null,
        isAgeCalculated: true
      });
    } catch (e) {
      setState({
        ...state,
        ageDiffMsg: null,
        error: "Something went wrong!",
        isAgeCalculated: true
      });
    }
  }

  return (
    <main>
      <AppContext.Provider value={{
        state,
        setState,
        onClearBtnClick,
        onCalculateAgeBtnClick
      }}>
        <section className="container">
          <Sidebar />
          <Form />
        </section>
      </AppContext.Provider>
    </main>
  );
}

export default App;
