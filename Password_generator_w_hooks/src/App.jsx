import { useCallback, useEffect, useRef, useState } from 'react'


function App() {

  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [characterAllowed, setCharacterAllowed] = useState(false);
  let [password, setPassword
  ] = useState("");
  let passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let num = "0123456789"
    let char = "!@#$%^&*()-=_+{}[]`~"
    if (numberAllowed) str += num;
    if (characterAllowed) str += char;
    for (let i = 0; i < length; i++) {
      const idx = Math.floor(Math.random() * str.length );
      pass += str.charAt(idx);
    }
    console.log(pass);
    
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed])

  useEffect(generatePassword, [generatePassword])

  return (
    <>
      <div id='passwordGenerator' className='text-lg flex flex-col gap-5 w-full mx-auto my-8 max-w-max p-3 rounded-xl border'>
        <span className='self-center font-medium'>Passowrd Generator</span>
        <div className='flex items-center'>
          <input type='text' placeholder='password' value={password} className='border p-2 w-full rounded-l-xl' readOnly ref={passwordRef}/>
          <div className='p-2 bg-blue-500 rounded-r-xl text-gray-200 hover:bg-blue-600 hover:text-white transition'>
            <button id='copyBtn' className='flex gap-2 items-center cursor-pointer'
            onClick={() => {
              passwordRef.current?.select()
              window.navigator.clipboard.writeText(password)
            }}>
              <span>Copy</span>
              <i className="fa-regular fa-clipboard"></i>
            </button>
          </div>
        </div>
        <div id='options' className='flex gap-5'>
          <div className='flex gap-1'>
            <input type='range' min='8' max='100' value={length}
              onChange={(e) => setLength(Number(e.target.value))} />
            <label>Length: {length}</label>
          </div>
          <div className='flex gap-1'>
            <input type='checkbox' checked={numberAllowed}
              onChange={() => setNumberAllowed(state => !state)} />
            <label>Numbers Allowed</label>
          </div>
          <div className='flex gap-1'>
            <input type='checkbox' checked={characterAllowed}
              onChange={() => setCharacterAllowed(state => !state)} />
            <label>Characters Allowed</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
