import logo from './logo.svg';
import './App.css';
import BasicReactTable from './BasicReactTable';
import ReactTableSorting from './ReactTableSorting';
import ReactTablePagination from './ReactTablePagination';
const App = () => {
  return (
    <div className='App'>
      <BasicReactTable />
      <ReactTableSorting />
      <ReactTablePagination />
    </div>
  );
};
export default App;
