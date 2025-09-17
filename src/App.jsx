import { useState ,useRef} from 'react'

function App() {
  const [text, settext] = useState('');
  const inputRef = useRef(null);
 
  const length =12;
    
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbols = "@!#$%^&*(){}[]<>/+-";
    const allChars = upperCase + lowerCase + number + symbols;


  const createPassword = function () {
       let password ="";

        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += symbols [Math.floor(Math.random() * symbols.length)];

        while(length > password.length){
          password += allChars [Math.floor(Math.random() * allChars.length)];
        }
       settext(password);
  }


  const copyPassword = function () {   
     inputRef.current.select(); 
   navigator.clipboard.writeText(text);
  
  }

  return (
    <>
      <div className="bg-[#002339] text-white min-h-screen flex flex-col items-center justify-center px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-semibold text-center">
          Genrate a <br />
          <span className="text-green-600 underline underline-offset-4">
            Random password
          </span>
        </h1>

        {/* Input Box */}
        <div className="mt-10 mb-6 w-full max-w-xl bg-white text-[#333] flex items-center justify-between py-3 px-4 rounded-md shadow">
          <input
            type="text"
            value={text}
            readOnly
           ref={inputRef}
            placeholder="Password"
            
            className="w-full border-0 outline-0 text-lg md:text-xl bg-transparent"
          />
          <img
            src="/copy.png"
            alt="Copy"
            onClick={copyPassword}
            className="w-6 h-6 cursor-pointer ml-2"
          />
        </div>

        {/* Button */}
        <button
          onClick={createPassword}
          className="flex items-center gap-2 border-0 outline-0 bg-green-600 hover:bg-green-700 transition text-white text-lg md:text-xl font-medium py-3 px-5 rounded-md shadow"
        >
          <img
            src="/generate.png"
            alt="Generate"
            className="w-6 h-6"
          />
          Generate Password
        </button>
      </div>
    </>
  )
}

export default App
