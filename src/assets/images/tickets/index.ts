import blueAllFriends from "./blue-all-friends.svg"
import blueCards from "./blue-cards.svg"
import blueCollection from "./blue-collection.svg"
import blueDiceRoll from "./blue-dice-roll.svg"
import blueEvents from "./blue-events.svg"
import blueFormats from "./blue-formats.svg"
import blueFriendGroup from "./blue-friend-group.svg"
import blueFriends from "./blue-friends.svg"
import blueJoinEvent from "./blue-join-event.svg"
import blueOngoingHidden from "./blue-ongoing-hidden.svg"
import blueOngoing from "./blue-ongoing.svg"
import bluePlay from "./blue-play.svg"
import bluePowers from "./blue-powers.svg"
import blueProfile from "./blue-profile.svg"
import blueScheduleActive from "./blue-schedule-active.svg"
import blueSchedule from "./blue-schedule.svg"
import greenAddGroup from "./green-add-group.svg"
import greenContinue from "./green-continue.svg"
import greenFutureEventsHidden from "./green-future-events-hidden.svg"
import greenFutureEvents from "./green-future-events.svg"
import greenMatchHistory from "./green-matchHistory.svg"
import redCardsRules from "./red-cards-rules.svg"
import redCards from "./red-cards.svg"
import redCollection from "./red-collection.svg"
import redDecks from "./red-decks.svg"
import redEvents from "./red-events.svg"
import redFavourites from "./red-favourites.svg"
import redFriends from "./red-friends.svg"
import redHome from "./red-home.svg"
import redHostEvent from "./red-hostEvent.svg"
import redJoinEvent from "./red-joinEvent.svg"
import redPlayMatch from "./red-play-match.svg"
import redPlayground from "./red-playground.svg"

export default {
  red: {
    home: redHome,
    hostEvent: redHostEvent,
    joinEvent: redJoinEvent,
    events: redEvents,
    collection: redCollection,
    cards: redCards,
    decks: redDecks,
    favourites: redFavourites,
    friends: redFriends,
    playground: redPlayground,
    playMatch: redPlayMatch,
    cardsRules: redCardsRules
  },
  blue: {
    cards: blueCards,
    collection: blueCollection,
    play: bluePlay,
    friends: blueFriends,
    events: blueEvents,
    profile: blueProfile,
    schedule: blueSchedule,
    scheduleActive: blueScheduleActive,
    allFriends: blueAllFriends,
    diceRoll: blueDiceRoll,
    formats: blueFormats,
    friendGroup: blueFriendGroup,
    joinEvent: blueJoinEvent,
    ongoingHidden: blueOngoingHidden,
    ongoing: blueOngoing,
    powers: bluePowers
  },
  green: {
    matchHistory: greenMatchHistory,
    addGroup: greenAddGroup,
    continue: greenContinue,
    futureEventsHidden: greenFutureEventsHidden,
    futureEvents: greenFutureEvents
  }
}
