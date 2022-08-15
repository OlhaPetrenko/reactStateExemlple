import AccordionItem from './AccordionItem/AccordionItem';
import List from './List/List';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <AccordionItem />
      <List />
    </div>
  );
};
