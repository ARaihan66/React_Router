import { useSearchParams } from 'react-router-dom'

const UseSearchParamsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <div>
            <h1>UseSearchParams</h1>
            <h4>{searchParams.get('name')}</h4>
            <h4>{searchParams.get('age')}</h4>
        </div>
    )
}

export default UseSearchParamsPage
