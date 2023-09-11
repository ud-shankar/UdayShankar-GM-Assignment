import { Page, expect } from "@playwright/test";
import * as fs from 'fs';
import * as csv from '@fast-csv/parse';

export class keyword {

    page:Page

    constructor(page:Page) {
        this.page = page;
    }

    focusAndType(locator:string, input:string) {
        this.page.locator(locator).waitFor({state:"attached", timeout:20000});
        this.page.locator(locator).type(input);
    }

    clearAndFill(locator:string, input:string) {
        this.page.locator(locator).waitFor({state:"attached", timeout:20000});
        this.page.locator(locator).fill(input);
    }

    getJsonData(path:string): string {
        var jsonData, jsonString;
        try {
            jsonString = fs.readFileSync(path, 'utf-8');
            jsonData = JSON.parse(jsonString);
          } catch (err) {
            console.error(err);
        }
        return jsonString;
    }

    async getCsvData(path:string): Promise<string[]> {
        const data: string[] = [];
        const stream = await Promise.all([
        csv.parseFile(path, {headers: true})
        .on('error', error => console.error(error))
        .on('data', row => data.push(row))
        ]);
        return data;
    }

}