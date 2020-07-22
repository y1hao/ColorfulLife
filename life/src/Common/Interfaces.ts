export interface IGame {
    info: IInfo,
    refreshFrequency: number,
    width: number,
    height: number,
    seeds: Array<Array<boolean>>,
    starveCriterion: number,
    reviveCriterion: number,
    borderPolicy: 'alive' | 'dead' | 'roll',
    styles: Array<Array<ICellStyle>>
}

export interface IInfo {
    name: string,
    author: string,
    time: Date,
    description?: string
}

export interface ICellStyle {
    size: number,
    color: string,
    borderRadius: number,
    borderWidth: number,
    borderColor: string
}
