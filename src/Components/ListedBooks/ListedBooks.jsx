import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/AddtoDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([])
    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList);

    }, [])
    return (
        <div>
            <h2 className='my-5'>listed books</h2>
            <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2 className='text-2xl font-semibold my-8'>Books I read : {readList.length}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center lg:w-[85%] mx-auto">
      {
        readList.map(book => <Book key={book.bookId} book={book}></Book>)
      }
      </div>
    </TabPanel>
    <TabPanel>
      <h2 className='text-2xl'>My Wish List :</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedBooks;