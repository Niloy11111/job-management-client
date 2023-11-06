import { BsSearch } from "react-icons/bs";


const Banner = () => {
    return (
        <div className="-mx-12 bg-[#aee2f7] lg:-mx-36 ">

            <div className="flex gap-24 lg:h-[70vh]  justify-between  ">

                <div className=" flex-1">
                   <div className="flex justify-center items-center h-full">
                   <div className="mb-24">
                        <h2 className=" text-[#1d2d5a] text-3xl lg:text-6xl font-Inter font-bold">Find work <br />
                            that's <span className="text-[#3e5aab] italic">worth it.</span>  </h2>
                        <p className=" mt-4 lg:mt-6 font-inter text-[#494e5d]">Make a career match where the people, perks and values align with your needs.</p>        
                    <div className='mt-6 border-2 flex rounded-full py-1 lg:mt-10  bg-[#FFF]  w-[300px] md:w-[300px] lg:w-[470px] border-[#9adbf5]'>
                        <button type="submit" className='bg-[#feea59] flex items-center justify-center w-[50px] h-[50px] rounded-full ml-2 text-lg font-semibold text-[#333F]'> <BsSearch></BsSearch></button>
                        <input name='category' id='field-id' className='pl-4 outline-none ' type="text" placeholder='Search jobs or companies' />
                    </div>

                    </div>
                    
                   </div>
                </div>



                <div className="flex-1">
                    <img className="h-full w-full rounded-bl-[35%]" src="https://advice-assets.themuse.com/advice-static/images/homepage-hero-image.jpg"></img>
                </div>

            </div>


        </div>
    );
};

export default Banner;

