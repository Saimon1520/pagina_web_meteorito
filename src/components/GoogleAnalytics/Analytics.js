// import { BetaAnalyticsDataClient } from '@google-analytics/data';
// const propertyId = '415896003';

// // Using a default constructor instructs the client to use the credentials
// // specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
// const analyticsDataClient = new BetaAnalyticsDataClient();

// // Runs a simple report.
// async function runReport() {
//   const [response] = await analyticsDataClient.runReport({
//     property: `properties/${propertyId}`,
//     dateRanges: [
//       {
//         startDate: '365daysAgo',
//         endDate: 'today',
//       },
//     ],
//     dimensions: [
//       {
//         name: 'country',
//       },
//     ],
//     metrics: [
//       {
//         name: 'activeUsers',
//       },
//     ],
//   });

//   console.log('Report result:');
//   response.rows.forEach(row => {
//     console.log(row.dimensionValues[0], row.metricValues[0]);
//   });
// }

// runReport();
//Buena suerte joven, dios lo bendiga xd
// const { BigQuery } = require('@google-cloud/bigquery');
// const bigquery = new BigQuery({
//     projectId: 'pagina-web-414004',
//     keyFilename: '../../credentials.json',
// });

// const query = `
//     SELECT *
//     FROM \`YOUR_PROJECT_ID.dataset.table_name\`;
// `;
// bigquery.query(query)
//     .then(data => {
//         const rows = data[0];
//         rows.forEach(row => console.log(row));
//     })
//     .catch(err => console.error(err));

