import { Hero,
  CustomerReview,
  Fotter,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality} from './sections/index';
  import Nav from './components/Nav'
const App = () => {

  return (
    <main className="realtive">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b"><Hero/></section>
      <section className="padding"><PopularProducts/></section>
      <section className="padding"><SuperQuality/> </section>
      <section className="padding"><Services/></section>
      <section className="padding"><SpecialOffer/> </section>
       <section className="bg-pale-blue padding"><CustomerReview/></section> 
       <section className="padding-x sm:py-32 py-16 w-full"><Subscribe/> </section>
       <section className="bg-black padding-x padding-t pb-8"><Fotter/> </section>
    </main>
  );
};

export default App;
