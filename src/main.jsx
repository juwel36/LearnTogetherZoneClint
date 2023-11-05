import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import Authprovider from './Authproder/Authprovider';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(

  <QueryClientProvider client={queryClient}>
      <React.StrictMode>
  <Authprovider> <RouterProvider router={router} /></Authprovider>
  </React.StrictMode>,
    </QueryClientProvider>

 
)
