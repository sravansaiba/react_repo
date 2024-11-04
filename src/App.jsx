import './App.css'
// import ScrollUpsideDown from './components/scroll top-to-bottom'
// import ScrollToSection from './components/scroll top-to-bottom/scrollToSection'

// import FeatureFlags from './components/feature-flags/FeatureFlags'
// import FeatureFlagGlobalState from './components/feature-flags/context'
// import CustomFetch from './components/use-fetch/test'
// import ClicktoShow from './components/use-outside-click/test'
// import WindowResizetest from './components/customwindowresize/test'
// import AutoSuggest from './components/auto-suggest'
// import TicTac from './components/tictactoe'
// import ModelTest from './components/custom-modal/model-text'
// import GitProfileFetch from './components/gitprofilefinder/gitprofilw'
// import GitFinder from './components/gitprofilefinder/gitprofilw'
// import ScrollIndicator from './components/scroll-indicator'
// import TabTest from './components/custom-tabs/tabs-test'
// import GitProfileFetch from './components/gitprofilefinder/gitprofilw'
// import LoadProds from './components/load-more-button'
// import TreeView from './components/menu'
// import menus from './components/menu/data'
// import Accordian from './components/accordian'
// import ImageSlider from './components/image-slider'
// import LoadMoreData from './components/load-more-button'
// import Qrgen from './components/qr-code-generator'
// import ScrollIndicator from './components/scroll-indicator'
// import LDMode from './components/whitedarkmode'
// import RandomColor from './components/randomcolor'
// import StarRating from './components/star-rating'

// import Home from './components/food-recepie-app/home'
// import Details from './components/food-recepie-app/details'
// import Favourites from './components/food-recepie-app/favourites'
// import Navbar from './components/food-recepie-app/navbar'
// import GlobalState from './components/food-recepie-app/context'
// import Header from './context-api/Header'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './context-api/Home'
import Cart from './context-api/Cart'
import Header from './context-api/Header'
function App() {

  return (
    <>
    {/* <Accordian/> */}
    {/* <RandomColor/> */}
    {/* <StarRating noOfstars={5}/> */}
    {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10}/> */}
    {/* <LoadMoreData/>/ */}
    {/* <TreeView menus={menus}/>  */}
    {/* <LoadProds/> */}
    {/* <Qrgen/> */}
    {/* <LDMode/> */}
    {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}
    {/* <GitProfileFetch/> */}
    {/* <TabTest/> */}
    {/* <ModelTest/>/ */}
    {/* <GitFinder/> */}
    {/* <GitProfileFetch/> */}
    {/* <AutoSuggest /> */}
    {/* <TicTac/> */}
    {/* <FeatureFlagGlobalState>
      <FeatureFlags/>
    </FeatureFlagGlobalState>
     */}
     {/* <CustomFetch/>
     <ClicktoShow/> */}
     {/* <WindowResizetest/> */}
     {/* <ScrollUpsideDown/> */}
     {/* <ScrollToSection/> */}
   {/* <BrowserRouter>
   <GlobalState>
     <div className="container">
      <Navbar/>
      <Routes>
        <Route
        path='/'
        element={<Home/>}/>
        <Route
        path='/favourites'
        element={<Favourites/>}/>
        <Route
        path='/recipe-items/:id'
        element={<Details/>}/>
       </Routes>
     </div>
     </GlobalState>
     </BrowserRouter> */}

     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' Component={Home} exact></Route>
      <Route path='/cart' Component={Cart}></Route>
     </Routes>
     </BrowserRouter>
      
     
     
    </>
  )
}

export default App
