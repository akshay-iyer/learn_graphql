const UserList = [
    {
        id: 1,
        name: "Akshay",
        username: "random9",
        age: 31,
        nationality: "India",
        friends:[
            {
                id: 3,
                name: "Amey",
                username: "cooldude",
                age: 29,
                nationality: "India"
            },
            {
                id: 4,
                name: "Novak",
                username: "nole",
                age: 38,
                nationality: "Serbia"
            }
        ]
    },
    {
        id: 2,
        name: "Bendes",
        username: "jbendes",
        age: 33,
        nationality: "USA"
    },
    {
        id: 3,
        name: "Amey",
        username: "cooldude",
        age: 29,
        nationality: "India",
        friends:[
            {
                id: 1,
                name: "Akshay",
                username: "random9",
                age: 31,
                nationality: "India",
            }
        ]
    },
    {
        id: 4,
        name: "Novak",
        username: "nole",
        age: 38,
        nationality: "Serbia",
        friends: [
            {
                id: 1,
                name: "Akshay",
                username: "random9",
                age: 31,
                nationality: "India",
            }
        ]
    }
];

const MovieList = [
    {
        id: 1,
        name: 'Infinity War',
        year: 2019,
        isBlockbuster: true
    },
    {
        id: 2,
        name: 'Lootera',
        year: 2015,
        isBlockbuster: false
    },
    {
        id: 3,
        name: 'Interstellar',
        year: 2009,
        isBlockbuster: true
    },
    {
        id: 4,
        name: 'Om Shanti Om',
        year: 2008,
        isBlockbuster: true
    },
    {
        id: 5,
        name: 'Speed',
        year: 2003,
        isBlockbuster: false
    }
];

module.exports = { UserList, MovieList };
