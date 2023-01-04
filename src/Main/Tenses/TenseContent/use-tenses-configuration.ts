import { get } from "lodash";


export const useTensesConfiguration = (configuration: any) => {
    const columns = get(configuration, '[0].columns');
    const tip = get(configuration, '[0].data[0].tip');
    const table = get(configuration, '[0].data[0].table');
    const practice = get(configuration, '[0].practice');
    const { cases, tense } = get(configuration, '[0].cases');

return { columns, tip, table, practice, cases, tense };
}