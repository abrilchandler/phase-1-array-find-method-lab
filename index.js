// code your solution here

function superbowlWin(record) {
    const win = record.find((g) => g.result === "W")
    if (win) {
        return win.year
    } return undefined
}
