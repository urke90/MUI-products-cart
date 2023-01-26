import { useState, useCallback, useEffect } from 'react';
import axios from '../api/axios.config';
import { AxiosRequestConfig, AxiosError } from 'axios';

interface IUseAxios<T> {
    isLoading: boolean;
    error: AxiosError<unknown, any> | undefined;
    handleClearError: () => void;
    data: T | undefined;
}

export const useAxios = <T>(
    config: AxiosRequestConfig,
    loadOnStart: boolean
): IUseAxios<T> => {
    console.log('useAxios hook begin');

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<AxiosError<unknown, any> | undefined>();
    const [data, setData] = useState<T>();

    const sendRequest = useCallback(async (): Promise<void> => {
        try {
            // setIsLoading(true);
            const response = await axios.request(config);
            setData(response.data);
        } catch (error) {
            setIsLoading(false);
            const err = error as AxiosError;
            setError(err);
            console.log('err', err);
        } finally {
            setIsLoading(false);
        }
    }, [config]);

    useEffect(() => {
        if (loadOnStart) {
            console.log('useEffect u CUSTOM HOOKU');

            sendRequest();
        }
    }, [loadOnStart, sendRequest]);

    const handleClearError = useCallback(() => setError(undefined), []);

    return {
        isLoading,
        error,
        data,
        handleClearError
    };
};
