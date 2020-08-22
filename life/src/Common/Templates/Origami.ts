import { IGame } from "../Interfaces";

const origami: IGame = {
  "name": "Origami",
  "author": "Yihao",
  "time": new Date("2020-08-14T04:49:44.076Z"),
  "description": "This game only uses the elevation property to differentiate cells. By this it displays the style of orimami art.",
  "refreshFrequency": 5,
  "width": 20,
  "height": 20,
  "seeds": [
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false
    ],
    [
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      true,
      true,
      true,
      false,
      false,
      false
    ],
    [
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      true,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      true,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      false
    ],
    [
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      true,
      true,
      true,
      false,
      false
    ],
    [
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      true,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      true,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false
    ],
    [
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      true,
      true,
      true,
      false
    ],
    [
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      true,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      true,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ]
  ],
  "surviveRangeLower": 2,
  "surviveRangeUpper": 3,
  "reproductionRangeLower": 3,
  "reproductionRangeUpper": 3,
  "borderPolicy": "roll",
  "styles": [
    [
      {
        "size": 100,
        "color": "#eee",
        "backgroundColor": "white",
        "borderColor": "gray",
        "borderRadius": 0,
        "borderWidth": 0,
        "elevation": 1
      },
      {
        "size": 100,
        "color": "#eee",
        "backgroundColor": "white",
        "borderColor": "gray",
        "borderRadius": 0,
        "borderWidth": 0,
        "elevation": 2
      },
      {
        "size": 100,
        "color": "#eee",
        "backgroundColor": "white",
        "borderColor": "gray",
        "borderRadius": 0,
        "borderWidth": 0,
        "elevation": 3
      },
      {
        "size": 100,
        "color": "#eee",
        "backgroundColor": "white",
        "borderColor": "gray",
        "borderRadius": 0,
        "borderWidth": 0,
        "elevation": 4
      },
      {
        "size": 100,
        "color": "#eee",
        "backgroundColor": "white",
        "borderColor": "gray",
        "borderRadius": 0,
        "borderWidth": 0,
        "elevation": 5
      },
      {
        "size": 100,
        "color": "#eee",
        "backgroundColor": "white",
        "borderColor": "gray",
        "borderRadius": 0,
        "borderWidth": 0,
        "elevation": 6
      },
      {
        "size": 100,
        "color": "#eee",
        "backgroundColor": "white",
        "borderColor": "gray",
        "borderRadius": 0,
        "borderWidth": 0,
        "elevation": 0
      },
      {
        "size": 100,
        "color": "#eee",
        "backgroundColor": "white",
        "borderColor": "gray",
        "borderRadius": 0,
        "borderWidth": 0,
        "elevation": 0
      },
      {
        "size": 100,
        "color": "#eee",
        "backgroundColor": "white",
        "borderColor": "gray",
        "borderRadius": 0,
        "borderWidth": 0,
        "elevation": 0
      }
    ],
    [
      {
        "size": 100,
        "color": "#eeeeee",
        "backgroundColor": "white",
        "borderColor": "gray",
        "borderRadius": 0,
        "borderWidth": 0,
        "elevation": 7
      },
      {
        "size": 100,
        "color": "#eeeeee",
        "backgroundColor": "white",
        "borderColor": "gray",
        "borderRadius": 0,
        "borderWidth": 0,
        "elevation": 8
      },
      {
        "size": 100,
        "color": "#eeeeee",
        "backgroundColor": "white",
        "borderColor": "gray",
        "borderRadius": 0,
        "borderWidth": 0,
        "elevation": 9
      },
      {
        "size": 100,
        "color": "#eeeeee",
        "backgroundColor": "white",
        "borderColor": "gray",
        "borderRadius": 0,
        "borderWidth": 0,
        "elevation": 10
      },
      {
        "size": 100,
        "color": "#eeeeee",
        "backgroundColor": "white",
        "borderColor": "gray",
        "borderRadius": 0,
        "borderWidth": 0,
        "elevation": 5
      },
      {
        "size": 100,
        "color": "#eeeeee",
        "backgroundColor": "white",
        "borderColor": "gray",
        "borderRadius": 0,
        "borderWidth": 0,
        "elevation": 5
      },
      {
        "size": 100,
        "color": "#eeeeee",
        "backgroundColor": "white",
        "borderColor": "gray",
        "borderRadius": 0,
        "borderWidth": 0,
        "elevation": 5
      },
      {
        "size": 100,
        "color": "#eeeeee",
        "backgroundColor": "white",
        "borderColor": "gray",
        "borderRadius": 0,
        "borderWidth": 0,
        "elevation": 5
      },
      {
        "size": 100,
        "color": "#eeeeee",
        "backgroundColor": "white",
        "borderColor": "gray",
        "borderRadius": 0,
        "borderWidth": 0,
        "elevation": 5
      }
    ]
  ]
};

export default origami;