function reading(pages, read, neededDays){
    let pagesPerHour = pages / read
    let daysPerWeek = pagesPerHour / neededDays
    console.log(daysPerWeek)
}
reading(212,20,2)