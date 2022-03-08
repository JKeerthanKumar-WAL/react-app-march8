import DataTable from 'react-data-table-component';
const columns = [
    { name: 'ID', selector: (row) => row.id, sortable: true },
    { name: 'TITLE', selector: (row) => row.title, sortable: true },
    { name: 'YEAR', selector: (row) => row.year, sortable: true }
];
const data = [
    { id: 1, title: 'Chatrapathi', year: '2005' },
    { id: 2, title: 'Pournami', year: '2006' },
    { id: 3, title: 'Yogi', year: '2007' },
    { id: 4, title: 'Munna', year: '2007' },
    { id: 5, title: 'Bujjigadu', year: '2008' },
    { id: 6, title: 'Billa', year: '2009' },
    { id: 7, title: 'Ek Niranjan', year: '2009' },
    { id: 8, title: 'Darling', year: '2010' },
    { id: 9, title: 'Mr.Perfect', year: '2011' },
    { id: 10, title: 'Rebel', year: '2012' },
    { id: 11, title: 'Mirchi', year: '2013' },
    { id: 12, title: 'Baahubali', year: '2015' },
    { id: 13, title: 'Baahubali 2', year: '2017' },
    { id: 14, title: 'Saaho', year: '2019' },
    { id: 15, title: 'Radhe Shyam', year: '2022' }
]
const ReactTableSorting = () => {
    return (
        <div className='Pagination-div'>
            <h1>Movies of Prabhas</h1>
            <DataTable columns={columns} data={data} pagination />
        </div>
    );
};
export default ReactTableSorting;