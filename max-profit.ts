import fs = require("fs");

export class MaxProfit {
  findTheBestProfit(data: string) {
    let listDataObject = data.split(" ").map((value, index) => {
      return { value: parseInt(value), index };
    });

    let lowestAndHighestAndIndex: {
      lowest: number;
      indexLowest: number;
      highest: number;
      indexHighest: number;
    } = { lowest: 0, indexLowest: 0, highest: 0, indexHighest: 0 };
    let indexLowest = lowestAndHighestAndIndex.indexLowest;
    let indexHighest = lowestAndHighestAndIndex.indexHighest;

    while (
      lowestAndHighestAndIndex.indexLowest >=
      lowestAndHighestAndIndex.indexHighest
    ) {
      listDataObject = listDataObject.splice(
        lowestAndHighestAndIndex.indexLowest,
        listDataObject.length - 1
      );
      lowestAndHighestAndIndex = this.getLowestAndHighestAndIndex(
        listDataObject
      );
      indexHighest = indexLowest + lowestAndHighestAndIndex.indexHighest;
      indexLowest += lowestAndHighestAndIndex.indexLowest;
    }

    return {
      indexHighest,
      indexLowest,
      bestProfit:
        lowestAndHighestAndIndex.highest - lowestAndHighestAndIndex.lowest,
      lowest: lowestAndHighestAndIndex.lowest,
      highest: lowestAndHighestAndIndex.highest
    };
  }

  getLowestAndHighestAndIndex(
    listDataObject: { value: number; index: number }[]
  ): {
    lowest: number;
    indexLowest: number;
    highest: number;
    indexHighest: number;
  } {
    let lowest = Number.POSITIVE_INFINITY;
    let highest = Number.NEGATIVE_INFINITY;
    let indexHighest: number = 0;
    let indexLowest: number = 0;
    let tmp;
    for (let i = listDataObject.length - 1; i >= 0; i--) {
      tmp = listDataObject[i].value;
      if (tmp < lowest) {
        lowest = tmp;
        indexLowest = i;
      }
      if (tmp > highest) {
        highest = tmp;
        indexHighest = i;
      }
    }

    return { lowest, indexLowest, highest, indexHighest };
  }
}

fs.readFile(__dirname + "/data-history.txt", function(
  err,
  data
) {
  if (err) {
    throw err;
  }
  const result = new MaxProfit().findTheBestProfit(data.toString());
  console.log(`
    The maximum profit Jacky can make is: ${
      result.bestProfit
    }, he will buy at index ${result.indexLowest} and sell at index ${
    result.indexHighest
  }.`);
});
