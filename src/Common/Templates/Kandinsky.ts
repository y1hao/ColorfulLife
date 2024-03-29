import { IGame } from "../Interfaces";

const kandinsky: IGame = {
  "name": "Kandinsky",
  "author": "Yihao",
  "time": new Date("2020-08-31T12:00:00.000Z"),
  "description": "This game tries to imitate Wassily Kandinsky's art work. It is made by using the 'randomize all' functionality and then fine-tuning the result.",
  "refreshFrequency": 3,
  "width": 9,
  "height": 9,
  "seeds": [
    [
      true,
      true,
      true,
      false,
      false,
      true,
      true,
      true,
      true
    ],
    [
      false,
      false,
      true,
      false,
      false,
      false,
      true,
      false,
      true
    ],
    [
      false,
      false,
      false,
      true,
      true,
      true,
      false,
      true,
      true
    ],
    [
      true,
      false,
      false,
      true,
      false,
      false,
      true,
      false,
      true
    ],
    [
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      true,
      true
    ],
    [
      false,
      true,
      true,
      true,
      true,
      false,
      true,
      true,
      false
    ],
    [
      false,
      false,
      true,
      false,
      false,
      true,
      true,
      true,
      false
    ],
    [
      false,
      true,
      true,
      false,
      true,
      false,
      true,
      true,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      true
    ]
  ],
  "surviveRangeLower": 6,
  "surviveRangeUpper": 8,
  "reproductionRangeLower": 2,
  "reproductionRangeUpper": 4,
  "borderPolicy": "roll",
  "styles": [
    [
      {
        "size": 70,
        "elevation": 2,
        "borderRadius": 40,
        "borderWidth": 20,
        "color": "#ffe788",
        "backgroundColor": "#ef6a6a",
        "borderColor": "#1d5acb"
      },
      {
        "size": 70,
        "elevation": 3,
        "borderRadius": 40,
        "borderWidth": 20,
        "color": "#e1bcee",
        "backgroundColor": "#fd5789",
        "borderColor": "#2a56d0"
      },
      {
        "size": 70,
        "elevation": 5,
        "borderRadius": 45,
        "borderWidth": 10,
        "color": "#0ba371",
        "backgroundColor": "#efeba6",
        "borderColor": "#4466c5"
      },
      {
        "size": 80,
        "elevation": 5,
        "borderRadius": 40,
        "borderWidth": 15,
        "color": "#2147ac",
        "backgroundColor": "#bfebfd",
        "borderColor": "#e46a46"
      },
      {
        "size": 60,
        "elevation": 7,
        "borderRadius": 50,
        "borderWidth": 10,
        "color": "#b70853",
        "backgroundColor": "#b7ed83",
        "borderColor": "#d95f6d"
      },
      {
        "size": 70,
        "elevation": 2,
        "borderRadius": 50,
        "borderWidth": 25,
        "color": "#f372c4",
        "backgroundColor": "#e09cf5",
        "borderColor": "#bd35b2"
      },
      {
        "size": 70,
        "elevation": 2,
        "borderRadius": 45,
        "borderWidth": 10,
        "color": "#e84ab1",
        "backgroundColor": "#84efbd",
        "borderColor": "#f6864c"
      },
      {
        "size": 70,
        "elevation": 0,
        "borderRadius": 50,
        "borderWidth": 30,
        "color": "#1f845f",
        "backgroundColor": "#e8f08e",
        "borderColor": "#3b4ace"
      },
      {
        "size": 60,
        "elevation": 3,
        "borderRadius": 50,
        "borderWidth": 20,
        "color": "rgb(30, 84, 44)",
        "backgroundColor": "#6275f2",
        "borderColor": "#b1d3e8"
      }
    ],
    [
      {
        "size": 50,
        "elevation": 2,
        "borderRadius": 35,
        "borderWidth": 10,
        "color": "#f6d89a",
        "backgroundColor": "#f29292",
        "borderColor": "#134d70"
      },
      {
        "size": 30,
        "elevation": 10,
        "borderRadius": 30,
        "borderWidth": 40,
        "color": "#9a8b07",
        "backgroundColor": "#ee9dab",
        "borderColor": "#960736"
      },
      {
        "size": 60,
        "elevation": 9,
        "borderRadius": 45,
        "borderWidth": 10,
        "color": "#ef6c57",
        "backgroundColor": "#95e7fb",
        "borderColor": "#fbb15a"
      },
      {
        "size": 90,
        "elevation": 8,
        "borderRadius": 50,
        "borderWidth": 20,
        "color": "#0f88bd",
        "backgroundColor": "#f55858",
        "borderColor": "#faebaf"
      },
      {
        "size": 40,
        "elevation": 3,
        "borderRadius": 50,
        "borderWidth": 20,
        "color": "#0d5928",
        "backgroundColor": "#ffeb98",
        "borderColor": "#f9cce4"
      },
      {
        "size": 70,
        "elevation": 1,
        "borderRadius": 45,
        "borderWidth": 10,
        "color": "#f3ce3b",
        "backgroundColor": "#f5b3ee",
        "borderColor": "rgb(221, 79, 196)"
      },
      {
        "size": 60,
        "elevation": 2,
        "borderRadius": 40,
        "borderWidth": 10,
        "color": "#f44848",
        "backgroundColor": "#af9ff9",
        "borderColor": "#1c572e"
      },
      {
        "size": 50,
        "elevation": 0,
        "borderRadius": 50,
        "borderWidth": 25,
        "color": "#fa3ea3",
        "backgroundColor": "#8ebdfa",
        "borderColor": "#ee2b77"
      },
      {
        "size": 30,
        "elevation": 10,
        "borderRadius": 40,
        "borderWidth": 30,
        "color": "#748aef",
        "backgroundColor": "#f6988f",
        "borderColor": "rgb(229, 134, 118)"
      }
    ]
  ]
};

export default kandinsky;