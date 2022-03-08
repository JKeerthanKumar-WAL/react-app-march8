import DataTable from 'react-data-table-component';
const columns = [
    { name: 'ID', selector: (row) => row.id, sortable: true },
    { name: 'TITLE', selector: (row) => row.title, sortable: true },
    { name: 'EPISODES', selector: (row) => row.episodes, sortable: true }
];
const data = [
    { id: 1, title: 'Naruto', episodes: 220 },
    { id: 2, title: 'Death Note', episodes: 37 },
    { id: 3, title: 'Naruto Shippuden', episodes: 500 },
    { id: 4, title: 'Code Geass', episodes: 50 },
    { id: 5, title: 'Parasyte', episodes: 25 },
    { id: 6, title: 'Steins Gate', episodes: 25 },
    { id: 7, title: 'Tokyo Ghoul', episodes: 48 },
    { id: 8, title: 'Haikyu', episodes: 84 },
    { id: 9, title: 'Attack on Titan', episodes: 85 },
];
const ReactTableSorting = () => {
    return (
        <div className="Sorting-div">
            <h1>Anime List</h1>
            <DataTable columns={columns} data={data} />
        </div>
    );
};
export default ReactTableSorting;