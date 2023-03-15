var houses = [
  {
    _id: 2001,
    reasePerMounth: 20000,
    numberOfTenants: 3,
    minReaseLength: 3,
    location: "ikuti, mbeya",
    isSaved: false,
    imgs: [
      require("../imgs/img-1.jpg"),
      require("../imgs/img-3.jpg"),
      require("../imgs/img-4.jpg"),
      require("../imgs/img-5.jpg"),
    ],
  },
  {
    _id: 2002,
    reasePerMounth: 35000,
    numberOfTenants: 3,
    minReaseLength: 4,
    location: "veyula, dodoma",
    isSaved: false,
    imgs: [require("../imgs/img-1.jpg"), require("../imgs/img-3.jpg")],
  },
  {
    _id: 2003,
    reasePerMounth: 30000,
    numberOfTenants: 3,
    minReaseLength: 5,
    location: "bahi, dodoma",
    isSaved: false,
    imgs: [],
  },
  {
    _id: 2004,
    reasePerMounth: 25000,
    numberOfTenants: 3,
    minReaseLength: 3,
    location: "magogoni, bagamoyo",
    isSaved: false,
    imgs: [],
  },
  {
    _id: 2005,
    reasePerMounth: 25000,
    numberOfTenants: 3,
    minReaseLength: 6,
    location: "dampo, iyunga",
    isSaved: false,
    imgs: [],
  },
];

// Remember: function should accept start,middle or end to endicate where to start also should accept an limit to tell the end of the array
export function getAllHouses() {
  return houses;
}

export function addHouse(house) {
  const firstHouse = houses[0];
  const keys = Object.keys(house);

  for (var key of keys) {
    if (!firstHouse[key]) {
      return "House Not found";
    }
  }

  houses = [...houses, house];
  return houses;
}

export function getHouse(Id) {
  const houseInDB = houses.find((h) => h._id === parseInt(Id));
  if (!houseInDB) {
    return "House Not found";
  }
  return houseInDB;
}

export function updateHouse(id, toChangedElements) {
  const houseInDB = houses.find((h) => h._id === parseInt(id));
  if (!houseInDB) {
    return "House Not found";
  }
  const houseInDBIndex = houses.findIndex((h) => h._id === houseInDB._id);

  toChangedElements.forEach((elem) => {
    const [key, value] = Object.entries(elem)[0];
    houseInDB[key] = value;
  });

  houses[houseInDBIndex] = houseInDB;
  return houseInDB;
}

export function deleteHouse() {

}