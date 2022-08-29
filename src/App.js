import 'bootswatch/dist/quartz/bootstrap.min.css';
import './App.css';
import { LatestCard } from './Components/Card/LatestCard';
import {  TrendingCard } from './Components/Card/TrendingCard';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header';
import { Pagination } from './Components/Pagination';
import { Search } from './Components/Search/Search';

function App() {
  return (
    <>
    <Header />
    <Search />
    <TrendingCard />
    <LatestCard/>
    <Pagination />
    <Footer />
    </>
  );
}

export default App;
