function convertDateToISO(dateString) {
    // Step 1: Parse the original date string
    const originalDate = new Date(dateString);

    const newDate = new Date(originalDate);

    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = newDate.toLocaleDateString("en-US", options);

    return formattedDate;
}

export default convertDateToISO;
