import DataTable from 'react-data-table-component';
const columns = [
    { name: 'ID', selector: row => row.id },
    { name: 'TITLE', selector: row => row.title },
    { name: 'YEAR', selector: row => row.year },
];
const data = [
    { id: 1, title: 'Beetlejuice', year: '1988' },
    { id: 2, title: 'Ghostbusters', year: '1984' },
]
const BasicReactTable = () => {
    return (
        <div className='BasicTable-div'>
            <h1>Basic React Table</h1>
            <DataTable columns={columns} data={data} />
        </div>
    );
};
export default BasicReactTable;