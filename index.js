// ✨ WHITE BOARD WARM UP PROBLEMS ✨

console.log("YEEHAW");

function equalSlices(total, people, each) {
    // let slices = people * each;

	// if (slices <= total) {
    //     return true;
    // } else {
    //     return false;
    // }

    return people*each <= total ? true : false;

}

console.log(equalSlices(24, 12, 2));