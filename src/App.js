import React, {useState} from 'react';

import MyContext from './context/MyContext';
import Wrapper from './components/Wrapper';
import FormWrapper from './components/FormWrapper';
import Navbar from './components/Navbar';

function App() {
  const[val, setVal] = useState(" ");
  return (
    <MyContext.Provider value = {{val, setVal}}>
        <Wrapper>
          <Navbar/>
          <FormWrapper/>
        </Wrapper>
    </MyContext.Provider>
  );
}

export default App;
