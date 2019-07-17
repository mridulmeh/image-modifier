import * as d3 from 'd3';
import BudgetSummaryStatement from './cleaned-data/Budget Summary Statement.csv'
import CapitalExpenditure from './cleaned-data/Capital Expenditure.csv'
import CapitalReceipts from './cleaned-data/Capital Receipts.csv'
import RevenueExpenditure from './cleaned-data/Revenue Receipts.csv'
import RevenueReceipts from './cleaned-data/Capital Receipts.csv';

console.log(CapitalReceipts)
const datasets = [{
	name: 'BudgetSummaryStatement',
	data: BudgetSummaryStatement
},{
	name: 'CapitalExpenditure',
	data: CapitalExpenditure
},{
	name: 'CapitalReceipts',
	data: CapitalReceipts
},{
	name: 'RevenueExpenditure',
	data: RevenueExpenditure
},{
	name: 'RevenueReceipts',
	data: RevenueReceipts
}]

const csvReader = (resolve, reject, dataset) => {
	return d3.csv(dataset.data).then((res)=>{
		resolve({[dataset.name]: res})
	})
}

export const dataLoader = () => {
	const allPromises = [];
	datasets.forEach(dataset=>{
		const promise = new Promise(function(resolve, reject){
			return csvReader(resolve, reject, dataset);
		})
		allPromises.push(promise)
	})
	
	return Promise.all(allPromises);
};

export const camelCaseToWords = (camelCasedWord) => camelCasedWord.replace(/([A-Z])/g, ' $1')
	.replace(/^./, (str) => str.toUpperCase());

export const keyGenerator = (data) => {
	const keys = Object.keys(data[0]);
	const actualKeys = [];

	keys.forEach(key => {

		if(typeof data[0][key] !== 'object'){

			actualKeys.push({
				key,
				name: camelCaseToWords(key)
			});
		}
	});
	return actualKeys;
};


