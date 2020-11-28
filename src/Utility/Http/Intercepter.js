import  {useEffect,useState} from 'react';
import  Axios  from 'axios';

const baseURL= process.env.REACT_APP_BACKEND_URL;


export function useHttpInterceptor(configs) {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(null);
    

     console.log("BASE_URL",baseURL);
    useEffect(() => {
        if (configs !== null) {
            makeHttpRequest();
        }
        async function makeHttpRequest() {
             try {
                 const axiosInstance = Axios.create({
                     baseURL: baseURL,
                     headers: {
                         'Access-Control-Allow-Origin': '*',
                     }
                 });
                 const res = await axiosInstance.request(configs);
                 setResult(res);
                 console.log(res)
             }catch (e) {
                 console.log(e);
                 if (e.isAxiosError) {
                     setError(error.response)
                 }
             }
        }
    },[configs]);
    return { result, loading, isError, error };
}