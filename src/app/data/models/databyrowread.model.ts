export class DataByRowReadModel {
    country: string;
    indicator: string;
    frequency: string;
    date: Date;
    value: number;
    quarter: string;

    constructor(country: string,
                indicator: string,
                frequency: string,
                date: Date,
                value: number,
                quarter: string) {
        this.country = country;
        this.indicator = indicator;
        this.frequency = frequency;
        this.date = date;
        this.value = value;
        this.quarter = quarter;
        }
}