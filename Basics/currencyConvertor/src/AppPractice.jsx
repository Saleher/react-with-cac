import { useState, useEffect, useRef } from 'react';
import { useOnlineStatus } from './hooks/useOnlineStatus'
import { useFormInput } from './hooks/useFormInput'
import './App.css'
// import { useState, useRef } from 'react';

function App() {

  const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];

  function StatusBar(){
    const isOnline = useOnlineStatus();
    return <h2 className='mb-3'>{isOnline ? '✅Online' : '❌ You are offline'}</h2>
  }

  function SaveButton(){
    const isOnline = useOnlineStatus();
    function handleSaveClick(){
      console.log('Saved');
    }
    return (
      <button onClick={handleSaveClick} className={`${isOnline ? "bg-blue-500" : "bg-red-500"} text-white`}>{isOnline ? "Save" : "Connecting..."}</button>
    )
  }


  // For form 
  const firstNameProps = useFormInput('Mary');
  const lastNameProps = useFormInput('Popins');
  


  //Video player
  const [isPlaying, setIsPlaying] = useState(false);

  function VideoPlayer({src, isPlaying}){
      const ref = useRef(null);

      useEffect(() => {
          if(isPlaying){
              ref.current.play();
          }else{
              ref.current.pause();
          }
      }, [isPlaying])

      return <video ref={ref} src={src} loop playsInline />
     
  }

  

  

  return (
    <>       
            
      <form className='bg-white shadow-md px-8 pt-6 pb-8 mb-4'>
        <div className='mb-4 text-left'>
          <label htmlFor="name">First Name</label>
          <input type="text" {...firstNameProps} className='w-full border py-2 px-3 shadow mt-2 text-gray-500' placeholder={firstNameProps.value} />
        </div>
        <div className='mb-4 text-left'>
          <label htmlFor="name">Last Name</label>
          <input type="text"  {...lastNameProps} className='w-full border py-2 px-3 shadow mt-2 text-gray-500' placeholder='' />
        </div>
        <div className='mb-4 text-left text-center'>
          <p>Have a Good Day <strong>{firstNameProps.value} {lastNameProps.value}</strong></p>
        </div>
        <div className="flex flex-wrap mb-4">
          <div className="w-full"><StatusBar /></div>
          <div className="w-full"><SaveButton /></div>
        </div>
      </form> 


      <div className="flex flex-wrap">
        <div className="w-1/2 mx-auto">
            <div className='mt-4'>
              <button className='bg-orange-400' onClick={() => setIsPlaying(!isPlaying)}>Play</button>
              <div >
                <VideoPlayer isPlaying={isPlaying}  src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
              </div>
          </div>
        </div>
      </div>

      <div className="my-5">
        <ul>
          {people.map((item) => <li key={people[item]}>{item}</li>)}
        </ul>
      </div>
     

      



      
      






       





        
    </>
  )
}

export default App
