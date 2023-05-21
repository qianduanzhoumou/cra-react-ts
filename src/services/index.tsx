import services from './http';

export const getCondeList = (data: any) => {
    return services({
        url: '/api/v1/topics',
        method: 'get',
        data
    });
}