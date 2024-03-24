export class DataItemModel {
    countryName: string;
    countryCode: string;
    indicatorName: string;
    indicatorCode: string;
    frequency: string;
    date: Date;
    value: number;
    /**
     *
     */
    constructor(countryName: string, 
                countryCode: string,
                indicatorName: string,
                indicatorCode: string,
                frequency: string,
                date: Date,
                value: number) {
        this.countryName = countryName;
        this.countryCode = countryCode;
        this.indicatorName = indicatorName;
        this.indicatorCode = indicatorCode;
        this.frequency = frequency;
        this.date = date;
        this.value = value;
    }
}