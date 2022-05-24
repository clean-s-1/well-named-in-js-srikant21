import test  from "./test.js";
import { MajorColorNames, MinorColorNames,ColorPair } from "./colorInfo.js";
import getPairNumberFromColor from "./pairNumberFromColor.js";

/**
 * printColorManualUsingColorPair function is used to 
 * format the color coding in a form that someone can print
 */
function printColorManualUsingColorPair() {
	let pairedColor = new ColorPair();
	MajorColorNames.forEach((majColorCode) => {
		pairedColor.majorColor = majColorCode;
		MinorColorNames.forEach((minColorCode) => {
			pairedColor.minorColor = minColorCode;
			let colorPairedNumber = getPairNumberFromColor(pairedColor);
			console.log(
				`Major Color:${pairedColor.majorColor}, Minor Color: ${pairedColor.minorColor}, Color Code:${colorPairedNumber}`
			);
		});
	});
}

test();
printColorManualUsingColorPair();
