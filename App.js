import logo from './logo.svg';
import './App.css';
import User from './User'




function App() {
  const user = [ 
    {
      name: 'Elon musk',
      location: 'Las Vegas',
      foodType: 'Everything',
      age: 28,
      likes: 'Coding into the wee hours of the morning',
      twitterUsername: 'Elon Musk',
      avatar:
        'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
    },
    {
      name: 'Chris Morgan',
      location: 'Florida',
      foodType: 'Chicken and Chips',
      age: 45,
      likes: 'Swimming and Reading',
      twitterUsername: 'Morgan45',
      avatar:
        'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
    
    }
    ]
    console.log(user)
    console.log(user[0].name)
    console.log(user[1].name)

  return (
    <div className="App">
      <header className="App-header">Weekly Task 7 </header> 
    <div>
      <User uProfile={user}/>
    </div>
  
    <footer></footer>
    </div>
    
  );
}

export default App;

