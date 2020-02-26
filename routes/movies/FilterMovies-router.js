const axios = require("axios");
const router = require("express").Router();

const data1 = require('../../mock-Data/today1917.js')
const data2 = require("../../mock-Data/Movie1917.js")

let theatersInfo = []
router.post("/", (req, res) => {
    let i = 0;
    let moviesAfterFilter = [];
    let results;
    let movieFilter = [];
    let dateToFilter = req.body.days.map(date => date[2])



    const timeFormat = timeFormatFun(req.body.times)

    getallmovies(i)
    function getallmovies(i) {
        let title = '';
        let id;
        const response = movieById1(req.body.movies[i], req, 0, 3)
        const response2 = movieById2(req.body.movies[i], req, 3, 4)
        title = response2.data[0].title;
        id = response2.data[0].tmsId
        movieFilter = filtering([...response.data[0].showtimes, ...response2.data[0].showtimes], timeFormat, dateToFilter)
        results = filteDuplicate(movieFilter)

        moviesAfterFilter.push({ id: id, movie: title, showtimes: results })
        res.status(200).json(moviesAfterFilter)

    }
})

module.exports = router;



function movieById2(id, req, days, number) {
    return data2
}

function movieById1(id, req, days, number) {
    return data1
}

// Get Day By NAME
function getDayName(dateStr, locale) {
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });
}




function filtering(data, times, dates) {
    let showTimefilterDate = data.filter(date => dates.includes(date.dateTime.split("T")[0]));
    showTimefilterDate = showTimefilterDate.filter(time => times.includes(Number(time.dateTime.split("T")[1].split(":")[0])))
    return showTimefilterDate
}


//  Date Format
function getday(number) {
    var day = new Date();
    day.setDate(day.getDate() + number);
    var dd = String(day.getDate()).padStart(2, "0");
    var mm = String(day.getMonth() + 1).padStart(2, "0");
    var yyyy = day.getFullYear();
    const fulldate = `${yyyy}-${mm}-${dd}`
    return fulldate;
}

function checkZip(req) {
    if (req.query && req.query.zip) return (zip = req.query.zip);
    else return (zip = "47712");
}

// CHANGE TIME DATA
function timeFormatFun(times) {
    let timeFormat = []
    times.map(time => {
        for (let i = 0; i < 3; i++) {
            if (time.includes("AM"))
                timeFormat.push(Number(time.split("-")[0]) + i)
            else if (time.includes("PM")) {
                if (time.split("-")[0] == 12)
                    timeFormat.push(Number(time.split("-")[0]) + i)
                else
                    timeFormat.push(Number(time.split("-")[0]) + i + 12)
            }
            else timeFormat.push(21 + i)
        }
    })
    return timeFormat
}


// FILTER DUPLICATE SHOWTIMES
function filteDuplicate(movies) {
    let alltheaters = [];
    let times;
    let address;
    let theatersName = movies.map(name => name.theatre.name)
    theatersName = removeDuplicateUsingSet(theatersName)

    let dates = removeDuplicateUsingSet(movies.map(date => date.dateTime.split("T")[0]))
    theatersName.map((theater) => {
        let showTimes = [];
        let dataForOneTheater = movies.filter(movie => movie.theatre.name == theater)
        for (let i = 0; i < dates.length; i++) {
            var dateStr = dates[i].replace("-", "/");
            var dayName = getDayName(dateStr, "en-US");
            times = dataForOneTheater.filter(info => info.dateTime.split("T")[0] == dates[i])
            let times1 = times.map(t => t.dateTime.split("T")[1])
            showTimes.push({ date: [dates[i], dayName], times: times1 })
        }
        return alltheaters.push({
            theatre: theater,
            id: dataForOneTheater[0].theatre.id,
            address: address,
            showtime: showTimes
        })
    })

    return (alltheaters)
}


// return Array With no Duplicate
function removeDuplicateUsingSet(arr) {
    let unique_array = Array.from(new Set(arr));
    return unique_array;
}

