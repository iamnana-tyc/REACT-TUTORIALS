import { createContext, useContext } from "react";

const ThemeContext = createContext('light');

function App()
{
  //const myTheme = 'dark';

  return (
    <ThemeContext.Provider value="red">
      <div style={{ border: '2px solid black', padding: '10px' }}>
        <h2>App (Parent)</h2>
        <ComponentA />
      </div>
    </ThemeContext.Provider>
  );
};

function ComponentA()
{
  return (
    <div style={{ border: '2px solid black', padding: '10px' }}>
      <h2>ComponentA (Child)</h2>
      <ComponentB />
    </div>

  );
};

function ComponentB()
{
  return (
    <div style={{ border: '2px solid black', padding: '10px' }}>
      <h2>ComponentB (GrandChild)</h2>
      <ThemedComponent />
    </div>

  );
};

function ThemedComponent()
{
  const myTheme = useContext(ThemeContext);
  return (
    <div style={{ border: '2px solid black', padding: '10px' }}>
      <h2>ThemedComponent (Great-GrandChild)</h2>
      <div>The current theme is: {myTheme}</div>
    </div>

  );
};


export default App;