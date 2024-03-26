export class CountryModel {
    name: string;
    code: string;

    constructor(data?: CountryModel) {
        this.name = data?.name || '';
        this.code = data?.code || '';
    }
}