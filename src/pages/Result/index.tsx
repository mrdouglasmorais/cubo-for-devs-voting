import React, { useEffect, useState } from 'react';

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

import { CardCount } from './style';
import { api } from '../../services';

interface IStacks{
  id: number;
  title: string;
  description: string;
  profile: string;
  count: number;
}

const Result: React.FC = () => {

  const [ result, setResult ] = useState<IStacks[]>([])
  const [ count, setCount ] = useState(0)

  useEffect( () => {
    api.get('options').then(
      response => {
        setResult(response.data)
      }
    )
    api.get('count').then(
      response => {
        setCount(response.data.total)
      }
    )
  }, [])
  return (
      <div className="container">
        <Nav total={count}/>
          <h1 style={{ textAlign: 'center', marginTop: 40}}>Corpo da nossa página</h1>
          { result.map( result => (
            <CardCount key={result.id}>
              <div className="framework-title">
              <img 
                src={result.profile}
                alt={result.title}
                width="50px"
                height="50px"
              />
              <h3>{result.title}</h3>
            </div>

            <h3>{result.count}</h3>
            <h3>{ ((result.count / count) * 100).toFixed(2) + '%'}</h3>
            <div className="percent">
              <div className="progress" style={{ width: ((result.count / count) * 100).toFixed(2) + '%' }}></div>
            </div>
            </CardCount>

          )) }
          
        <Footer />
      </div>
  );
}

export default Result;