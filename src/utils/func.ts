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
    if (count%2===0) {
        const firstIndex = (count)/2;
        const secondIndex = firstIndex+1;
        const mean = (values[firstIndex]+values[secondIndex])/2;
        return mean;
    } else {
        const index: number = (count+1)/2;
        return values[index]
    }
}

export function calculateMode({count, values}: any) {
    const sortedVal = values.sort((a: number, b: number) => a-b);

    let counter: number = 0, 
        unique: number = Infinity,
        max: number = 0,
        mode :number[] = [];
    for (let i = 0; i < count; i++) {
        // unique = unique === undefined || unique !== values[i] ? values[i] : unique;
        if (unique === undefined || unique !== sortedVal[i]) {
            unique = sortedVal[i];
            counter = 1;
        } else if (unique === values[i]) {
            counter++;
            if (counter > 1 && counter > max) {
                mode.pop();
                mode.push(sortedVal[i]);
            } else if (counter > 1 && counter === max) {
                mode.push(sortedVal[i]);
            }
        }
    }

    if (mode.length > 0) return mode.map((elem, index) => elem.toFixed(3));
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
    return (+Ash*+Hue)/+Magnesium;
}