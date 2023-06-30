import clsx from "clsx"
import { useState } from "react"
import images from "../../../../assets/images"
import { useCoreStore } from "../../../../store"

interface EventsShardProps {
  isScheduleOpen: boolean
  setIsScheduleOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const EventsShard = ({ isScheduleOpen, setIsScheduleOpen }: EventsShardProps) => {
  const { blue, green } = images.tickets
  const [isOngoingEventsOpen, setIsOngoingEventsOpen] = useState(false)
  const [isFutureEventsOpen, setIsFutureEventsOpen] = useState(false)

  const events = useCoreStore(state => state.events)
  const ongoingEvents = events.filter(event => event.date.day < new Date())
  const futureEvents = events.filter(event => event.date.day > new Date())

  const { handleEventVisibility, handleDeleteEvent, handleRescheduleEvent } = useCoreStore()

  const handleToggleVisibility = () => {
    setIsScheduleOpen(!isScheduleOpen)
    isScheduleOpen && setIsOngoingEventsOpen(false)
    isScheduleOpen && setIsFutureEventsOpen(false)
  }

  return (
    <div className="flex h-fit flex-col gap-10">
      <img
        className="w-min"
        onClick={handleToggleVisibility}
        src={isScheduleOpen ? blue.scheduleActive : blue.schedule}
        alt="Schedule"
      />
      {isScheduleOpen && (
        <img
          className="w-min"
          onClick={() => setIsOngoingEventsOpen(val => !val)}
          src={isOngoingEventsOpen ? blue.ongoingHidden : blue.ongoing}
          alt="Ongoing events"
        />
      )}
      {isOngoingEventsOpen &&
        ongoingEvents.map(event => (
          <div className="flex flex-col gap-8" key={event.id}>
            <span
              onClick={() => handleEventVisibility(event.id)}
              className={clsx("flex h-[62px] w-[300px] items-center bg-cover px-5 text-4xl", {
                "bg-shownBattlename bg-center bg-no-repeat": event.isVisible,
                "bg-hiddenBattlename bg-center bg-no-repeat": !event.isVisible
              })}>
              {event.name}
            </span>
            {event.isVisible && (
              <>
                <div>
                  <p className="px-5 text-[40px] uppercase text-[#B83941]">{event.description}</p>
                  <p className="px-5 text-left text-[32px] text-[#27221F]">
                    {event.date.day.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}
                  </p>
                  <p className="px-5 text-left text-[32px] text-[#27221F]">{event.date.location}</p>
                  <p className="px-5 text-left text-[32px] text-[#27221F]">{event.date.parish}</p>
                </div>
                <div className="ml-4 flex h-[100px] w-[300px] items-center gap-4 rounded-2xl border-4 border-[#27221F] bg-white px-3 text-3xl">
                  <span>{event.players[0].name}</span>
                  {event.players[0].avatar}
                  <span className="ml-auto">0</span>
                </div>
                <span className="text-[38px]">VS</span>
                <div className="ml-4 flex h-[100px] w-[300px] items-center gap-4 rounded-2xl border-4 border-[#27221F] bg-white px-3 text-3xl">
                  <span>{event.players[1].name}</span>
                  {event.players[1].avatar}
                  <span className="ml-auto">0</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <span
                    onClick={() => handleDeleteEvent(event.id)}
                    className="rounded-2xl border-2 border-white bg-[#b83941] px-3 py-2 text-3xl text-white">
                    Leave Event
                  </span>
                  <span
                    onClick={() => handleRescheduleEvent(event.id)}
                    className="rounded-2xl border-2 border-black bg-white px-3 py-2 text-3xl">
                    Reschedule Event
                  </span>
                </div>
              </>
            )}
          </div>
        ))}
      {isScheduleOpen && (
        <img
          className="w-min"
          onClick={() => setIsFutureEventsOpen(val => !val)}
          src={isFutureEventsOpen ? green.futureEventsHidden : green.futureEvents}
          alt="Ongoing events"
        />
      )}
      {isFutureEventsOpen &&
        futureEvents.map(event => (
          <div className="flex flex-col gap-8" key={event.id}>
            <span
              onClick={() => handleEventVisibility(event.id)}
              className={clsx("flex h-[62px] w-[300px] items-center bg-cover px-5 text-4xl", {
                "bg-shownBattlename bg-center bg-no-repeat": event.isVisible,
                "bg-hiddenBattlename bg-center bg-no-repeat": !event.isVisible
              })}>
              {event.name}
            </span>
            {event.isVisible && (
              <>
                <div>
                  <p className="px-5 text-[40px] uppercase text-[#B83941]">{event.description}</p>
                  <p className="px-5 text-left text-[32px] text-[#27221F]">
                    {event.date.day.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}
                  </p>
                  <p className="px-5 text-left text-[32px] text-[#27221F]">{event.date.location}</p>
                  <p className="px-5 text-left text-[32px] text-[#27221F]">{event.date.parish}</p>
                </div>
                <div className="ml-4 flex h-[100px] w-[300px] items-center gap-4 rounded-2xl border-4 border-[#27221F] bg-white px-3 text-3xl">
                  <span>{event.players[0].name}</span>
                  {event.players[0].avatar}
                  <span className="ml-auto">0</span>
                </div>
                <span className="text-[38px]">VS</span>
                <div className="ml-4 flex h-[100px] w-[300px] items-center gap-4 rounded-2xl border-4 border-[#27221F] bg-white px-3 text-3xl">
                  <span>{event.players[1].name}</span>
                  {event.players[1].avatar}
                  <span className="ml-auto">0</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <span
                    onClick={() => handleDeleteEvent(event.id)}
                    className="rounded-2xl border-2 border-white bg-[#b83941] px-3 py-2 text-3xl text-white">
                    Leave Event
                  </span>
                  <span
                    onClick={() => handleRescheduleEvent(event.id)}
                    className="rounded-2xl border-2 border-black bg-white px-3 py-2 text-3xl">
                    Reschedule Event
                  </span>
                </div>
              </>
            )}
          </div>
        ))}
    </div>
  )
}
