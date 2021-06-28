import Nav from '../../components/Navbar';
import Banner from '../../components/Banner';
import Wallet from '../../components/Wallet';
import Differential from '../../components/differential';
import Form from '../../components/Form';
import Footer from '../../components/Footer';

export default function Home(){
  return(
    <>
      <Nav />
      <Banner />
      <Wallet />
      <Differential />
      <Form />
      <Footer />
    </>
  )
}
