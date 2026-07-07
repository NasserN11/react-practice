import Greeting from "./Greeting";
import ProfileInfo from "./Profile";
import Counter from "./Counter";

const App = () => {
  return (
    <div>
      <h1>Hello React!</h1>
      <Greeting />
      <ProfileInfo name="Nasser" university="Cankaya" country="Chad"/>
      <ProfileInfo name="Ahmed" university="MIT" country="Sudan"/>

      <Counter/>
    </div>
  );
};

export default App;




