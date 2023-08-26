import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[{
    path:"/",
    element:<MainContainer/>
  },
  {
    path:"/watch",
    element:<WatchPage/>
  }]

}]);

function App() {
  return (
    <Provider store={store}>
    <div className="App h-full">
      <Header/>
      {/* <Body/> */}
      <RouterProvider router={appRouter}/>
      <Footer/>


      {
        /*
            Head
            Body
              Sidebar
                MenuItems
              Main Container
                ButtonList
                VideoContainer
                  VideoCard

        */
      }
    </div>
    </Provider>
  );
}

export default App;
