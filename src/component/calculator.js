import React, { useEffect, useState } from 'react';
import clicksound from "../component/sound/mouse-click-153941.mp3";

const Calculator = () => {
    const audio = new Audio(clicksound);
    const [result, setResult] = useState('');

    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event;
            if (!isNaN(key) || '+-*/'.includes(key)) {
                handleValue(key);
            } else if (key === 'Enter') {
                event.preventDefault();
                operation();
            } else if (key === 'Backspace') {
                setResult(prevResult => prevResult.slice(0, -1));
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleValue = (value) => {
        setResult(prevResult => prevResult.concat(value));
        audio.play();
    }

    const clearData = () => {
        setResult('');
        audio.play();
    }

    const operation = () => {
        try {
            setResult(eval(result).toString());
            audio.play();
        } catch (error) {
            setResult('Error');
        }
    }

    return (
        <div className='w-screen h-screen bg-gradient-to-t from-[#0f0c29] via-[#302b63] to-[#24243e] flex justify-center items-center'>
            {/* input field */}
            <div className='main w-64 h-auto bg-gradient-to-t from-[#5c258d] to-[#4389a2] rounded-2xl shadow-xl'>
                <div className='screen p-2'>
                    <input
                        type="text"
                        value={result}
                        className='w-full px-1 pt-10 rounded-lg text-right outline-none placeholder-black text-2xl'
                        placeholder='0'
                    />
                </div>

                {/* keyboard design */}
                <div className="keyboard">
                    <div className='flex justify-between m-2'>
                        <input type="button" value="C" onClick={clearData} className='bg-black text-white w-12 h-12 shadow-md rounded-full font-medium border-2' />
                        <input type="button" value="<" onClick={() => handleValue('<')} className='bg-black text-white w-12 h-12 shadow-md rounded-full font-medium border-2' />
                        <input type="button" value="%" onClick={() => handleValue('%')} className='bg-black text-white w-12 h-12 shadow-md rounded-full font-medium border-2' />
                        <input type="button" value="/" onClick={() => handleValue('/')} className='bg-black text-white w-12 h-12 shadow-md rounded-full font-medium border-2' />
                    </div>

                    <div className='flex justify-between m-2'>
                        <input type="button" value="7" onClick={() => handleValue('7')} className='bg-orange-500 w-12 h-12 shadow-md rounded-full font-medium border-2' />
                        <input type="button" value="8" onClick={() => handleValue('8')} className='bg-orange-500 w-12 h-12 shadow-md rounded-full font-medium border-2' />
                        <input type="button" value="9" onClick={() => handleValue('9')} className='bg-orange-500 w-12 h-12 shadow-md rounded-full font-medium border-2' />
                        <input type="button" value="*" onClick={() => handleValue('*')} className='bg-orange-500 w-12 h-12 shadow-md rounded-full font-medium border-2' />
                    </div>

                    <div className='flex justify-between m-2'>
                        <input type="button" value="4" onClick={() => handleValue('4')} className='bg-orange-500 w-12 h-12 shadow-md rounded-full font-medium border-2' />
                        <input type="button" value="5" onClick={() => handleValue('5')} className='bg-orange-500 w-12 h-12 shadow-md rounded-full font-medium border-2' />
                        <input type="button" value="6" onClick={() => handleValue('6')} className='bg-orange-500 w-12 h-12 shadow-md rounded-full font-medium border-2' />
                        <input type="button" value="-" onClick={() => handleValue('-')} className='bg-orange-500 w-12 h-12 shadow-md rounded-full font-medium border-2 text-xl' />
                    </div>

                    <div className='flex justify-between m-2'>
                        <input type="button" value="1" onClick={() => handleValue('1')} className='bg-orange-500 w-12 h-12 shadow-md rounded-full font-medium border-2' />
                        <input type="button" value="2" onClick={() => handleValue('2')} className='bg-orange-500 w-12 h-12 shadow-md rounded-full font-medium border-2' />
                        <input type="button" value="3" onClick={() => handleValue('3')} className='bg-orange-500 w-12 h-12 shadow-md rounded-full font-medium border-2' />
                        <input type="button" value="+" onClick={() => handleValue('+')} className='bg-orange-500 w-12 h-12 shadow-md rounded-full font-medium border-2' />
                    </div>

                    <div className='flex justify-between m-2'>
                        <input type="button" value="0" onClick={() => handleValue('0')} className='bg-orange-500 w-12 h-12 shadow-md rounded-full font-medium border-2' />
                        <input type="button" value="00" onClick={() => handleValue('00')} className='bg-orange-500 w-12 h-12 shadow-md rounded-full font-medium border-2' />
                        <input type="button" value="." onClick={() => handleValue('.')} className='bg-orange-500 w-12 h-12 shadow-md rounded-full font-medium border-2' />
                        <input type="button" value="=" onClick={operation} className='bg-orange-500 w-12 h-12 shadow-md rounded-full font-medium border-2' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
