import {WineData} from "../data/wineData";
import { IWine } from "./interfaces";

type Type = "gamma" | "Flavanoids";

export function calculateTotal(dataList: any, type: any) {
    const total: any = {}
    for (let data of dataList) {
        if (total[data["Alcohol"]]) {
            total[data["Alcohol"]]["total"] += +data[type];
            total[data["Alcohol"]]["values"].push(+data[type]);
            total[data["Alcohol"]]["count"]++;
        } else {
            total[data["Alcohol"]] =  {
                total: +data[type],
                count: 1,
                values: [+data[type]],
            }
        }
    }
    
    for (const classType in total) {
        const MEAN = calculateMean(total[classType]);
        const MEDIAN = calculateMedian(total[classType]);
        const MODE = calculateMode(total[classType]);
        
        total[classType]["mean"] = MEAN.toFixed(3);
        total[classType]["median"] = MEDIAN.toFixed(3);
        total[classType]["mode"] = MODE;
    }

    return total;
}

export function calculateMean({total, count}: any) {
    return total/count;
}

export function calculateMedian({count, values}: any) {
    values = values.sort((a: number, b: number) => a-b)
    if (count%2===0) {
        const firstIndex = (count)/2;
        const secondIndex = firstIndex-1;
        const mean = ((+values[firstIndex])+(+values[secondIndex]))/2;
        return mean;
    } else {
        const index: number = (count+1)/2;
        return values[index-1]
    }
}

export function calculateMode({values}: any) {
    const sortedVal = values.sort((a: any, b: any) => a-b);
    const counts: any = {};
    for (let i = 0; i < sortedVal.length; i++) {
        counts[sortedVal[i]] = (counts[sortedVal[i]] || 0) + 1
    }
    let max = 0;
    let mode: any = [];
    for (var key in counts) {
        if (counts.hasOwnProperty(key)) {
            if (counts[key] > max) {
                max = counts[key];
                mode = [+key];
            } else if (counts[key] === max) {
                max = counts[key];
                mode.push(+key);
            }
        }
    }

    if (mode.length > 0) return mode;
    return "N/A"
}

export function calculateFlavanoid() {
    return calculateTotal(WineData, "Flavanoids")
}

export function calculateGamma() {
    const GAMMA_DATA: IWine[] = WineData.map((elem: IWine, index: number): IWine => {
        elem["gamma"] = gamma(elem);
        return elem;
    })

    return calculateTotal(GAMMA_DATA, "gamma");
}

export function gamma({Ash, Hue, Magnesium}: any) {
    return +((+Ash*+Hue)/+Magnesium).toFixed(3);
}