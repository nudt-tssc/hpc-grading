import * as dotenv from "dotenv";

export const config = dotenv.config();

export const organiztion: string = 'nudt-tssc';            // 组织
export const fullOrganization: string = '218960471-nudt-tssc-classroom-1e64a9'; // classroom名称
export const assignment = 'HPC-challenge';   // assignment
export const works = ['cpu_challenge', 'gpu_challenge']; // assignment 的不同情况
export const AUTH_TOKEN = process.env['TOKEN'];
export const SESSION_TOKEN = process.env['SESSION_TOKEN'];
 
// JsonData store the grades and the other info.
export let JsonData: ResultObject = {
    available: {},
    // grades has the tree. grades --> studentGithubUsername --> workName --> grade
    students: [],
    // the list of questions
    questions: [],
    // latest update time
    latestUpdatedAt: Date.now()
}


// initialize the JsonData by works
for(let work of works) {
    JsonData['available'][work] = 0;
} 
