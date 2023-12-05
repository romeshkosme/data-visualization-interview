export interface IWine {
    "Alcohol": number,
    "Malic Acid": number,
    "Ash": number | string,
    "Alcalinity of ash": number,
    "Magnesium": number,
    "Total phenols": number,
    "Flavanoids": number | string,
    "Nonflavanoid phenols": number | string,
    "Proanthocyanins": number | string,
    "Color intensity": number | string,
    "Hue": number | string,
    "OD280/OD315 of diluted wines": number | string,
    "Unknown": number,
    "gamma"?: number
}