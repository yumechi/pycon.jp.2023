import {Floor, Track} from "@/types/timetable";

export const other: {
  day1: {
    "4F": { [key in string]: string },
    "20F": { [key in string]: string },
  },
  day2: {
    "4F": { [key in string]: string },
    "20F": { [key in string]: string },
  }
} = {
  day1: {
    "4F": {
      "2023-10-27T10:00:00+09:00": 'Opening & Keynote',
      "2023-10-27T11:30:00+09:00": 'Break',
      "2023-10-27T12:10:00+09:00": 'Lunch',
      "2023-10-27T14:10:00+09:00": 'Break',
      "2023-10-27T14:50:00+09:00": 'Break',
      "2023-10-27T16:00:00+09:00": 'Break',
      "2023-10-27T16:40:00+09:00": 'Break',
      "2023-10-27T17:00:00+09:00": 'LT & Closing',
    },
    "20F": {
      "2023-10-27T10:00:00+09:00": 'Opening & Keynote',
      "2023-10-27T11:30:00+09:00": 'Break',
      "2023-10-27T11:55:00+09:00": 'Break',
      "2023-10-27T12:20:00+09:00": 'Lunch',
      "2023-10-27T13:55:00+09:00": 'Break',
      "2023-10-27T14:20:00+09:00": 'Break',
      "2023-10-27T14:45:00+09:00": 'Break',
      "2023-10-27T15:45:00+09:00": 'Break',
      "2023-10-27T16:10:00+09:00": 'Break',
      "2023-10-27T16:35:00+09:00": 'Break',
      "2023-10-27T17:00:00+09:00": 'LT & Closing',
    },
  },
  day2: {
    "4F": {
      "2023-10-28T10:00:00+09:00": 'Opening & Keynote',
      "2023-10-28T11:20:00+09:00": 'Break',
      "2023-10-28T12:00:00+09:00": 'Lunch',
      "2023-10-28T14:00:00+09:00": 'Break',
      "2023-10-28T14:40:00+09:00": 'Break',
      "2023-10-28T15:50:00+09:00": 'Break',
      "2023-10-28T16:30:00+09:00": 'Break',
      "2023-10-28T16:40:00+09:00": 'LT & Closing',
      "2023-10-28T17:40:00+09:00": 'Break',
      "2023-10-28T18:00:00+09:00": 'Party 🥳',
    },
    "20F": {
      "2023-10-28T10:00:00+09:00": 'Opening & Keynote',
      "2023-10-28T11:20:00+09:00": 'Break',
      "2023-10-28T11:45:00+09:00": 'Break',
      "2023-10-28T12:10:00+09:00": 'Lunch',
      "2023-10-28T13:45:00+09:00": 'Break',
      "2023-10-28T14:10:00+09:00": 'Break',
      "2023-10-28T14:35:00+09:00": 'Break',
      "2023-10-28T16:00:00+09:00": 'Break',
      "2023-10-28T16:25:00+09:00": 'Break',
      "2023-10-28T16:40:00+09:00": 'LT & Closing',
      "2023-10-28T17:40:00+09:00": 'Break',
      "2023-10-28T18:00:00+09:00": 'Party 🥳',
    },
  }
}


export const tracks: { [key in Floor]: Track[] } = {
  "4F": [
    "track 1",
    "track 2",
    "track 3",
    "track 4",
  ],
  "20F": [
    "track 5",
  ],
};