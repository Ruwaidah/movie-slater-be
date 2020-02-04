exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("seats")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("seats").insert([
        {
          row: "A",
          column: 1,
          seatName: "A1",
          available: true,
          handicap: false
        },
        {
          row: "A",
          column: 2,
          seatName: "A2",
          available: true,
          handicap: false
        },
        {
          row: "A",
          column: 3,
          seatName: "A3",
          available: true,
          handicap: false
        },
        {
          row: "A",
          column: 4,
          seatName: "A4",
          available: true,
          handicap: false
        },
        {
          row: "A",
          column: 5,
          seatName: "A5",
          available: true,
          handicap: false
        },
        {
          row: "A",
          column: 6,
          seatName: "A6",
          available: true,
          handicap: false
        },
        {
          row: "A",
          column: 7,
          seatName: "A7",
          available: true,
          handicap: false
        },
        {
          row: "A",
          column: 8,
          seatName: "A8",
          available: true,
          handicap: false
        },
        {
          row: "B",
          column: 1,
          seatName: "B1",
          available: true,
          handicap: false
        },
        {
          row: "B",
          column: 2,
          seatName: "B2",
          available: true,
          handicap: false
        },
        {
          row: "B",
          column: 3,
          seatName: "B3",
          available: true,
          handicap: false
        },
        {
          row: "B",
          column: 4,
          seatName: "B4",
          available: true,
          handicap: false
        },
        {
          row: "B",
          column: 5,
          seatName: "B5",
          available: true,
          handicap: false
        },
        {
          row: "B",
          column: 6,
          seatName: "B6",
          available: true,
          handicap: false
        },
        {
          row: "B",
          column: 7,
          seatName: "B7",
          available: true,
          handicap: false
        },
        {
          row: "B",
          column: 8,
          seatName: "B8",
          available: true,
          handicap: false
        },
        {
          row: "C",
          column: 1,
          seatName: "C1",
          available: true,
          handicap: false
        },
        {
          row: "C",
          column: 2,
          seatName: "C2",
          available: true,
          handicap: false
        },
        {
          row: "C",
          column: 3,
          seatName: "C3",
          available: true,
          handicap: false
        },
        {
          row: "C",
          column: 4,
          seatName: "C4",
          available: true,
          handicap: false
        },
        {
          row: "C",
          column: 5,
          seatName: "C5",
          available: true,
          handicap: false
        },
        {
          row: "C",
          column: 6,
          seatName: "C6",
          available: true,
          handicap: false
        },
        {
          row: "C",
          column: 7,
          seatName: "C7",
          available: true,
          handicap: false
        },
        {
          row: "C",
          column: 8,
          seatName: "C8",
          available: true,
          handicap: false
        },
        {
          row: "D",
          column: 1,
          seatName: "D1",
          available: true,
          handicap: false
        },
        {
          row: "D",
          column: 2,
          seatName: "D2",
          available: true,
          handicap: false
        },
        {
          row: "D",
          column: 3,
          seatName: "D3",
          available: true,
          handicap: false
        },
        {
          row: "D",
          column: 4,
          seatName: "D4",
          available: true,
          handicap: false
        },
        {
          row: "D",
          column: 5,
          seatName: "D5",
          available: true,
          handicap: false
        },
        {
          row: "D",
          column: 6,
          seatName: "D6",
          available: true,
          handicap: false
        },
        {
          row: "D",
          column: 7,
          seatName: "D7",
          available: true,
          handicap: false
        },
        {
          row: "D",
          column: 8,
          seatName: "D8",
          available: true,
          handicap: false
        },
        {
          row: "E",
          column: 1,
          seatName: "E1",
          available: true,
          handicap: false
        },
        {
          row: "E",
          column: 2,
          seatName: "E2",
          available: true,
          handicap: false
        },
        {
          row: "E",
          column: 3,
          seatName: "E3",
          available: true,
          handicap: false
        },
        {
          row: "E",
          column: 4,
          seatName: "E4",
          available: true,
          handicap: false
        },
        {
          row: "E",
          column: 5,
          seatName: "E5",
          available: true,
          handicap: false
        },
        {
          row: "E",
          column: 6,
          seatName: "E6",
          available: true,
          handicap: false
        },
        {
          row: "E",
          column: 7,
          seatName: "E7",
          available: true,
          handicap: false
        },
        {
          row: "E",
          column: 8,
          seatName: "E8",
          available: true,
          handicap: false
        },
        {
          row: "F",
          column: 1,
          seatName: "F1",
          available: true,
          handicap: false
        },
        {
          row: "F",
          column: 2,
          seatName: "F2",
          available: true,
          handicap: false
        },
        {
          row: "F",
          column: 3,
          seatName: "F3",
          available: true,
          handicap: false
        },
        {
          row: "F",
          column: 4,
          seatName: "F4",
          available: true,
          handicap: false
        },
        {
          row: "F",
          column: 5,
          seatName: "F5",
          available: true,
          handicap: false
        },
        {
          row: "F",
          column: 6,
          seatName: "F6",
          available: true,
          handicap: false
        },
        {
          row: "F",
          column: 7,
          seatName: "F7",
          available: true,
          handicap: false
        },
        {
          row: "F",
          column: 8,
          seatName: "F8",
          available: true,
          handicap: false
        },
        {
          row: "G",
          column: 1,
          seatName: "G1",
          available: true,
          handicap: false
        },
        {
          row: "G",
          column: 2,
          seatName: "G2",
          available: true,
          handicap: false
        },
        {
          row: "G",
          column: 3,
          seatName: "G3",
          available: true,
          handicap: false
        },
        {
          row: "G",
          column: 4,
          seatName: "G4",
          available: true,
          handicap: false
        },
        {
          row: "G",
          column: 5,
          seatName: "G5",
          available: true,
          handicap: false
        },
        {
          row: "G",
          column: 6,
          seatName: "G6",
          available: true,
          handicap: false
        },
        {
          row: "G",
          column: 7,
          seatName: "G7",
          available: true,
          handicap: false
        },
        {
          row: "G",
          column: 8,
          seatName: "G8",
          available: true,
          handicap: false
        },
        {
          row: "H",
          column: 1,
          seatName: "H1",
          available: true,
          handicap: false
        },
        {
          row: "H",
          column: 2,
          seatName: "H2",
          available: true,
          handicap: false
        },
        {
          row: "H",
          column: 3,
          seatName: "H3",
          available: true,
          handicap: false
        },
        {
          row: "H",
          column: 4,
          seatName: "H4",
          available: true,
          handicap: false
        },
        {
          row: "H",
          column: 5,
          seatName: "H5",
          available: true,
          handicap: false
        },
        {
          row: "H",
          column: 6,
          seatName: "H6",
          available: true,
          handicap: false
        },
        {
          row: "H",
          column: 7,
          seatName: "H7",
          available: true,
          handicap: false
        },
        {
          row: "H",
          column: 8,
          seatName: "H8",
          available: true,
          handicap: false
        }
      ]);
    });
};
