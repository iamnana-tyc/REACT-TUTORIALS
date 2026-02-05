import { createContext, useContext, useState } from "react";

const ThemeContext = createContext('light');

function App()
{
  const [theme, setTheme] = useState('blue');
  const toggleTheme = () =>
  {
    setTheme((prevTheme) => (prevTheme === 'blue' ? 'dark' : 'blue'));
  };

  return (
    <div>
      <GlobalComponent />
      <ThemeContext.Provider value={theme}>
        <div style={{ border: '2px solid black', padding: '10px' }}>
          <h2>App (Parent)</h2>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <ComponentA />
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

function ComponentA()
{
  return (
    <div style={{ border: '2px solid green', padding: '10px' }}>
      <h2>ComponentA (Child)</h2>
      <ComponentB />
    </div>

  );
};

function ComponentB()
{
  return (
    <div style={{ border: '2px solid gold', padding: '10px' }}>
      <h2>ComponentB (GrandChild)</h2>
      <ThemedComponent />
    </div>

  );
};

function ThemedComponent()
{
  const myTheme = useContext(ThemeContext);
  return (
    <div style={{ border: '2px solid red', padding: '10px' }}>
      <h2>ThemedComponent (Great-GrandChild)</h2>
      <div>The current theme is: {myTheme}</div>
    </div>

  );
};

function GlobalComponent()
{
  const myTheme = useContext(ThemeContext);
  return (
    <div style={{ border: '2px solid black', padding: '10px' }}>
      <h2>GlobalComponent (Outside Provider)</h2>
      <div>The current theme is: {myTheme}</div>
    </div>

  );
};

export default App;