const convertDate = (date) => {
    let date2 = new Date(date *  1000).toDateString();

    return date2;
  }

export {
    convertDate
}