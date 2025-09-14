import image from '../assets/cryptoList.png'
import Services from '../components/Services';
import CryptoList from './CryptoList';

const HomePage = () => {
    return (
        <>
            <section className="relative z-0 mx-auto px-4 sm:px-8 md:px-[121px] pt-8 pb-16">
                <div className="flex flex-col md:flex-row items-center md:items-start md:relative gap-8 md:gap-12">
                    <div className="md:w-1/2 md:sticky md:top-40 flex flex-col gap-4 text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-[48px] w-full md:w-[433px] font-bold leading-tight">
                            Chose <span className='text-[#000B9F]'>Ace DIgital </span>World Today
                        </h1>
                        <p className="font-medium text-lg sm:text-xl md:text-[24px]">
                            Ace digital is the easiest place to buy and sell
                            cryptocurrency. Sign up and get started today.
                        </p>
                        <div className='h-auto flex flex-col sm:flex-row gap-4 md:gap-[17px] md:h-[95px]'>
                            <input className='h-full w-full sm:w-[355px] border-[#00000029] p-2.5 border-[1px] rounded-[8px]' placeholder='Email/phone number' type="text" />
                            <button className='h-full w-full sm:w-[192px] bg-[#000B9F] p-2.5 rounded-[8px] text-white'>Get Started</button>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full flex items-center px-4 justify-center md:justify-end mt-8 md:mt-0">
                        <CryptoList/>
                        {/* <img className='w-full h-full  md:w-[328px] md:h-[328px] object-contain' src={image} /> */}
                    </div>
                </div>
            </section>
            <Services />
        </>
    )
}

export default HomePage;