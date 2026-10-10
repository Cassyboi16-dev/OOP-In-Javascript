
const currency = 'ℕ'
const worker = 'Software Engineer'

const job = {
    name: 'Software Engineering',
    salary: 100000,
    company: 'Amazon',
    country: 'USA',
    work: () => console.log(`${worker} is currently calling api's to amazon's website`)
}

console.log(job.name);
console.log(currency + job.salary);
console.log(job.company);
console.log(job.country);
console.log(job.work());