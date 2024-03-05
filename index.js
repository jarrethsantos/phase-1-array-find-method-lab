function superbowlWin(resultsArray) {
    const winObject = resultsArray.find(function(obj) {
        return obj.result === "W";
    });

    // Check if winObject is defined and return the corresponding year, otherwise return undefined
    if (winObject) {
        return winObject.year;
    } else {
        return undefined;
    }
}