import { getCondeList } from '@/services'
import { useEffect, } from 'react'

const Todo = () => {

    const getConde = async () => {
        const res = await getCondeList({
            page: 1,
            tab: 'ask',
            limit: 20,
            mdrender: false
        })
        console.log('eee', res);
    }

    useEffect(() => {
        getConde()
    }, [])

    return (
        <div>Todo</div>
    );
}

export default Todo;