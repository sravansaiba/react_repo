const Api = {
    showLightandDarkMode:false,
    showTicTacToeBoard: true,
    showRandomColorGenerator: true,
    showAccordian: true,
    showTreeView: true
};

export default function featureFlagDataServiceCall() {
    return new Promise((resolve, reject) => {
        if (Api) {
            setTimeout(() => resolve(Api), 500);  // Correctly delay the resolve using a function
        } else {
            reject("some error occurred");
        }
    });
}

