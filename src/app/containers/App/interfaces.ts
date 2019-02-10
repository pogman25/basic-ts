export interface IPeopleReducer {
    isFetching: boolean;
    people: any[];
    totalCount: number;
    nextPage: number;
}