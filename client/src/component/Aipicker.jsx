import React from 'react';
import CustomButton from './CustomButton';

const Aipicker = ({ prompt, setPrompt, generatingImage, handleSubmite }) => {
    return (
        <div className='aipicker-container'>
            <textarea placeholder='Ask AI...' rows={5} value={prompt} onChange={(e) => setPrompt(e.target.value)} className='aipicker-textarea' />
            <div className='flex flex-wrap gap-3'>
                {generatingImage ? (
                    <CustomButton type='outline' title='Asking AI...' customeStyles='text-xs' />
                ) : (
                    <>
                        <CustomButton type='outline' title='AI Logo' handleClick={() => handleSubmite('logo')} customeStyles='text-xs' />

                        <CustomButton type='filled' title='AI FUll' handleClick={() => handleSubmite('fUll')} customeStyles='text-xs' />
                    </>
                )}
            </div>
        </div>
    );
};

export default Aipicker;
