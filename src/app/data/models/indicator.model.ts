export class IndicatorModel {
    name: string;
    code: string;

    /**
     *
     */
    constructor(data?: IndicatorModel) {
        this.name = data?.name || '';
        this.code = data?.code || '';
    }
}