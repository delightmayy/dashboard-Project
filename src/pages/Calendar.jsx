import React, { useState } from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  initialEventData,
  createEventId,
} from "../assets/fullcalender/fullcalender";
import HeadTitle from "../assets/HeadTitle";
import useWindowSize from "../Api/useWindowSize";
const Calendar = () => {
  const { width } = useWindowSize();
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);

  function handleWeekendsToggle() {
    setWeekendsVisible(!weekendsVisible);
  }

  function handleDateSelect(selectInfo) {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }

  function handleEventClick(clickInfo) {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  }

  function handleEvents(events) {
    setCurrentEvents(events);
  }

  return (
    <div className=" dark:bg-gray-500  text-zinc-800 dark:text-white  overflow-x-auto scrollbar-thin overflow-y-auto dark:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-800 scrollbar-track-gray-500 scrollbar-thumb-gray-600 p-1 h-full ">
      <HeadTitle
        Title={"calender"}
        subTitle={"Select dates and you will be prompted to create a new event"}
      />
      <div className="px-2 -mt-2 text-sm flex flex-col gap-1   ">
        <p className=""> Drag, drop, and resize events</p>
        <p className=""> Click an event to delete it</p>
      </div>
      <div className="  grid grid-cols-1 md:grid-cols-4  gap-1  lg:gap-3 h-full px-1 my-2 mt-6" >
        <Sidebar
       
          weekendsVisible={weekendsVisible}
          handleWeekendsToggle={handleWeekendsToggle}
          currentEvents={currentEvents}
        />
        <div className="md:col-span-3">
          <FullCalendar 
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: width > 768 && "title",
              right:width >= 768 && "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={weekendsVisible}
            initialEvents={initialEventData} // alternatively, use the `events` setting to fetch from a feed
            select={handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            eventsSet={handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
          eventAdd={function(){}}
          eventChange={function(){}}
          eventRemove={function(){}}
          */
          />
        </div>
      </div>
    </div>
  );
};

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function Sidebar({ weekendsVisible, handleWeekendsToggle, currentEvents }) {
  return (
    <div className="">
      <div className="checked:bg-gray-700 ">
        <label>
          <input
            type="checkbox"
            checked={weekendsVisible}
            onChange={handleWeekendsToggle}
            className="checked:bg-gray-700 rounded m-1 checked:hover:bg-gray-700 focus:bg-gray-700  "
          ></input>
          toggle weekends
        </label>
      </div>
      <div className=" mt-4">
        <h2>All Events ({currentEvents.length})</h2>
        <ul>
          {currentEvents.map((event) => (
            <SidebarEvent key={event.id} event={event} />
          ))}
        </ul>
      </div>
      
    </div>
  );
}

function SidebarEvent({ event }) {
  return (
    <li key={event.id} className="flex flex-col bg-gray-400 rounded  dark:bg-gray-700 my-1 px-1">
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i className="text-red-500">{event.title}</i>
    </li>
  );
}
export default Calendar;
