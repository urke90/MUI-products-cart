import { AxiosError } from 'axios';

import axios from './axios.config';
import { IBook } from '../ts/books';

export const getBooks = async (): Promise<IBook[]> => {
    try {
        const response = await axios.get('books.json');
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        console.log('error fetch book', error);
        console.log('error fetch book', typeof error);
        throw new Error(err.message);
    }
};

// * We don't have to put code in try catch statement since react query will handl it for us
// * EXAMPLE WITHOUT TRY CATCH
// export const getBooks = async (): Promise<IBook[]> => {
//     const response = await axios.get('books.json');
//     return response.data;
// };
