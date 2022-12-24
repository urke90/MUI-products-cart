import { useState, useCallback, useEffect } from 'react';
import axios from '../api/axios.config';
import { AxiosRequestConfig, AxiosError } from 'axios';

interface IUseAxios<T> {
    isLoading: boolean;
    error: AxiosError<unknown, any> | undefined;
    handleClearError: () => void;
    data: T | undefined;
    handleManualRequest: () => Promise<void>;
}

export const useAxios = <T>(
    config: AxiosRequestConfig,
    loadOnStart: boolean
): IUseAxios<T> => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<AxiosError<unknown, any> | undefined>();
    const [data, setData] = useState<T>();

    const sendRequest = async (): Promise<void> => {
        try {
            setIsLoading(true);

            const response = await axios.request(config);
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            const err = error as AxiosError;
            setError(err);
            console.log('err', err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        console.log('oplio useEffect u useAxios');

        if (loadOnStart) sendRequest();
    }, []);

    const handleManualRequest = useCallback(async () => {
        await sendRequest();
    }, []);

    const handleClearError = useCallback(() => setError(undefined), []);

    return {
        isLoading,
        error,
        handleManualRequest,
        handleClearError,
        data
    };
};
//: Promise<AxiosResponse<any, any> | undefined>
