import React, { useCallback, useEffect, useState } from 'react';

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

import { CardContainer } from './style';
import { api } from '../../services';
import { useHistory } from 'react-router';

interface IStacks{
  id: number;
  title: string;
  description: string;
  profile: string;
  count: number;
}

const Home: React.FC = () => {

  const [ stack, setStacks ] = useState<IStacks[]>([])
  const [ count, setCount ] = useState(0)

  const history = useHistory()

  useEffect( () => {
    api.get('options').then(
      response => {
        setStacks(response.data)
      }
    )

    api.get('count').then(
      response => {
        setCount(response.data.total)
      }
    )
  }, [])

  const handleVoting = useCallback( ( id: number ) => {
    const getStack = stack.find( stack => stack.id === id )
    
    if (!getStack){
      return 
    }

    api.put(`options/${id}`, {
      ...getStack,
      count: getStack.count +1
    })

    api.put('count', {
      total: count +1
    })

    history.push('result')

  }, [stack, count, history])

  return (
      <div className="container">
        <Nav total={count}/>
          <CardContainer>
            { stack.map( stk => (
              <div key={stk.id} className="card">
                <img 
                  src={stk.profile}
                  alt={stk.title}
                  height="200px"
                  width="200px"
                />
                <div className="text-content">
                  <h3> { stk.title } </h3>
                  <p>{ stk.description }</p>
                </div>
                <button onClick={() => handleVoting(stk.id) }> Votar </button>
              </div>

            ))}
            
          </CardContainer>
        <Footer />
      </div>
  );
}

export default Home;