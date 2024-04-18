import { Team } from '../modules/ekipa.module.ts';

const team0: Team = new Team({
    id: 0,
    name: 'Manchester United',
    yearEstablished: 1878,
    director: {
        firstName: 'John',
        lastName: 'Murtough',
        birthYear: 1974,
        role: 'Executive Vice-Chairman',
        id: 1,
        validity: 1
    },
    trainer: {
        firstName: 'Ralf',
        lastName: 'Rangnick',
        birthYear: 1958,
        role: 'Interim Manager',
        id: 2,
        validity: 1
    },
    player: [
        {
            firstName: 'Cristiano',
            lastName: 'Ronaldo',
            birthYear: 1985,
            height: 187,
            weight: 1,
            injured: false,
            id: 3
        },
        {
            firstName: 'Bruno',
            lastName: 'Fernandes',
            birthYear: 1994,
            height: 179,
            weight: 2,
            injured: false,
            id: 4
        },
        {
            firstName: 'Marcus',
            lastName: 'Rashford',
            birthYear: 1997,
            height: 180,
            weight: 3,
            injured: true,
            id: 5
        }
    ]
});

const team1: Team = new Team({
    id: 1,
    name: 'Juventus',
    yearEstablished: 1897,
    director: {
        firstName: 'Andrea',
        lastName: 'Agnelli',
        birthYear: 1975,
        role: 'Chairman',
        id: 26,
        validity: 1
    },
    trainer: {
        firstName: 'Massimiliano',
        lastName: 'Allegri',
        birthYear: 1967,
        role: 'Head Coach',
        id: 27,
        validity: 1
    },
    player: [
        {
            firstName: 'Cristiano',
            lastName: 'Ronaldo',
            birthYear: 1985,
            height: 187,
            weight: 16,
            injured: false,
            id: 28
        },
        {
            firstName: 'Paulo',
            lastName: 'Dybala',
            birthYear: 1993,
            height: 177,
            weight: 17,
            injured: true,
            id: 29
        },
        {
            firstName: 'Giorgio',
            lastName: 'Chiellini',
            birthYear: 1984,
            height: 187,
            weight: 18,
            injured: false,
            id: 30
        }
    ]
});

const team2: Team = new Team({
    id: 2,
    name: 'Paris Saint-Germain',
    yearEstablished: 1970,
    director: {
        firstName: 'Nasser',
        lastName: 'Al-Khelaifi',
        birthYear: 1973,
        role: 'President',
        id: 31,
        validity: 1
    },
    trainer: {
        firstName: 'Mauricio',
        lastName: 'Pochettino',
        birthYear: 1972,
        role: 'Head Coach',
        id: 32,
        validity: 1
    },
    player: [
        {
            firstName: 'Lionel',
            lastName: 'Messi',
            birthYear: 1987,
            height: 170,
            weight: 19,
            injured: false,
            id: 33
        },
        {
            firstName: 'Neymar',
            lastName: 'Jr',
            birthYear: 1992,
            height: 175,
            weight: 20,
            injured: true,
            id: 34
        },
        {
            firstName: 'Kylian',
            lastName: 'Mbappé',
            birthYear: 1998,
            height: 178,
            weight: 21,
            injured: false,
            id: 35
        }
    ]
});

const team3: Team = new Team({
    id: 3,
    name: 'AC Milan',
    yearEstablished: 1899,
    director: {
        firstName: 'Paolo',
        lastName: 'Scaroni',
        birthYear: 1946,
        role: 'Chairman',
        id: 36,
        validity: 1
    },
    trainer: {
        firstName: 'Stefano',
        lastName: 'Pioli',
        birthYear: 1965,
        role: 'Head Coach',
        id: 37,
        validity: 1
    },
    player: [
        {
            firstName: 'Zlatan',
            lastName: 'Ibrahimović',
            birthYear: 1981,
            height: 195,
            weight: 22,
            injured: false,
            id: 38
        },
        {
            firstName: 'Gianluigi',
            lastName: 'Donnarumma',
            birthYear: 1999,
            height: 196,
            weight: 23,
            injured: false,
            id: 39
        },
        {
            firstName: 'Sandro',
            lastName: 'Tonali',
            birthYear: 2000,
            height: 181,
            weight: 24,
            injured: false,
            id: 40
        }
    ]
});

const team4: Team = new Team({
    id: 4,
    name: 'Chelsea',
    yearEstablished: 1905,
    director: {
        firstName: 'Bruce',
        lastName: 'Buck',
        birthYear: 1946,
        role: 'Chairman',
        id: 41,
        validity: 1
    },
    trainer: {
        firstName: 'Thomas',
        lastName: 'Tuchel',
        birthYear: 1973,
        role: 'Head Coach',
        id: 42,
        validity: 1
    },
    player: [
        {
            firstName: 'N\'Golo',
            lastName: 'Kanté',
            birthYear: 1991,
            height: 168,
            weight: 25,
            injured: false,
            id: 43
        },
        {
            firstName: 'Mason',
            lastName: 'Mount',
            birthYear: 1999,
            height: 180,
            weight: 26,
            injured: false,
            id: 44
        },
        {
            firstName: 'Kai',
            lastName: 'Havertz',
            birthYear: 1999,
            height: 188,
            weight: 27,
            injured: true,
            id: 45
        }
    ]
});

const teams: Team[] = [team0, team1, team2, team3, team4];

export default teams;
